import { CURRENT_MOVIES_ALL, CURRENT_MOVIE, LOADING, ADD_FAVORITE } from '../../store/movies'
import { fetchAllMovies, fetchSearchMovies, fetchMovie } from '../../services/movies'

const getMoviesAll = () => async dispatch => {
  try {
    const response = await fetchAllMovies()
    dispatch(CURRENT_MOVIES_ALL(response))
  } catch (error) {
    console.log(error)
  }
}

const getSearchMovies = (search) => async dispatch => {
  try {
    const response = await fetchSearchMovies(search)
    dispatch(CURRENT_MOVIES_ALL(response))
  } catch (error) {
    console.log(error)
  }
}

const getMovie = (id) => async dispatch => {
  try {
    const response = await fetchMovie(id)
    dispatch(CURRENT_MOVIE(response))
  } catch (error) {
    console.log(error)
  }
}

const addFavorite = (movie) => async dispatch => {
  dispatch(ADD_FAVORITE(movie))
}

const loadingMovies = (boolean) => async dispatch => {
  dispatch(LOADING(boolean))
} 

export {
  addFavorite,
  loadingMovies,
  getMoviesAll, 
  getSearchMovies,
  getMovie
}