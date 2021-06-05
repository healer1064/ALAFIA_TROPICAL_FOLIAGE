import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeModeContext } from '../../styles/theme'
// import userIMG from './../../assets/user.png'

const StyledDiv = styled.div`
    display: block;
    display: flex;
    flex-direction: column;
    align-items: center;
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
                }
            }

            .displayName {
                display: block;
                width: 100%;
                text-align: center;
                margin: 1rem auto;
                font-size: 1.8rem;
                line-height: 1;
                text-transform: captialize;
            }
        }
    }
`

export default function UserProfile(props){
  const { currentUser } = props
  const { displayName, photoURL } = currentUser

  const { setIsDarkMode } = useContext(ThemeModeContext)
  const toggleMode = () => setIsDarkMode((s) => !s) 

  return (
    <StyledDiv>
      <ul>
        <li>
          <div className="img">
            {/* <img src={userIMG} /> */}
          </div>
        </li>
        <li>
          <img src={photoURL && photoURL} alt="Users profile image."/>
        </li>
        <li>
          <span className="displayName">
            {displayName ? 'Hi, ' + displayName + '!' : 'Hi there!'}
          </span>
        </li>
        <li>
        {/* <button onClick={toggleMode}>toggle</button> */}
        </li>
      </ul>
    </StyledDiv>
  )
}