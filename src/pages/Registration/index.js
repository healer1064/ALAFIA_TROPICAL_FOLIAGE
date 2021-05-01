import React, { useState } from 'react'
import styled from 'styled-components'
import SignUp from '../../components/SignUp'

const StyledDiv = styled.div`

`

function Registration(props){
    return (
        <StyledDiv>
            <SignUp />
        </StyledDiv>
    )
}

export default Registration