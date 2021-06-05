import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.div`

    label {
        margin-left: 1rem;
        font-size: 1.2rem;
        color: #4F616D;
    }

    input {
        display: block;
        width: 100%;
        font-size: 1.5rem;
        line-height: 1;
        font-weight: 400;
        text-align: left;
        padding: 10px 5px;
        margin: 10px auto; 
        border: 1px solid #D6DEE0;
        border-radius: 14px;
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