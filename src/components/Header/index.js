import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
                list-style-type: none;

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

function Header(props){
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
                    <ul>
                        <li>
                            <Link to="/registration">Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </StyledHeader>
    )
}

export default Header