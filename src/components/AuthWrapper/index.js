import React from 'react'
import styled from 'styled-components'

const StyledAuth = styled.div`
        display: block;
        width: 100%;
        max-width: 40.0rem;
        border: 1px solid black;
        margin: 4rem auto 6rem;

        .wrap {
            padding: 10px;

            h2 {
                font-size: 2.2rem;
                line-height: 1;
                font-weight: 400;
                text-transform: uppercase;
                display block;
                width: 100%;
                text-align: center;
                padding: 0;
                margin: 0 auto 3rem;
            }

            .socialSignIn {
                margin: .5rem auto 0;
            }

            .links {
                display: block;
                width: 100%;
                margin: 1.5rem auto 0;

                a {
                    color: black;
                }

            }

        }

`

export default function AuthWrapper({ headLine, children}){
    return (
        <StyledAuth>
            <div className="wrap">
                { headLine && <h2>{headLine}</h2>}
                
                <div className="children">
                    {children && children}
                </div>
            </div>
        </StyledAuth>
    )
}