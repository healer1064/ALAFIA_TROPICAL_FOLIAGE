import React, { Component} from 'react'

// COMPONENTS
import AuthWrapper from '../AuthWrapper'
import FormInput from '../forms/FormInput'
import Button from '../forms/Button'

// FIREBASE UTILS
import { auth, handleUserProfile } from '../../firebase/utils'

const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    errors: []
}
class SignUp extends Component{
    constructor(props){
        super(props)
        this.state = {
            ...initialState
        }
        //handle forms
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = async e => {
        e.preventDefault()
        const { displayName, email, password, confirmPassword } = this.state
        if(password !== confirmPassword){
            const err = ["Passwords do not match."]
            this.setState({errors: err})
            return
        }

        try {
            
            /* Function expects username and password, which is destructured above
                        destructure user object from the submission*/
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            //Write to the database with the user object, and also passing display name...
            await handleUserProfile(user, {displayName})
            this.setState({
                ...initialState
            })

        } catch (error) {
            console.log(error)
        }
    }

    render(){
        //State properties
        const { displayName, email, password, confirmPassword, errors} = this.state
        const configAuthWrapper = {
            headLine: 'Registration'
        }
        return (
            
            <AuthWrapper {...configAuthWrapper}>
                
                <div className="formWrap">


                        <form onSubmit={this.handleFormSubmit}>
                            {errors.length > 0 && (
                                <ul>
                                    {errors.map((err, index) => {
                                        return (
                                            <li key={index}>{err}</li>
                                        )
                                    })}
                                </ul>
                            )}
                            <FormInput
                                type='text'
                                name='displayName'
                                value={displayName}
                                placeholder="Full Name"
                                onChange={this.handleChange}
                            />

                            <FormInput
                                type='text'
                                name='email'
                                value={email}
                                placeholder="Email"
                                onChange={this.handleChange}
                            />

                            <FormInput
                                type='password'
                                name='password'
                                value={password}
                                placeholder="Password"
                                onChange={this.handleChange}
                            />

                            <FormInput
                                type='password'
                                name='confirmPassword'
                                value={confirmPassword}
                                placeholder="Confirm Password"
                                onChange={this.handleChange}
                            />

                            <Button type="submit">
                                Register
                            </Button>

                        </form>
                    </div>

            </AuthWrapper>
        )
    }
}


export default SignUp