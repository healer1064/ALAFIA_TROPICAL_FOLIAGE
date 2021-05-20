import { userTypes } from './userTypes'

const initialState = {
    currentUser: null,
    signInSuccess: false,
    signUpSuccess: false,
    signInError: '',
    signUpError: [],
    signUpError_auth: '',

    resetPasswordSuccess: false,
    resetPasswordError: []
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case userTypes.SET_CURRENT_USER: 
        return {
            ...state, // Spread current state , and return user data from payload.
            currentUser: action.payload
        }
        case userTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                signInSuccess: action.payload,
                signInError: ''
            }
        case userTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                signUpSuccess: action.payload
            }
        case userTypes.SIGN_IN_FAILED:
            return {
                ...state,
                signInError: action.payload
            }
        case userTypes.SIGN_UP_FAILED:
            return {
                ...state,
                signUpError: action.payload
            }
        case userTypes.SIGN_UP_FAILED_AUTH:
            return {
                ...state,
                signUpError_auth: action.payload
            }

        case userTypes.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                resetPasswordSuccess: action.payload
            }
        case userTypes.RESET_PASSWORD_FAILED:
            return {
                ...state,
                resetPasswordError: action.payload
            }
        default:
            return state
    }
}