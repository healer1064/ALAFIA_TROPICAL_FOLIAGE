import React from 'react'
import { Link as NavLink } from 'react-router-dom'
import styled from 'styled-components'
import mediaQueries from '../../styles/mediaQueries'
import { useSelector, useDispatch } from 'react-redux'

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'



import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'


// ACTIONS 
import { signOutUserStart } from '../../redux/user/user.actions'

// SELECTORS 
import { selectCartItemsCount } from './../../redux/cart/cart.selectors'


const StyledHeader = styled.header`
    transition: .2s ease-in-out;
    height: 6.5rem;
    box-shadow: 0 2px 4px 0 rgba(0,0,0, 0.1);

    .wrap {
        background: ${({ theme }) => theme.background};
        position: relative;
        height: 100%;
        max-width: 1450px;
        margin: 0 auto;
        
        

        .logo {
            width: 13.0px;
            position: absolute;
            top: 50%;
            left: 10px;
            transform: translateY(-50%);
        }

        nav {
            display: block;
            width: 100%;
            height: 100%;
            padding: 0;
            margin: 0;

            ul, li li {
                padding: 0;
                margin: 0;
                height: 100%;
            }

            ul {
                text-align: center;

                li {
                    list-style-type: none;
                    margin: 0 10px;
                    display: inline-block;

                    a {
                        color: ${({ theme }) => theme.primary};
                        font-size: 1.8rem;
                        line-height: 6.5rem;
                        vertical-align: middle;
                        text-decoration: none;
                        text-transform: uppercase;
                    }
                }

            }
        }

        .callToActions {
          display: flex;
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            align-items: center;

            ul,li {
                display: block;
                margin: 0;
                padding: 0;
                ${mediaQueries.desktop`
                display: none;
                `}
                
            }

            li {
                display: inline-block;
                list-style-type: none;
                margin-right: 1.5rem;

                &:last-child {
                    margin-right: 0;
                }

                a {
                    color: ${({ theme }) => theme.primary};
                    font-size: 1.8rem;
                    line-height: 1;
                    text-decoration: none;
                    text-transform: uppercase;
                }

                span {
                    color: ${({ theme }) => theme.primary};
                    cursor: pointer;
                    transition: all .4s ease-in-out;
                }

            }

            .hamburger {
              display: none;
              ${mediaQueries.desktop`
                display: block;
              `}
            }
            
        }

    }
`



const mapState = (state) => ({
    currentUser: state.user.currentUser,
    totalNumCartItems: selectCartItemsCount(state)
})
export default function Header(props){
    const dispatch = useDispatch()
    const { currentUser, totalNumCartItems } = useSelector(mapState)
    const { isOpen, onToggle } = useDisclosure()

    const signOut = () => {
        dispatch(signOutUserStart())
    }

    return(
          <Box>
            <Flex
              bg={useColorModeValue('white', 'gray.800')}
              color={useColorModeValue('gray.600', 'white')}
              minH={'60px'}
              py={{ base: 2 }}
              px={{ base: 4 }}
              borderBottom={1}
              borderStyle={'solid'}
              borderColor={useColorModeValue('gray.200', 'gray.900')}
              align={'center'}>
              <Flex
                flex={{ base: 1, md: 'auto' }}
                ml={{ base: -2 }}
                display={{ base: 'flex', md: 'none' }}>
                <IconButton
                  onClick={onToggle}
                  icon={
                    isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                  }
                  variant={'ghost'}
                  aria-label={'Toggle Navigation'}
                />
              </Flex>
              <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                <Text
                  textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                  fontFamily={'heading'}
                  color={useColorModeValue('gray.800', 'white')}>
                    <NavLink to='/'>Logo</NavLink>
                  
                </Text>
      
                <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                  <DesktopNav />
                </Flex>
              </Flex>

              <Stack
                flex={{ base: 1, md: 0 }}
                justify={'flex-start'}
                direction={'row'}
                spacing={6}>
                <Button
                  as={'a'}
                  fontSize={'18px'}
                  fontWeight={400}
                  variant={'link'}
                  >
                    <NavLink to='/cart'>Cart({totalNumCartItems})</NavLink>
                </Button>
              </Stack>

              {currentUser && (
                <Stack
                flex={{ base: 1, md: 0 }}
                justify={'flex-end'}
                direction={'row'}
                spacing={6}>
                <Button
                  as={'a'}
                  fontSize={'18px'}
                  fontWeight={400}
                  variant={'link'}
                  to='/login'>
                    <NavLink to='/dashboard' style={{paddingLeft: '20px'}}>My Account</NavLink>
                </Button>
                <Button
                  display={{ base: 'none', md: 'inline-flex' }}
                  fontSize={'18px'}
                  fontWeight={600}
                  color={'white'}
                  bg={'green.400'}
                  href={'#'}
                  _hover={{
                    bg: 'green.300',
                  }}>
                   <span onClick={() => signOut()}>Log Out</span>
                </Button>
              </Stack>
              )}

              {!currentUser && (
                <Stack
                flex={{ base: 1, md: 0 }}
                justify={'flex-end'}
                direction={'row'}
                spacing={6}>
                <Button
                  as={'a'}
                  fontSize={'18px'}
                  fontWeight={400}
                  variant={'link'}
                  to='/login'>
                    <NavLink to='/login' style={{paddingLeft: '20px'}}>Sign In</NavLink>
                </Button>
                <Button
                  display={{ base: 'none', md: 'inline-flex' }}
                  fontSize={'18px'}
                  fontWeight={600}
                  color={'white'}
                  bg={'green.400'}
                  href={'#'}
                  _hover={{
                    bg: 'green.300',
                  }}>
                   <NavLink to='/registration'>Sign Up</NavLink>
                </Button>
              </Stack>
              )}

            </Flex>
      
            <Collapse in={isOpen} animateOpacity>
              <MobileNav />
            </Collapse>
          </Box>


        
    )
}

const DesktopNav = () => {
  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                // href={navItem.href ?? '#'}
                fontSize={'18px'}
                fontWeight={500}
                color={'gray.600'}
                _hover={{
                  textDecoration: 'none',
                  // color: useColorModeValue('gray.800', 'white'),
                }}>
                <NavLink to='/search'>{navItem.label}</NavLink>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={'white'}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      to={href}
      // href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('green.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'green.400' }}
            fontWeight={500}>
            <NavLink to={href}>{label}</NavLink>
          </Text>
          <Text fontSize={'14px'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'green.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  )
}

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          <NavLink to={href}>{label}</NavLink>
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};



const NAV_ITEMS = [
  {
    label: 'Find Plants',
    href: '/search'
    // children: [
    //   {
    //     label: 'Explore Design Work',
    //     subLabel: 'Trending Design to inspire you',
    //     href: '#',
    //   },
    //   {
    //     label: 'New & Noteworthy',
    //     subLabel: 'Up-and-coming Designers',
    //     href: '#',
    //   },
    // ],
  },
  {
    label: 'Articles',
    children: [
      {
        label: 'Blogs',
        subLabel: 'Place for blog post',
        href: '#',
      },
      {
        label: 'Terms of Service',
        subLabel: 'View our terms of service',
        href: '#',
      },
      {
        label: 'Contact',
        subLabel: 'Contact information',
        href: '#',
      },
    ],
  },
  {
    label: 'About Us',
    href: '#',
  },
  
]

Header.defaultProps = {
    currentUser: null
}


