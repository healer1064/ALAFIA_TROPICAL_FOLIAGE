import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

// FIREBASE 
import { auth, signInWithGoogle } from './../../firebase/utils'

//FORM COMPONENTS
import AuthWrapper from './../AuthWrapper'
import FormInput from './../forms/FormInput'
import Button from './../forms/Button'

// ACTIONS 
import { signInUser } from '../../redux/user/user.actions'



const mapState = ({ user }) => ({
    signInSuccess: user.signInSuccess,
    signInError: user.signInError
})

const SignIn = (props) => {
    const { signInSuccess, signInError } = useSelector(mapState)
    const dispatch = useDispatch() // just a function that is called

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        // signInSuccess can change asynchronously, and watch for changes
        if (signInSuccess){
            resetForm()
            props.history.push('/')
        } else {
            setError(signInError)
        }
    },[signInSuccess]) // keep it as a dependency

    const resetForm = () => {
        setEmail('')
        setPassword('')
    }

     const handleSubmit = e => {
        e.preventDefault()
        dispatch(signInUser({ email, password }))
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

                                    <Button onClick={signInWithGoogle}>
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

