import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.div`

    input {
        display: block;
        width: 100%;
        font-size: 1.5rem;
        line-height: 1;
        font-weight: 400;
        text-align: left;
        padding: 10px 5px;
        margin: 10px auto; 
        border: 1px solid #9e9e9e;
        outline: none;
    }

`

export default function FormInput({handleChange, label, ...otherProps}){
    return (
        <StyledInput>
            {label && (
                <label>
                    {label}
                </label>
            )}
            <input className="form-input" onChange={handleChange} {...otherProps} />
        </StyledInput>
    )
}