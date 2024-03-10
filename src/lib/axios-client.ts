import axios, {type AxiosRequestConfig} from 'axios'

const createInstance = (baseURL: string, options: AxiosRequestConfig = {}) =>
  axios.create({baseURL, ...options})

// INSTANCES
export const uI = createInstance('https://api.unsplash.com')
