import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { checkUserisAdmin } from '../../utils'


const StyledDiv = styled.div`
    display: inline-block;
    width: 100%;
    background-color: #000;
    height: auto;
    margin: 0 auto;
    padding: 0 10px;

    ul, li {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    ul {
        float: right;

        li {
            display: inline-block;
            a {
                display: block;
                font-size: 1.6rem;
                line-height: 1;
                color: #fff;
                padding: 10px;
                transition: all .4s ease-in-out;

                &:hover {
                    background-color: rgba(255, 255, 255, 0.6)
                    color: black;
                    transition: all .4s ease-in-out;
                }
            }
        }
    }
`

const mapState = ({ user }) => ({
    currentUser: user.currentUser
})

export default function AdminToolBar(){
    const { currentUser } = useSelector(mapState)
    const isAdmin = checkUserisAdmin(currentUser)
    if(!isAdmin) return null
    return (
        <StyledDiv>
            <ul>
                <li>
                    <Link to='/admin'>My admin tools</Link>
                </li>
            </ul>
        </StyledDiv>
    )
}