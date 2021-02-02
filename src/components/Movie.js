import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getMovie } from '../store/movies/actions'
import { Box, Image, Button, Flex} from "@chakra-ui/core";

const IMG_API = 'https://image.tmdb.org/t/p/w1280'

const Movie = ({title, poster_path, id, movie}) => {

  const history = useHistory()
  const dispatch = useDispatch()

  const handleGoToMovie = () => {
    dispatch(getMovie(id))
    history.replace(`/movie/${id}`)
  }

  return(
        <Flex
        flexDirection="column"
        maxW="220px"
        h='370px'
        boxShadow="0px 15px 16px -6px rgba(0,0,0,0.9)"
        m='0.7rem'
        rounded="lg"
        borderRadius='8px'
        overflow="hidden"
        justifyContent="space-between"
        data-testid="movie"
        onClick={handleGoToMovie}
        cursor='pointer'
        background='black'
      >
        <Box  rounded="lg" h="100%">
            <Image  w='100%' src={poster_path ? (IMG_API + poster_path) :  'https://media.istockphoto.com/vectors/movie-time-vector-illustration-cinema-poster-concept-on-red-round-vector-id911590226?b=1&k=6&m=911590226&s=612x612&w=0&h=w9jbFPtzzhUmtaIoihRsrMTYch2-OKLeBHSgNqVraSY='} 
            alt={title} />
        </Box>
        <Box p="2">
            <Box textAlign='center'>
                <Button  color='gray.500' 
                _focus={{border:'none'}} 
                _hover={{ color: 'white', fontSize:'1.05rem' }}
                variant='link' 
                onClick={handleGoToMovie}>
                {title}
                </Button>
            </Box>
        </Box>
      </Flex>
    )
}
export default Movie;