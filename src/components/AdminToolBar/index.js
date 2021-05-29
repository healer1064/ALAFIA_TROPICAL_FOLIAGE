import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledDiv = styled.div`

`

export default function AdminToolBar(){
    return (
        <StyledDiv>
            <ul>
                <li>
                    <Link to='/admin'>My admin</Link>
                </li>
            </ul>
        </StyledDiv>
    )
}