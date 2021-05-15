import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// FIRBASE 
import { auth, signInWithGoogle } from './../../firebase/utils'

//FORM COMPONENTS
import AuthWrapper from './../AuthWrapper'
import FormInput from './../forms/FormInput'
import Button from './../forms/Button'



export default function SignIn(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    

    const resetForm = () => {
        setEmail('')
        setPassword('')
    }

     const handleSubmit = async e => {
        e.preventDefault()

        try {

                await auth.signInWithEmailAndPassword(email, password)
                resetForm()
                
            } catch (error) {
                console.error(error.message)
                setError(error.message)
            }
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

