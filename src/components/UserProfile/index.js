import React from 'react'
import styled from 'styled-components'
// import userIMG from './../../assets/user.png'

const StyledDiv = styled.div`
    display: block;
    width: 100%;
    margin: 3rem auto 1rem;

        ul, li {
            margin: 0;
            padding: 0;
            list-style-type: none;
        }

        ul {
        li {
            display: block;
            width: 100%;

            .img {
                display: block;
                width: 5.0rem;
                margin: 0 auto;

                img {
                    display: block;
                    width: 100%;
                }
            }

            .displayName {
                display: block;
                width: 100%;
                text-align: center;
                margin: 1rem auto;
                font-size: 1.8rem;
                line-height: 1;
                text-transform: uppercase;
            }
        }
    }
`

export default function UserProfile(props){
  const { currentUser } = props
  const { displayName } = currentUser

  return (
    <StyledDiv>
      <ul>
        <li>
          <div className="img">
            {/* <img src={userIMG} /> */}
          </div>
        </li>
        <li>
          <span className="displayName">
            {displayName && displayName}
          </span>
        </li>
      </ul>
    </StyledDiv>
  )
}