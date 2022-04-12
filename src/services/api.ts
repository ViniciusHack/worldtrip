import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://worldtrip-jet-psi.vercel.app/api'
})