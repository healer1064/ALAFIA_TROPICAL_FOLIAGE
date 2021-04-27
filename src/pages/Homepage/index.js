import React from 'react'
import styled from 'styled-components'
import Directory from '../../components/Directory'

const StyledSection = styled.section`
    height: calc(100% - 6.5rem);
`

function Homepage (props){
    return(
        <StyledSection>
            <Directory />
        </StyledSection>
    )
}

export default Homepage