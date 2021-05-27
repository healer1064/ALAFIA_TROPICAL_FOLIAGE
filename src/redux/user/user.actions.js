import  { userTypes } from './user.types'


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

// RESET PASSWORD ACTIONS ...
export const resetPasswordStart = userCredentials => ({
    type: userTypes.RESET_PASSWORD_START,
    payload: userCredentials
})

export const resetPasswordSuccess = () => ({
    type: userTypes.RESET_PASSWORD_SUCCESS,
    payload: true
})

export const resetPasswordError = error => ({
    type: userTypes.RESET_PASSWORD_ERROR,
    payload: error
})

export const resetUserState = () => ({
    type: userTypes.RESET_USER_STATE,
})


export const googleSignInStart = () => ({
    type: userTypes.GOOGLE_SIGN_IN_START
}) 


export const resetAllAuthForms = () => ({
    type: userTypes.RESET_AUTH_FORMS
})