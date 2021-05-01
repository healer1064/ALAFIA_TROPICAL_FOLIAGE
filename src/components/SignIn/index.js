import React, { Component } from 'react'
import styled from 'styled-components'
import { signInWithGoogle } from './../../firebase/utils'

//FORM COMPONENTS
import FormInput from './../forms/FormInput'
import Button from './../forms/Button'

const StyledDiv = styled.div`
    display: block;
    width: 100%;
    max-width: 40.0rem;
    border: 1px solid black;
    margin: 4rem auto 6rem;

    .wrap {
        padding: 10px;

        h2 {
            font-size: 2.2rem;
            line-height: 1;
            font-weight: 400;
            text-transform: uppercase;
            display block;
            width: 100%;
            text-align: center;
            padding: 0;
            margin: 0 auto 3rem;
        }

        .socialSignIn {
            margin: .5rem auto 0;
        }

    }
`

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
    }

    render(){

        const { email, password } = this.state
        return (
            <StyledDiv>
                <div className="wrap">
                    <h2>Login</h2>
    
                    <div className="formWrap">
                        <form onSubmit={this.handleSubmit}>

                        <FormInput
                          type='email' 
                          name='email'
                          value={email}
                          placeholder='email'
                          handleChange={this.handleChange}
                        />
                        <FormInput
                          type='password' 
                          name='password'
                          value={password}
                          placeholder='password'
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
                </div>
    
                
            </StyledDiv>
        )
    }
}

export default SignIn