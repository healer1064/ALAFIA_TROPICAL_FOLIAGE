import React, { useEffect, useState } from 'react'
import { useHistory, withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// ACTION CREATORS
import { resetPasswordStart, resetUserState } from '../../redux/user/user.actions'


// COMPONENTS
import AuthWrapper from './../AuthWrapper'
import FormInput from './../forms/FormInput'
import Button from './../forms/Button'


const mapState = ({ user }) => ({
    resetPasswordSuccess: user.resetPasswordSuccess,
    resetPasswordError: user.resetPasswordError,
})

const EmailPassword = (props) => {
    const { resetPasswordSuccess, resetPasswordError } = useSelector(mapState)
    const dispatch = useDispatch()
    const history = useHistory()


    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([])
    const [message, setMessage] = useState('')

    const resetForm = () => {
        setEmail('')
        setErrors([])
    }

    useEffect(() => {
        if(resetPasswordSuccess){
            setMessage('Please check the email asscociated with the account.')
            setTimeout(function(){ 
                // dispatch(resetUserState())
                history.push('/login')
                window.location.reload()
            },3500)
        }
    },[resetPasswordSuccess])

    useEffect(() => {
        if(Array.isArray(resetPasswordError) && resetPasswordError.length > 0 ){
            setErrors(resetPasswordError)
        }
    },[resetPasswordError])
    
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(resetPasswordStart({ email }))
        resetForm()
    }
 
        const configAuthWrapper = {
            headLine: 'Email Password'
        }
        return (
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
                    { message && <div style={{color: 'green'}}>{ message }</div>}
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