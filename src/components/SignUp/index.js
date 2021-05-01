import React, { Component} from 'react'
import styled from 'styled-components'

//COMPONENTS
import FormInput from '../forms/FormInput'
import Button from '../forms/Button'

//FIREBASE UTILS
import { auth, handleUserProfile } from '../../firebase/utils'

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
            margin: 0 auto;
        }

        .formWrap {
            margin: 3rem auto 0;
        }

    }

`
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
        return (
            <StyledDiv>
                <div className="wrap">
                    <h2>SignUp</h2>

                {errors.length > 0 && (
                    <ul>
                        {errors.map((err, index) => {
                            return (
                                <li key={index}>{err}</li>
                            )
                        })}
                    </ul>
                )}

                <div className="formWrap">
                        <form onSubmit={this.handleFormSubmit}>
                            
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

                </div>
            </StyledDiv>
        )
    }
}


export default SignUp