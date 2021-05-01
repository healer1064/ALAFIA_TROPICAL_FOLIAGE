import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    display: block;
    
    padding: .7rem 7rem;
    margin: 0 auto;
    background: black;
    color: white;
    font-size: 2rem;
    line-height: 1;
    font-weight: 300;
    text-transform: uppercase;
    outline: none;
    border: 0;
    cursor: pointer;
`

export default function Button({ children, ...otherProps}){
    return (
        <StyledButton {...otherProps}>
            {children}
        </StyledButton>
    )
}
