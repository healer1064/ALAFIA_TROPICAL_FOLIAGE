import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

//FORM COMPONENTS
import AuthWrapper from './../AuthWrapper'
import FormInput from './../forms/FormInput'
import Button from './../forms/Button'

// ACTIONS 
import { emailSignInStart, signInWithGoogle, resetAllAuthForms, } from '../../redux/user/user.actions'



const mapState = ({ user }) => ({
    currentUser: user.currentUser,
    serverSignUpErr: user.serverSignUpErr
})

const SignIn = (props) => {
    const { currentUser, serverSignUpErr } = useSelector(mapState)
    const dispatch = useDispatch() // just a function that is called

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        // signInSuccess can change asynchronously, and watch for changes
        if (currentUser){
            resetForm()
            props.history.push('/')
        }
    },[currentUser]) // keep it as a dependency


    const resetForm = () => {
        setEmail('')
        setPassword('')
    }

     const handleSubmit = e => {
        e.preventDefault()
        dispatch(emailSignInStart({ email, password })) 
        setError(serverSignUpErr)
    }

    const handleGoogleSignIn = () => {
        dispatch(signInWithGoogle())
    }

    
        const configAuthWrapper = {
            headLine: 'Login'
        }

        return (
                <AuthWrapper {...configAuthWrapper}>
    
                    <div className="formWrap">
                        <form onSubmit={handleSubmit}>

                            {error && (<div style={{color: 'red'}}>{error}</div>)}
                            
                            <FormInput
                                type='email' 
                                name='email'
                                value={email}
                                placeholder='Email'
                                handleChange={e => setEmail(e.target.value)}
                            />
                            <FormInput
                                type='password' 
                                name='password'
                                value={password}
                                placeholder='Password'
                                handleChange={e => setPassword(e.target.value)}
                            />
                            <Button type="submit">Login</Button>

                            <div className="socialSignIn">
                                <div className="row">
                                    <Button onClick={handleGoogleSignIn}>
                                        Sign in with Google
                                    </Button>
                                </div>
                            </div>

                            <div className="links">
                                <Link to='/recovery'>Reset Password</Link>
                            </div>

                        </form>
                    </div>
                
            </AuthWrapper>
        )
    
}

export default withRouter(SignIn)

