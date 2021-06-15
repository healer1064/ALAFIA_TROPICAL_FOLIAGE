import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Link, withRouter, useHistory } from 'react-router-dom'

//FORM COMPONENTS
import AuthWrapper from './../AuthWrapper'
import FormInput from './../forms/FormInput'
import Button from './../forms/Button'

// ACTIONS 
import { emailSignInStart, googleSignInStart, } from '../../redux/user/user.actions'

const StyledButton = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem 7rem;
    margin: 0 auto;
    background: #4285F4;
    color: white;
    font-size: 2rem;
    line-height: 1;
    font-weight: 300;
    text-transform: captialize;
    outline: none;
    border: 0;
    border-radius: 14px;
    cursor: pointer;
`

const mapState = ({ user }) => ({
    currentUser: user.currentUser,
    serverSignUpErr: user.serverSignUpErr
})

const SignIn = (props) => {
    const { currentUser, serverSignUpErr } = useSelector(mapState)
    const dispatch = useDispatch() // just a function that is called
    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        // signInSuccess can change asynchronously, and watch for changes
        if (currentUser){
            resetForm()
            history.push('/')
        }
    },[currentUser]) // keep it as a dependency


    const resetForm = () => {
        setEmail('')
        setPassword('')
    }

     const handleSubmit = e => {
        e.preventDefault()
        dispatch(emailSignInStart({ email, password })) 
    }

    const handleGoogleSignIn = () => {
        dispatch(googleSignInStart())
    }

    
        const configAuthWrapper = {
            headLine: 'Sign in to your account'
        }

        return (
                <AuthWrapper {...configAuthWrapper}>
    
                    <div className="formWrap">
                        <form onSubmit={handleSubmit}>

                            {serverSignUpErr && (<div style={{color: 'red'}}>{serverSignUpErr}</div>)}
                            
                            <FormInput
                                label='Email'
                                type='email' 
                                name='email'
                                value={email}
                                // placeholder='Email'
                                handleChange={e => setEmail(e.target.value)}
                            />
                            <FormInput
                                label='Password'
                                type='password' 
                                name='password'
                                value={password}
                                // placeholder='Password'
                                handleChange={e => setPassword(e.target.value)}
                            />
                            
                            <Button type="submit">Log in</Button>

                            <div className="socialSignIn">
                                <div className="row">
                                    <StyledButton onClick={handleGoogleSignIn}>
                                        Log in with Google
                                    </StyledButton>
                                </div>
                            </div>

                            <div className="links">
                                <p>Don't have an account? <Link to='/registration' style={{color: '#35C0C9'}}>Sign Up</Link></p>
                                <Link to='/recovery' style={{color: '#35C0C9', textSize: '.4rem'}}>
                                    Forgot email or password?
                                </Link>
                            </div>

                        </form>
                    </div>
                
            </AuthWrapper>
        )
    
}

export default withRouter(SignIn)

