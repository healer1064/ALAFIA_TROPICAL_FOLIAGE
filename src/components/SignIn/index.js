import React, { Component } from 'react'

// FIRBASE 
import { auth, signInWithGoogle } from './../../firebase/utils'

//FORM COMPONENTS
import AuthWrapper from './../AuthWrapper'
import FormInput from './../forms/FormInput'
import Button from './../forms/Button'



const initialState = {
    email: '',
    password: '',
}

class SignIn extends Component{
    constructor(props){
        super(props)
        this.state = {
            ...initialState
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange =  e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

     handleSubmit = async e => {
        e.preventDefault()
        const { email, password } = this.state

        try {

            await auth.signInWithEmailAndPassword(email, password)
            this.setState({
                ...initialState
            })
            
        } catch (error) {
            console.log(error)
        }
    }

    render(){

        const { email, password } = this.state
        const configAuthWrapper = {
            headLine: 'Login'
        }
        return (
                <AuthWrapper {...configAuthWrapper}>
    
                    <div className="formWrap">
                        <form onSubmit={this.handleSubmit}>

                        <FormInput
                          type='email' 
                          name='email'
                          value={email}
                          placeholder='Email'
                          handleChange={this.handleChange}
                        />
                        <FormInput
                          type='password' 
                          name='password'
                          value={password}
                          placeholder='Password'
                          handleChange={this.handleChange}
                        />
                        <Button type="submit">Login</Button>

                            <div className="socialSignIn">
                                <div className="row">

                                    <Button onClick={signInWithGoogle}>
                                        Sign in with Google
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                
            </AuthWrapper>
        )
    }
}

export default SignIn