import axios, {type AxiosRequestConfig} from 'axios'

const createInstance = (baseURL: string, options: AxiosRequestConfig = {}) =>
  axios.create({baseURL, ...options})

// INSTANCES
export const uI = createInstance('https://api.coingecko.com/api/v3')
