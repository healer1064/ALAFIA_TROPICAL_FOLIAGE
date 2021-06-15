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

const StyledAuth = styled.div`
        

        .wrap {
            padding: 20px;

            h2 {
                font-size: 2.2rem;
                line-height: 1;
                font-weight: 400;
                text-transform: captialize;
                display block;
                width: 100%;
                text-align: center;
                padding: 0;
                margin: 0 auto 3rem;
            }

            .socialSignIn {
                margin: .5rem auto 0;
            }

            .links {
                display: block;
                width: 100%;
                margin: 1.5rem auto 0;

                a {
                    color: black;
                }

            }

        }

`

export default function AuthWrapper({ headLine, children}){
    return (
        <StyledAuth>
            <div className="wrap">
                {/* { headLine && <h2>{headLine}</h2>}
                <div className="children">
                    {children && children}
                </div> */}
                {headLine && <Heading fontSize={'4xl'}>{headLine}</Heading>}
                <Box
                    maxWidth={'40.0rem'}
                    margin={'4rem auto 6rem'}
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    {children && children}
                </Box>
            </div>
        </StyledAuth>
    )
}