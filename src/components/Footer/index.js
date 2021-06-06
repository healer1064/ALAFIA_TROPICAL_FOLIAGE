import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    .wrap {
        height: calc(100% - 6.5rem - 5.8rem);
        max-width: 1450px;
        padding: 20px 10px;
        
        height: 2.5rem;
        position: absolute;
        bottom: 0;
        width: 100%; 
    }

`

function Footer(props){
    return (
        <StyledFooter>
            <div className="wrap">
                Levinsco
            </div>
        </StyledFooter>
    )
}

export default Footer