import axios from 'axios'
import { apiURL } from "../helpers/env"
  
const API = axios.create({
  baseURL: apiURL,
  withCredentials: false,
  emulateJSON: true,
})

API.interceptors.request.use(config => {
  const request = config
  return request
})

export default API