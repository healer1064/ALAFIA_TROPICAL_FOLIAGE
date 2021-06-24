import React from 'react'
import styled from 'styled-components'
import Directory from '../../components/Directory'
import Hero from '../../components/Sections/Hero'

const StyledSection = styled.section`
    height: calc(100% - 6.5rem);
`

function Homepage (props){
    return(
        <StyledSection>
            <Hero />
        </StyledSection>
    )
}

export default Homepage