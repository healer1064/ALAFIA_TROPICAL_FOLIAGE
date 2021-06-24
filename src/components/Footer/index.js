import React from 'react'
import { Link as NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'


const StyledFooter = styled.footer`
    width: 100%;
    position:absolute;
    left:0;
    bottom:0;
    right:0

    .wrap {
        height: calc(100% - 6.5rem - 5.8rem);
        max-width: 1450px;
        padding: 20px 10px;
        
        height: 2.5rem;
       
        bottom: 0;
        width: 100%; 
    }

`

export default function Footer(){
  return (
      <StyledFooter>
        <Box
          bg={useColorModeValue('gray.50', 'gray.900')}
          color={useColorModeValue('gray.700', 'gray.200')}>
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            <Stack direction={'row'} spacing={6}>
              <NavLink to='/'>Home</NavLink >
              <NavLink to='/'>About</NavLink >
              <NavLink to='/search'>Plants</NavLink >
              <NavLink to='/'>Contact</NavLink >
            </Stack>
            <Text>© 2020 Alafia Tropical Foilage. All rights reserved</Text>
          </Container>
        </Box>
      </StyledFooter>
  )
}