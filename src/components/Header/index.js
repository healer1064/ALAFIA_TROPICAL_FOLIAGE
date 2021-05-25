import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

// ACTIONS 
import { signOutUserStart } from '../../redux/user/user.actions'

const StyledHeader = styled.header`
   
    height: 6.5rem;
    box-shadow: 0 2px 4px 0 rgba(0,0,0, 0.1);

    .wrap {
        position: relative;
        height: 100%;
        max-width: 1450px;
        margin: 0 auto;

        .logo {
            width: 13.0px;
            position: absolute;
            top: 50%;
            left: 10px;
            transform: translateY(-50%);
        }

        .callToActions {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);

            ul,li {
                margin: 0;
                padding: 0;

            }

            li {
                display: inline-block;
                list-style-type: none;
                margin-right: 1.5rem;

                &:last-child {
                    margin-right: 0;
                }

                a {
                    font-size: 1.8rem;
                    line-height: 1;
                    color: black;
                    text-decoration: none;
                    text-transform: uppercase;
                }
            }
        }

    }
`
const mapState = ({user}) => ({
    currentUser: user.currentUser
})
export default function Header(props){
    const dispatch = useDispatch()
    const { currentUser } = useSelector(mapState)

    const signOut = () => {
        dispatch(signOutUserStart())
    }

    return(
        <StyledHeader>
            <div className="wrap">
                <Link to='/'>
                    <div className="logo">
                        Levins
                        {/* <img /> */}
                    </div>
                </Link>
                <div className="callToActions">
                    {currentUser && (
                        <ul>
                            <li>
                                <Link to="/dashboard">My Account</Link>
                            </li>
                            <li>
                                <span onClick={() => signOut()} style={{cursor: 'pointer'}}>
                                    LOGOUT
                                </span>
                            </li>
                        </ul>
                    )}
                    {!currentUser && (
                        <ul>
                            
                            <li>
                                <Link to="/registration">Register</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </ul>
                     )}
                </div>
            </div>
        </StyledHeader>
    )
}

Header.defaultProps = {
    currentUser: null
}


