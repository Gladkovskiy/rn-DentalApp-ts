import axios, {AxiosRequestConfig} from 'axios'

//для симулятора android 10.0.2.2:5000
//для физического устройства 192.168.103:5000
export const baseURL = 'http://10.0.2.2:5000/api'
// baseURL: 'http://192.168.1.103:5000/api',

export const baseURLStatic = 'http://10.0.2.2:5000/image/'

//запросы без  авторизации
export const $host = axios.create({
  baseURL,
})

//запросы с авторизацией
export const $authHost = axios.create({
  baseURL,
})

const authInterceptor = (config: AxiosRequestConfig) => {
  config.headers = config.headers ?? {}
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
  return config
}

$authHost.interceptors.request.use(authInterceptor)
