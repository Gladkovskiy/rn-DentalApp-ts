import axios from 'axios'

//запросы без  авторизации
export const $host = axios.create({
  baseURL: 'http://10.0.2.2:3000',
})
