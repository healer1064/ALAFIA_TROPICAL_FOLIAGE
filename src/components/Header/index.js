import React from 'react'
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
    }
`

function Header(props){
    return(
        <StyledHeader>
            <div className="wrap">
                <div className="logo">
                    Levins
                    {/* <img /> */}
                </div>
            </div>
        </StyledHeader>
    )
}

export default Header