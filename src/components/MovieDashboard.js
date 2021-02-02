import React from 'react'
import { useSelector } from 'react-redux'
import { Flex, Image, Box, Text, Stack, Link, Heading } from "@chakra-ui/core";
import { StarIcon } from '@chakra-ui/icons'
import { Spinner } from "@chakra-ui/react"

const IMG_API = 'https://image.tmdb.org/t/p/w1280'

const MovieDashboard = () => {

    const { currentMovie } = useSelector(state => state.movies)
    

    return(
        <Box m="10%" mt="8">
        { currentMovie ? 
        <Stack spacing="8">
          <Text borderLeft="5px solid tomato" pl="4" as="h1" fontSize="2xl">
            {currentMovie.title}
          </Text>
          <Flex wrap="wrap-reverse" overflow="hidden">
            <Box bg="gray.50" rounded="lg" mr="8">  
                <Image w="350px" src={currentMovie.poster_path ? (IMG_API + currentMovie.poster_path) :  'https://media.istockphoto.com/vectors/movie-time-vector-illustration-cinema-poster-concept-on-red-round-vector-id911590226?b=1&k=6&m=911590226&s=612x612&w=0&h=w9jbFPtzzhUmtaIoihRsrMTYch2-OKLeBHSgNqVraSY='} 
                alt={currentMovie.title} />
            </Box>
            <Box flex="1" minW="200px" mb="8">
              <Stack spacing="8">
                <Box data-testid="movie-plot">{currentMovie.overview}</Box>
                <Stack spacing="1">
                
                    <Box>
                      <Text as="span" color="gray.500">
                        Rating:
                      </Text>{" "}
                      {currentMovie.vote_average}
                      {Array(5)
                        .fill("")
                        .map((_, i) => (
                        <StarIcon
                            mt='-6px'
                            ml='5px'
                            key={i}
                            color={i < currentMovie.vote_average/2 ? "teal.500" : "gray.300"}
                        />
                        ))}
                    </Box>
                    <Box>
                      <Text as="span" color="gray.500">
                       Runtime:
                      </Text>{" "}
                      {currentMovie.runtime} min
                    </Box>
                    <Box>
                      <Text as="span" color="gray.500">
                       Genere:
                      </Text>{" "}
                      {currentMovie.genres.map((genere, index) => (
                          <p key={index}>{genere.name}{" "}</p>
                      ))}
                    </Box>
                    <Box>
                      <Text as="span" color="gray.500">
                        Year:
                      </Text>{" "}
                      {currentMovie.release_date}
                    </Box>
                </Stack>
                {
                currentMovie.homepage !== '' && 
                    <Link href={currentMovie.homepage} bg='black' width='8rem' br='1rem' padding='0.5rem' textAlign='center' _hover={{ color: 'gray.300' }}>
                        <Heading as="h2" size='md' letterSpacing={"-.1rem"}>
                            Watch now
                        </Heading>
                    </Link>
                }
              </Stack>
            </Box>
          </Flex>
        </Stack> :
          <Spinner
            thickness="4px"
            speed="1.0s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        }
      </Box>
    )
} 

export default MovieDashboard;