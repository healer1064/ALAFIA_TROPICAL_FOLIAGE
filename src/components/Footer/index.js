import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    .wrap {
        height: calc(100% - 6.5rem - 5.8rem);
        max-width: 1450px;
        padding: 20px 10px;
        margin: 0 auto;
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