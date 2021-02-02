import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './movies'

const reducer = {
  movies: moviesReducer,
}

const store = configureStore({
  reducer
})

export default store