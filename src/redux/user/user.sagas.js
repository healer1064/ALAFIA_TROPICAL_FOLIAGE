import { takeLatest, call, all, put } from 'redux-saga/effects'
import { userTypes } from './user.types'

import {  auth, handleUserProfile, getCurrentUser } from '../../firebase/utils'

import { signInSuccess } from './user.actions'

export function* getSnapshotFromUserAuth(user, additionalData = {}){
    try {
            const userRef = yield call(handleUserProfile, { userAuth: user, additionalData })
            const snapshot = yield userRef.get()
            yield put(
                signInSuccess({
                    id: snapshot.id,
                    ...snapshot.data(),
                    ...user
                })
            )

    } catch (error) {
        // console.error(error.message)
    }
}

export function* emailSignIn({ payload: { email, password } }){
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password)
        yield getSnapshotFromUserAuth(user)
        
                        
        } catch (error) {
         // console.error(error.message)
            
        }
}
// TakeLatest effect expects a Redux action type, and payload when invoked. Generator function is then called and will intercept this async function...
export function* onEmailSignInStart(){
    yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn)
}

export function* isUserAuthenticated(){
    try {
        const userAuth = yield getCurrentUser()
        if(!userAuth) return
        yield getSnapshotFromUserAuth(userAuth)

    } catch (error) {
        // console.error(error.message)
    }
}

export function* onCheckUserSession(){
    yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated)
}


export default function* userSagas(){
    yield all([
        call(onEmailSignInStart), 
        call(onCheckUserSession)
    ])
}