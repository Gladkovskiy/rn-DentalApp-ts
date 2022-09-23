import axios from 'axios'

//запросы без  авторизации
export const $host = axios.create({
  baseURL: 'http://10.0.2.2:5000/api',
  // baseURL: 'http://192.168.1.103:5000/api',
})
