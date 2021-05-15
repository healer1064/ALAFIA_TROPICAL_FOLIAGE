import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

// COMPONENTS
import AuthWrapper from '../AuthWrapper'
import FormInput from '../forms/FormInput'
import Button from '../forms/Button'

// FIREBASE UTILS
import { auth, handleUserProfile } from '../../firebase/utils'




const SignUp = (props) => {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState([])
    const [authError, setAuthError] = useState('')

    const resetForm = () => {
        setDisplayName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setErrors([])
    }


    const handleFormSubmit = async e => {
        e.preventDefault()
        
        if(password !== confirmPassword){
            const err = ["Passwords do not match."]
            setErrors(err)
            return
        }

        try {
            
            /* Function expects username and password, which is destructured above
                        destructure user object from the submission*/
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            //Write to the database with the user object, and also passing display name...
            await handleUserProfile(user, {displayName})
            //RESET FORM
            resetForm()
            props.history.push('/')

        } catch (error) {
            console.error(error)
            setAuthError(error.message)
        }
    }
        
        const configAuthWrapper = {
            headLine: 'Registration'
        }


        return (
            
            <AuthWrapper {...configAuthWrapper}>
                
                <div className="formWrap">


                        <form onSubmit={handleFormSubmit}>
                            {errors.length > 0 && (
                                <ul>
                                    {errors.map((err, index) => {
                                        return (
                                            <li key={index}>{err}</li>
                                        )
                                    })}
                                </ul>
                            )}

                            {authError && (<div style={{color: 'red'}}>{authError}</div>)}

                            <FormInput
                                type='text'
                                name='displayName'
                                value={displayName}
                                placeholder="Full Name"
                                handleChange={e => setDisplayName(e.target.value)}
                            />

                            <FormInput
                                type='text'
                                name='email'
                                value={email}
                                placeholder="Email"
                                handleChange={e => setEmail(e.target.value)}
                            />

                            <FormInput
                                type='password'
                                name='password'
                                value={password}
                                placeholder="Password"
                                handleChange={e => setPassword(e.target.value)}
                            />

                            <FormInput
                                type='password'
                                name='confirmPassword'
                                value={confirmPassword}
                                placeholder="Confirm Password"
                                handleChange={e => setConfirmPassword(e.target.value)}
                            />

                            <Button type="submit">
                                Register
                            </Button>

                        </form>
                    </div>

            </AuthWrapper>
        )
    
}

export default withRouter(SignUp)