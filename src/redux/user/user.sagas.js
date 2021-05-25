import { takeLatest, call, all, put, takeEvery } from 'redux-saga/effects'
import { userTypes } from './user.types'

import {  auth, handleUserProfile, getCurrentUser } from '../../firebase/utils'

import { signInSuccess, signOutUserSuccess, serverSignUpError } from './user.actions'

// ...SIGN IN SAGAS (EMAIL AND PASSWORD)...
export function* getSnapshotFromUserAuth(user, additionalData = {} ){
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

export function* emailSignIn( { payload: { email, password } } ){
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password)
        yield getSnapshotFromUserAuth(user)
        
     } catch (error) {
          yield put (serverSignUpError(error.message)) // catch server thrown errors...
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





// ...SIGN OUT SAGAS... 
//...generator first, needs to be passed as an argument to intercept action type being passed in takeLatest
    export function* signOutUser(){
        try {
            yield auth.signOut()
            yield put(
                signOutUserSuccess()
            )
        } catch (error) {
            // console.error(error.message)
        }
    }

export function* onSignOutUserStart(){
    yield takeLatest(userTypes.SIGN_OUT_USER_START, signOutUser)
}










export default function* userSagas(){
    yield all([
        call(onEmailSignInStart), 
        call(onSignOutUserStart),
        call(onCheckUserSession),
    ])
}