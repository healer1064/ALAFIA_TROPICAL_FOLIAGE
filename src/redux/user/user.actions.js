import  { userTypes } from './userTypes'
import {  auth, handleUserProfile } from '../../firebase/utils'

export const setCurrentUser = user => ({
    type: userTypes.SET_CURRENT_USER,
    payload: user
})

// SIGN IN ACTION
export const signInUser = ({email, password}) => async dispatch => {
     try {
            await auth.signInWithEmailAndPassword(email, password)
            dispatch({
                type: userTypes.SIGN_IN_SUCCESS,
                payload: true
            })
                
        } catch (error) {
            // console.error(error.message)
             dispatch({
                 type: userTypes.SIGN_IN_FAILED,
                 payload: error.message
             })
        }
}


// SIGN UP ACTION
export const signUpUser = ({ displayName, email, password, confirmPassword}) => async dispatch => {
    if(password !== confirmPassword){
            const err = ["Passwords do not match."]
            dispatch({
                type: userTypes.SIGN_UP_FAILED,
                payload: err
            })
            return
        }

        try {
            
            /* Function expects username and password, which is destructured above
                        destructure user object from the submission*/
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            //Write to the database with the user object, and also passing display name...
            await handleUserProfile(user, {displayName})
            dispatch({
                type: userTypes.SIGN_UP_SUCCESS,
                payload: true
            })

        } catch (error) {
            // console.error(error)
            dispatch({
                type: userTypes.SIGN_UP_FAILED_AUTH,
                payload: error.message
            })
        }
}
