import { userTypes } from './user.types'

const INITIAL_STATE = {
    currentUser: null,
    resetPasswordSuccess: false,
    resetPasswordError: [],
    signUpUserErrors: [],
    serverSignUpErr: '',
    signUpServerError: '',
}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case userTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                serverSignUpErr: '',
                signUpUserErrors: [],
                signUpServerError: '',
            }
        // case userTypes.RESET_USER_STATE:
        case userTypes.SIGN_OUT_USER_SUCCESS:
            return {
                ...state,
                ...INITIAL_STATE
            }
        case userTypes.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                resetPasswordSuccess: action.payload
            }
        case userTypes.RESET_PASSWORD_ERROR:
            return {
                ...state,
                resetPasswordError: action.payload,
            }
        case userTypes.SIGN_IN_SERVER_ERROR:
            return {
                ...state,
                serverSignUpErr: action.payload
            }
        case userTypes.SIGN_UP_USER_ERROR:
            return {
                ...state,
                signUpUserErrors: action.payload
            }
        case userTypes.SIGN_UP_SERVER_ERROR:
            return {
                ...state,
                signUpServerError: action.payload
            }
        default:
            return state
    }
}