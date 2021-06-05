import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background: transparent;
  border: 2px solid #ff7675;
  border-radius: 2em;
  color: #ff7675;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  height: 20px;
  line-height: 20px;
  margin: 0;
  padding: 1rem;
  text-align: center;
  width: 20px;
  cursor: pointer;

  &:hover {
    background: #ff7675;
    color: #fff;
  }

`

export default function DeleteButton({handleClick}){
    return(
        <StyledButton onClick={handleClick}>-</StyledButton>
    )
}