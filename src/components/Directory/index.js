import React from 'react'
import styled from 'styled-components'

import ShopPlants from '../../assets/pexels-daria-shevtsova-1578244.jpg'
// import ShopColors from '../../assets/pexels-suzy-hazelwood-3834461.jpg'



const StyledDiv = styled.div`
    .wrapper {
        .item {
            position: relative;
            width: 100%;
            height: 86vh;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            
            &::after {
                position: absolute;
                top: 0;
                left: 0;
                background: rgba(0,0,0, 0.3);
                z-index: 1;
                width: 100%;
                height: 100%
            }

            a {
                background: white;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 2;
                font-size: 2rem;
                line-height: 1;
                font-weight: 400;
                text-transform: uppercase;
                background: white;
                padding: 8px 10px;
                border: 1px solid black;
            }

        }

    }
`

export default function Directory(props){
    return(
        <StyledDiv>
            <div className="wrapper">
                <div 
                    className="item"
                    style={{backgroundImage: `url(${ShopPlants})`}}>
                        <a href="/">Find Plants</a>
                </div>
            </div>
        </StyledDiv>
    )
}
