import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const StyledDiv = styled.div``

const mapState = ({ user }) => ({
    currentUser: user.currentUser
})

export default function Admin(){
    const { currentUser } = useSelector(mapState)
    return (
        <StyledDiv>
            <h6>Hi there, {currentUser.displayName}!</h6>
            <h1>My Admin</h1>
        </StyledDiv>    
    )
}