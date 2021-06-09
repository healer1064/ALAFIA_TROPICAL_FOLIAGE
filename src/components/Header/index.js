import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { useSelector, useDispatch } from 'react-redux'

// ACTIONS 
import { signOutUserStart } from '../../redux/user/user.actions'


const StyledHeader = styled.header`
    transition: .2s ease-in-out;
    height: 6.5rem;
    box-shadow: 0 2px 4px 0 rgba(0,0,0, 0.1);

    .wrap {
        background: ${({ theme }) => theme.background};
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

        nav {
            display: block;
            width: 100%;
            height: 100%;
            padding: 0;
            margin: 0;

            ul, li li {
                padding: 0;
                margin: 0;
                height: 100%;
            }

            ul {
                text-align: center;

                li {
                    list-style-type: none;
                    margin: 0 10px;
                    display: inline-block;

                    a {
                        color: ${({ theme }) => theme.primary};
                        font-size: 1.8rem;
                        line-height: 6.5rem;
                        vertical-align: middle;
                        text-decoration: none;
                        text-transform: uppercase;
                    }
                }

            }
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
                    color: ${({ theme }) => theme.primary};
                    font-size: 1.8rem;
                    line-height: 1;
                    text-decoration: none;
                    text-transform: uppercase;
                }

                span {
                    color: ${({ theme }) => theme.primary};
                    cursor: pointer;
                    transition: all .4s ease-in-out;
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


                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/search">Search</Link>
                        </li>
                    </ul>
                </nav>


                <div className="callToActions">
                    {currentUser && (
                        <ul>
                            <li>
                                <Link to="/dashboard">My Account</Link>
                            </li>
                            <li>
                                <span onClick={() => signOut()}>
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


