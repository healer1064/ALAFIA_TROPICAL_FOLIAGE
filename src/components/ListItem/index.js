import React from 'react'
import styled from 'styled-components'
import DeleteButton from '../forms/DeleteButton'

const StyledItem = styled.li`
  box-shadow: 0rem 0.225rem 0.475rem 0.164rem rgba(0, 0, 0, 0.12);
  padding: 20px 25px;
  text-align: left;
  background: ${({ theme }) => theme.secondary};
  margin: 10px 0;
  border-radius: 10px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
      max-width: 200px;
  }
`

export default function ListItem({name, picture, price, handleClick}){
    return (
        <StyledItem>
            <span>{name}</span>
            <img src={picture}></img>
            <span>{price}</span>
            <DeleteButton handleClick={handleClick} />
        </StyledItem>
    )
}