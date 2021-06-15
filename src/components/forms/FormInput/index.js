import React from 'react'
import styled from 'styled-components'
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react'

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

{/* <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password">
                        <FormLabel>Password</FormLabel> 
                        </FormControl>
                        <Stack spacing={10}>
                        <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            align={'start'}
                            justify={'space-between'}>
                            <Checkbox>Remember me</Checkbox>
                            <Link color={'blue.400'}>Forgot password?</Link>
                        </Stack>
                        
                    </Stack>
                    </Stack> */}

export default function FormInput({handleChange, label, ...otherProps}){
    return (
        <StyledInput>
            {label && (
                <FormLabel>
                    { label }
                </FormLabel>
            )}
            <input className="form-input" onChange={handleChange} {...otherProps} />
        </StyledInput>
    )
}