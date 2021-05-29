import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: inline-block;
    width: 100%;

    label {
        display: block;
        width: 100%;
        text-align: left;
    }

    select {
        display: block;
        width: auto;
        float: left;
        font-size: 1.5rem;
        line-height: 1;
        font-weight: 400;
        text-align: left;
        padding: 10px 0px;
        margin: 10px auto;
        border: none;
        outline: none;
        cursor: pointer;
    }
`

export default function FormSelect({ options, defaultValue, handleChange, label, ...otherProps }){
  if (!Array.isArray(options) || options.length < 1) return null;

  return (
    <StyledDiv>
      {label && (
        <label>
          {label}
        </label>
      )}

      <select className="formSelect" value={defaultValue} onChange={handleChange} {...otherProps}>
        {options.map((option, index) => {
          const { value, name } = option;

          return (
            <option key={index} value={value}>{name}</option>
          );
        })}
      </select>
    </StyledDiv>
  );
}

 