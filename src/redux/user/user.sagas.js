import { takeLatest, call, all, put, takeEvery } from 'redux-saga/effects'
import { userTypes } from './user.types'

import {  auth, handleUserProfile, getCurrentUser } from '../../firebase/utils'

import { signInSuccess, signOutUserSuccess, serverSignUpError, signUpUserError, registerServerError } from './user.actions'

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






// ...SIGN UP SAGAS...
    export function* signUpUser( { payload: { 
        displayName,
        email, 
        password,
        confirmPassword
    } }) {
        if(password !== confirmPassword){
            const err = ["Passwords do not match."]
            yield put(
                signUpUserError(err)
            )
            // return
        }

        try {
            
            /* Function expects username and password, which is destructured above
                        destructure user object from the submission*/
            const { user } = yield auth.createUserWithEmailAndPassword(email, password)
            //Write to the database with the user object, and also passing display name...
            yield call (handleUserProfile, { userAuth: user, additionalData: { displayName} } )

        } catch (error) {
            yield put(
                registerServerError(error.message)
            )
        }
    }
export function* onSignUpUserStart(){
    yield takeLatest(userTypes.SIGN_UP_USER_START, signUpUser)
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
        call(onSignUpUserStart), 
        call(onSignOutUserStart),
        call(onCheckUserSession),
    ])
}