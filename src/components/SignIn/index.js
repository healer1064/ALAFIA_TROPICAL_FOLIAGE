import React from 'react'
import styled from 'styled-components'
import { signInWithGoogle } from './../../firebase/utils'

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
            margin: 0 auto;
        }

        .socialSignIn {
            margin: 2rem auto;
        }

    }
`

function SignIn(props){

    const handleSubmit = e => {
        e.preventDefault()
    }
    return (
        <StyledDiv>
            <div className="wrap">
                <h2>Login</h2>

                <div className="formWrap">
                    <form onSubmit={handleSubmit}>
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

export default SignIn