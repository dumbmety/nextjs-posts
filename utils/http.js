import axios from 'axios'

const http = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com',
})

export default http
