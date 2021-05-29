import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import UserProfile from './../UserProfile'

const StyledDiv = styled.div`
    width: 100%;
    height: 100%;

    .menu {
    margin: 3rem auto 0;

    ul, li {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    ul {

        li {
        width: 100%;
        border-bottom: 1px solid #d3d3d3;

        &:first-child {
            border-top: 1px solid #d3d3d3;
        }

        a, span {
            display: block;
            width: 100%;
            padding: 2rem;
            font-size: 1.6rem;
            line-height: 1;
            color: black;
            cursor: pointer;
        }

        &:hover {
            background-color: #d3d3d3;
        }
        }

    }
    }
`


const mapState = ({ user }) => ({
  currentUser: user.currentUser
})

export default function VerticalNav({ children }){
  const { currentUser } = useSelector(mapState);

  const configUserProfile = {
    currentUser
  }

  return (
    <StyledDiv>

      <UserProfile {...configUserProfile} />

      <div className="menu">
        {children}
      </div>
    </StyledDiv>
  );
}

 