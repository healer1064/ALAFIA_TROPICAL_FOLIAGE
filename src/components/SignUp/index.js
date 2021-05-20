import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'

// COMPONENTS
import AuthWrapper from '../AuthWrapper'
import FormInput from '../forms/FormInput'
import Button from '../forms/Button'

//ACTION CREATORS
import { signUpUser } from '../.././redux/user/user.actions'



const mapState = ({ user }) => ({
    signUpSuccess: user.signUpSuccess,
    signUpError: user.signUpError,
    signUpError_auth: user.signUpError_auth
})

const SignUp = (props) => {
    const dispatch = useDispatch()
    const { signUpSuccess, signUpError, signUpError_auth } = useSelector(mapState)

    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState([])
    const [authError, setAuthError] = useState('')

    useEffect(() => {
        if(signUpSuccess){
            resetForm()
            props.history.push('/')
        }
    }, [signUpSuccess])

    useEffect(() => {
        if(Array.isArray(signUpError) && signUpError.length > 0){
            setErrors(signUpError)
        }
    }, [signUpError])

    useEffect(() => {
        if(signUpError_auth){
            setAuthError(signUpError_auth)
        }
        setAuthError('')
    }, [signUpError_auth])

    const resetForm = () => {
        setDisplayName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setErrors([])
    }


    const handleFormSubmit = e => {
        e.preventDefault()
        dispatch(signUpUser({
            displayName,
            email,
            password,
            confirmPassword
        }))
        
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