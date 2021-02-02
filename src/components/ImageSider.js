import React, {useState} from 'react'
import {
    Box,
    Image,
    Flex,
    Button
  } from "@chakra-ui/core";
  import { useSelector } from 'react-redux'

  const IMG_API = 'https://image.tmdb.org/t/p/w1280'

const ImageSider = () => {
    const [index, setIndex] = useState(0)
    const { currentMoviesAll } = useSelector(state => state.movies)
    const test = currentMoviesAll ? currentMoviesAll.map(movie => movie.poster_path) : null

    const slideLeft = () => {
        const nextIndex = index -1; 
        if(index < 0){
            setIndex(test.length -1);
        } else {
            setIndex(nextIndex);
        }
    }
    
    const slideRight = () => {
        setIndex((index + 1) % test.length);
    }

    return( currentMoviesAll && (
        <Flex wrap='wrap'
            alignContent='center'
            alignItems='center' 
            justifyContent='center' 
            width='100%' 
            mb='0.5rem'  
            >

            <Button onClick={slideLeft}
            boxShadow="0px 15px 16px -6px rgba(0,0,0,0.9)"
            bg='black' 
            _focus={{ border:'none' }} 
            _hover={{background:'white', color:'black' }}>
            {'<'}
            </Button>

            <Flex 
                maxW="90%"
                h='500px'
                boxShadow="0px 15px 16px -6px rgba(0,0,0,0.9)"
                m='0.7rem'
                rounded="lg"
                borderRadius='40px'
                overflow="hidden"
                data-testid="movie">
                <Box  rounded="lg" h="100%">
                    <Flex wrap='wrap'>
                    <Image width='33.3%'  src={test[index] ? (IMG_API + test[index]) :  'https://media.istockphoto.com/vectors/movie-time-vector-illustration-cinema-poster-concept-on-red-round-vector-id911590226?b=1&k=6&m=911590226&s=612x612&w=0&h=w9jbFPtzzhUmtaIoihRsrMTYch2-OKLeBHSgNqVraSY='} alt={index}  />
                    <Image width='33.3%'  src={test[index + 1] ? (IMG_API + test[index + 1]) :  'https://media.istockphoto.com/vectors/movie-time-vector-illustration-cinema-poster-concept-on-red-round-vector-id911590226?b=1&k=6&m=911590226&s=612x612&w=0&h=w9jbFPtzzhUmtaIoihRsrMTYch2-OKLeBHSgNqVraSY='} alt={index + 1}  />
                    <Image width='33.3%'  src={test[index + 2] ? (IMG_API + test[index + 2]) :  'https://media.istockphoto.com/vectors/movie-time-vector-illustration-cinema-poster-concept-on-red-round-vector-id911590226?b=1&k=6&m=911590226&s=612x612&w=0&h=w9jbFPtzzhUmtaIoihRsrMTYch2-OKLeBHSgNqVraSY='} alt={index + 2}  />
                    </Flex>
                </Box>
            </Flex>

            <Button boxShadow="0px 15px 16px -6px rgba(0,0,0,0.9)"
             onClick={slideRight} 
             bg='black' 
             _focus={{ border:'none' }} 
             _hover={{background:'white', color:'black' }}>
             {'>'}
             </Button>
          
        </Flex> )
    )
}
export default ImageSider;
