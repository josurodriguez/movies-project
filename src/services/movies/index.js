import { API } from '../../clients'
import { apiKEY } from "../../helpers/env"

  const fetchAllMovies = async () => {
    const route = `discover/movie?sort_by=popularity.desc&api_key=${apiKEY}`
    return API.get(route)
      .then(response => Promise.resolve(response.data.results))
      .catch(error => console.log(error))
  }
  
  const fetchSearchMovies = async (search) => {
    const route = `search/movie?api_key=${apiKEY}&query=${search}`
    return API.get(route)
      .then(response => Promise.resolve(response.data.results))
      .catch(error => console.log(error))
  }

const fetchMovie = async (id) => {
  const route = `movie/${id}?api_key=${apiKEY}`
  return API.get(route)
      .then(response => Promise.resolve(response.data))
      .catch(error => console.log(error))
}


export { fetchAllMovies, fetchSearchMovies, fetchMovie }
