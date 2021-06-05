import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, withRouter } from 'react-router-dom'

// COMPONENTS
import AuthWrapper from '../AuthWrapper'
import FormInput from '../forms/FormInput'
import Button from '../forms/Button'

// ACTIONS
import { signUpUserStart } from '../../redux/user/user.actions'




const mapState = ({ user }) => ({
    currentUser: user.currentUser,
    signUpUserErrors: user.signUpUserErrors,
    signUpServerError: user.signUpServerError,
})

const SignUp = (props) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { currentUser, signUpUserErrors, signUpServerError } = useSelector(mapState)

    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState([])

    useEffect(() => {
        if(currentUser){
            resetForm()
            history.push('/')
        }
    }, [currentUser])

    useEffect(() => {
        if(Array.isArray(signUpUserErrors) && signUpUserErrors.length > 0){
            setErrors(signUpUserErrors)
        }
    }, [signUpUserErrors])

    const resetForm = () => {
        setDisplayName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setErrors([])
    }


    const handleFormSubmit = e => {
        e.preventDefault()
        dispatch(signUpUserStart({
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
                                            <li key={index} style={{listStyle: 'none', color: 'red'}} key={index}>{err}</li>
                                        )
                                    })}
                                </ul>
                            )}

                            { signUpServerError && (<div style={{color: 'red', marginBottom: '1rem'}}>{ signUpServerError }</div>) }

                            <FormInput
                                label='Full Name'
                                type='text'
                                name='displayName'
                                value={displayName}
                                // placeholder="Full Name"
                                handleChange={e => setDisplayName(e.target.value)}
                            />

                            <FormInput
                                label='Email'
                                type='text'
                                name='email'
                                value={email}
                                // placeholder="Email"
                                handleChange={e => setEmail(e.target.value)}
                            />

                            <FormInput
                                label='Password'
                                type='password'
                                name='password'
                                value={password}
                                // placeholder="Password"
                                handleChange={e => setPassword(e.target.value)}
                            />

                            <FormInput
                                label='Confirm Password'
                                type='password'
                                name='confirmPassword'
                                value={confirmPassword}
                                // placeholder="Confirm Password"
                                handleChange={e => setConfirmPassword(e.target.value)}
                            />

                            <Button type="submit">
                                Register
                            </Button>

                            <p>Already have an account? <Link to='/login' style={{color: '#35C0C9'}}>Sign In</Link></p>
                        </form>
                    </div>

            </AuthWrapper>
        )
    
}

export default withRouter(SignUp)