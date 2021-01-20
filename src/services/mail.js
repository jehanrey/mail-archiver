import axios from 'axios'

const BASE_URL = 'localhost:3001'
const HEADERS = {
  'content-type': 'application/json',
}

export const getMail = () => {
  return axios.get(`http://${BASE_URL}/mail`, {
    headers: HEADERS
  })
}