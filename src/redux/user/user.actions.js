import  { userTypes } from './user.types'
import {  auth, handleUserProfile, } from '../../firebase/utils'
import { GoogleProvider } from '../../firebase/utils'


// SIGN IN ACTIONS...
export const emailSignInStart = userCredentials => ({
    type: userTypes.EMAIL_SIGN_IN_START, /*Pass credentials to store...
                                           Intercepted by emailSignIn saga */
    payload: userCredentials // credentials are yielded by getSnapshotFromUserAuth saga
})

export const signInSuccess = user => ({
    type: userTypes.SIGN_IN_SUCCESS,
    payload: user
})


export const checkUserSession = () => ({
    type: userTypes.CHECK_USER_SESSION,
    
})

// SIGN OUT ACTIONS...
export const signOutUserStart = () => ({
    type: userTypes.SIGN_OUT_USER_START,
})

export const signOutUserSuccess = () => ({
    type: userTypes.SIGN_OUT_USER_SUCCESS
})


// SIGN UP ACTIONS...
export const signUpUserStart = userCredentials => ({
    type: userTypes.SIGN_UP_USER_START,
    payload: userCredentials
})

export const signUpUserError = error => ({
    type: userTypes.SIGN_UP_USER_ERROR,
    payload: error
})
 export const registerServerError = error => ({
    type: userTypes.SIGN_UP_SERVER_ERROR,
    payload: error
})


// ACTIONS CREATORS FOR SERVER ERRORS...
export const serverSignUpError = error => ({
    type: userTypes.SIGN_IN_SERVER_ERROR,
    payload: error
})


// export const signOutUserStart = () => ({
//     type: userTypes.SIGN_OUT_USER_START
// })

// export const signOutUserSuccess = () => ({
//     type: userTypes.SIGN_OUT_USER_SUCCESS
// })




// export const setCurrentUser = user => ({
//     type: userTypes.SET_CURRENT_USER,
//     payload: user
// })



// SIGN IN ACTION
// export const signInUser = ({email, password}) => async dispatch => {
//      try {
//             await auth.signInWithEmailAndPassword(email, password)
//             dispatch({
//                 type: userTypes.SIGN_IN_SUCCESS,
//                 payload: true
//             })
                
//         } catch (error) {
//             // console.error(error.message)
//              dispatch({
//                  type: userTypes.SIGN_IN_FAILED,
//                  payload: error.message
//              })
//         }
// }


// SIGN UP ACTION
// export const signUpUser = ({ displayName, email, password, confirmPassword}) => async dispatch => {
//     if(password !== confirmPassword){
//             const err = ["Passwords do not match."]
//             dispatch({
//                 type: userTypes.SIGN_UP_FAILED,
//                 payload: err
//             })
//             return
//         }

//         try {
            
//             /* Function expects username and password, which is destructured above
//                         destructure user object from the submission*/
//             const {user} = await auth.createUserWithEmailAndPassword(email, password)
//             //Write to the database with the user object, and also passing display name...
//             await handleUserProfile(user, {displayName})
//             dispatch({
//                 type: userTypes.SIGN_UP_SUCCESS,
//                 payload: true
//             })

//         } catch (error) {
//             // console.error(error)
//             dispatch({
//                 type: userTypes.SIGN_UP_FAILED_AUTH,
//                 payload: error.message
//             })
//         }
// }

export const resetPassword = ({ email }) => async dispatch => {
    const config = {
        url: 'http://localhost:3000/login'//Change this for production
    }
    
        try {
            await auth.sendPasswordResetEmail(email, config)
            .then(() => {
                dispatch({
                    type: userTypes.RESET_PASSWORD_SUCCESS,
                    payload: true
                })
            })
            .catch(() => {
                const err = ['Email not found. Please try again.']
                dispatch({
                    type: userTypes.RESET_PASSWORD_FAILED,
                    payload: err
                })
            })

        } catch(error) {
            // console.error(error)
        }
}

export const signInWithGoogle = () => async dispatch => {
    try {
        await auth.signInWithPopup(GoogleProvider)
            .then(() => {
                dispatch({
                    type: userTypes.SIGN_IN_SUCCESS,
                    payload: true
                })
            })
    } catch (error) {
        // console.log(error.message)
    }
    
}

export const resetAllAuthForms = () => ({
    type: userTypes.RESET_AUTH_FORMS
})