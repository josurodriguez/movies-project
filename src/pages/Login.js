import React, {useState} from 'react'
import Stars from '../assets/images/Stars.jpg'
import Auth from '../components/firebase/Auth'
import { Heading, Flex, Input, Link } from "@chakra-ui/core";

const Login = () => {
    
    return(
    <Flex
    backgroundImage={`url(${Stars})`}
    backgroundSize='cover'
    backgroundAttachment='fixed'
    wrap='wrap'
    justifyContent='center'
    h='100vh'
    flexDirection='column'
    alignItems='center'
    color='white'

    >    
        <Heading as="h1" 
          size="lg" 
          letterSpacing={"-.1rem"} 
          _hover={{ color: '#2EFEF7'}}
          mb='1rem'
          >
            Movies Josu
        </Heading>
            <Auth/>
        </Flex>
    )
}
export default Login;