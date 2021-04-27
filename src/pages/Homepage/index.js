import React from 'react'
import styled from 'styled-components'
import Directory from '../../components/Directory'

const StyledSection = styled.section`
    height: 100%;
`

function Homepage (props){
    return(
        <StyledSection>
            <Directory />
        </StyledSection>
    )
}

export default Homepage