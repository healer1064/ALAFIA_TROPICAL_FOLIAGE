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

const StyledButton = styled.button`
    display: block;
    width: 100%;
    padding: 1rem 7rem;
    margin: 0 auto;
    background: #4285F4;
    color: white;
    font-size: 2rem;
    line-height: 1;
    font-weight: 300;
    text-transform: uppercase;
    outline: none;
    border: 0;
    border-radius: 34px;
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
            headLine: 'Login'
        }

        return (
                <AuthWrapper {...configAuthWrapper}>
    
                    <div className="formWrap">
                        <form onSubmit={handleSubmit}>

                            {serverSignUpErr && (<div style={{color: 'red'}}>{serverSignUpErr}</div>)}
                            
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
                                    <StyledButton onClick={handleGoogleSignIn}
                                    >
                                        Login with Google
                                    </StyledButton>
                                </div>
                            </div>

                            <div className="links">
                                <Link to='/recovery' style={{textDecoration: 'underline'}}>
                                    Forgot password?
                                </Link>
                            </div>

                        </form>
                    </div>
                
            </AuthWrapper>
        )
    
}

export default withRouter(SignIn)

