import React from 'react'
import styled from 'styled-components'

const StyledBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #111;
    color: #fff;
    z-index: -2;


    .video_bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.8;
        
    }
`

export default function BackgroundVideo({ video,  children }){
    return (
        <StyledBackground>
            <video autoPlay="autoplay" loop="loop" muted className="video_bg">
                <source src={video} type="video/mp4" />
                {children}
            </video>
        </StyledBackground>
    )
}