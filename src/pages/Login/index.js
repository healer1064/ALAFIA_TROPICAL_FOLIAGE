import React from 'react'
import styled from 'styled-components'
import SignIn from '../../components/SignIn'

const StyledDiv = styled.div`

`

function Login(props){
    return (
        <StyledDiv>
            <SignIn />
        </StyledDiv>
    ) 
}
export default Login