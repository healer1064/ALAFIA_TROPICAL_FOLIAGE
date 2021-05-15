import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

// FIREBASE 
import { auth } from './../../firebase/utils'

// COMPONENTS
import AuthWrapper from './../AuthWrapper'
import FormInput from './../forms/FormInput'
import Button from './../forms/Button'



const EmailPassword = (props) => {
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([])
    const [authError, setAuthError] = useState('')

    const resetForm = () => {
        setEmail('')
        setErrors([])
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {

            const config = {
                url: 'http://localhost:3000/login'//Change this for production
            }

            await auth.sendPasswordResetEmail(email, config)
            .then(() => {
                props.history.push('/login')
                resetForm()
            })
            .catch(() => {
                const err = ['Email not found. Please try again.']
                setErrors(err)
            })

        } catch(error) {
            console.error(error)
            setAuthError(error.message)
        }

    }
 
        const configAuthWrapper = {
            headLine: 'Email Password'
        }
        return(
            <AuthWrapper {...configAuthWrapper}>
                <div className="formWrap">

                    {/* ERRORS */}
                    {errors.length > 0 && (
                        <ul>
                            {errors.map((e, index) => {
                                return (
                                    <li key={index}>{e}</li>
                                )
                            })}
                        </ul>
                    )}

                    {authError && <div style={{color: 'red'}}>{authError}</div>}

                    <form onSubmit={handleSubmit}>
                        <FormInput 
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Email"
                            handleChange={e => setEmail(e.target.value)}
                        />
                        <Button type="submit">Email Password</Button>
                    </form>
                </div>
            </AuthWrapper>
        )
    
}

export default withRouter(EmailPassword)