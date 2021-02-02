import React, { useState} from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import {  getSearchMovies, loadingMovies } from '../store/movies/actions'
import { useHistory } from 'react-router-dom'
import { Heading, Flex, Input, Link } from "@chakra-ui/core";
import Stars from '../assets/images/Stars.jpg'

const Layout = ({children}) =>{

    const [searchTerm, setSearchTerm] = useState('')
    const history = useHistory()
    const dispatch = useDispatch()

    const handleOnSubmit = async (e) => {
      e.preventDefault()
      history.replace(`/`)
      if(searchTerm){
        dispatch(loadingMovies(true))
        try {
          await dispatch(getSearchMovies(searchTerm))
        } catch (e) {
          console.log(e)
        } finally {
          dispatch(loadingMovies(false))
          setSearchTerm('')
        }
      }  
    }

    const handleOnChange = (e) =>{
      setSearchTerm(e.target.value)
    }
    return(
    <Flex
    backgroundImage={`url(${Stars})`}
    backgroundSize='cover'
    backgroundAttachment='fixed'
    wrap='wrap'
    justifyContent='center'
    >    
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w='100%'
      padding="1rem"
      backgroundImage='linear-gradient(180deg, black 30%,  rgba(255,0,0,0) 60%)'
      color="white"
    >
      <Flex align="center" ml={2}>
        <Link href='/' 
        _focus={{border:'none'}}  
        _hover={{ color: '#2EFEF7'}}>
          <Heading as="h1" 
          size="lg" 
          letterSpacing={"-.1rem"} >
            Movies Josu
          </Heading>
        </Link>
      </Flex>
      <Flex>
          <form onSubmit={handleOnSubmit}>
            <Input bg='white' 
            placeholder="search..." 
            color='grey' 
            onChange={handleOnChange} 
            boxShadow="0px 15px 16px -6px rgba(0,0,0,0.9)"/>
          </form>
      </Flex>
      </Flex>
      
      <Flex
          wrap="wrap"
          padding="1.5rem"
          color="white"
          justifyContent='center'
          minH='90vh'
      >
        { children}
      </Flex>
    </Flex>
  )
}
export default Layout;