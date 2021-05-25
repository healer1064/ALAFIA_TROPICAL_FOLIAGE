import { userTypes } from './user.types'

const INITIAL_STATE = {
    currentUser: null,
    serverSignUpErr: '',
    // signInSuccess: false,
    // signUpSuccess: false,
    // signInError: '',
    // signUpError: [],
    
    // resetPasswordSuccess: false,
    // resetPasswordError: []
}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        // case userTypes.SET_CURRENT_USER: 
        // return {
        //     ...state, // Spread current state , and return user data from payload.
        //     currentUser: action.payload
        // }
        // case userTypes.SIGN_IN_SUCCESS:
        //     return {
        //         ...state,
        //         signInSuccess: action.payload,
        //         signInError: ''
        //     }
        // case userTypes.SIGN_UP_SUCCESS:
        //     return {
        //         ...state,
        //         signUpSuccess: action.payload
        //     }
        // case userTypes.SIGN_IN_FAILED:
        //     return {
        //         ...state,
        //         signInError: action.payload
        //     }
        // case userTypes.SIGN_UP_FAILED:
        //     return {
        //         ...state,
        //         signUpError: action.payload
        //     }
        // case userTypes.SIGN_UP_FAILED_AUTH:
        //     return {
        //         ...state,
        //         signUpError_auth: action.payload
        //     }

        // case userTypes.RESET_PASSWORD_SUCCESS:
        //     return {
        //         ...state,
        //         resetPasswordSuccess: action.payload
        //     }
        // case userTypes.RESET_PASSWORD_FAILED:
        //     return {
        //         ...state,
        //         resetPasswordError: action.payload
        //     }
        // case userTypes.RESET_AUTH_FORMS:
        //     return {
        //         ...state,
        //         signInSuccess: false,
        //         signUpSuccess: false,
        //         signInError: '',
        //         signUpError: [],
        //         signUpError_auth: '',
        //         resetPasswordSuccess: false,
        //         resetPasswordError: []
        //     }
        case userTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload
            }
        case userTypes.SIGN_OUT_USER_SUCCESS:
            return {
                ...state,
                ...INITIAL_STATE
            }
        case userTypes.SIGN_IN_SERVER_ERROR:
            return {
                ...state,
                serverSignUpErr: action.payload
            }
        default:
            return state
    }
}