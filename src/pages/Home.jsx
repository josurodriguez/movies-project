import React, {useEffect, useState} from 'react'
import Movie from '../components/Movie.js'
import ImageSider from '../components/ImageSider.js'
import { motion, AnimatePresence } from 'framer-motion'
import { getMoviesAll, loadingMovies } from '../store/movies/actions'
import { useSelector } from 'react-redux'
import {  useDispatch } from 'react-redux'
import { Flex, Box} from "@chakra-ui/core"
import { Spinner } from "@chakra-ui/react"

const Home = () => {
  const { currentMoviesAll } = useSelector(state => state.movies)
  const { loading } = useSelector(state => state.movies)

  const dispatch = useDispatch()

  const getAllMovies = async () => {
    
    try {
      await dispatch(getMoviesAll())
    } catch (e) {
      console.log(e)
    } finally {
      dispatch(loadingMovies(false))
    }
  }

useEffect( () => {
  getAllMovies()
}, [])

  return (
    <AnimatePresence>
        <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }}>
          {loading ? (
              <Spinner
                thickness="4px"
                speed="1.0s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
          ) :
        <>
          <ImageSider />
          <Flex
          flexWrap='wrap'
          justifyContent='center'
          >
            {currentMoviesAll && currentMoviesAll.map(movie =>(
              <Movie key={movie.id} {...movie}  movie={movie}/>
            ))}
          </Flex>
        </>
      }
      </motion.div>
    </AnimatePresence>
  );
}

export default Home;