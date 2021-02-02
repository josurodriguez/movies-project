import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'movies',
  initialState: {
    currentMoviesAll: null,
    currentMovie: null,
    favorites: [],
    loading: true,
  },
  reducers: {
    CURRENT_MOVIES_ALL: (state, { payload }) => {
      state.currentMoviesAll = payload
    },
    CURRENT_MOVIE: (state, { payload }) => {
      state.currentMovie = payload
    },
    ADD_FAVORITE: (state, {payload}) => {
      state.favorites = [...state.favorites, payload]
    }, 
    LOADING: (state, {payload}) => {
      state.loading = payload
    },
  },
})

export const {
   LOADING,
   CURRENT_MOVIES_ALL,
   CURRENT_MOVIE, 
   ADD_FAVORITE
} = slice.actions

export default slice.reducer