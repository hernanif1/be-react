import axios from "axios"

const instance = axios.create({
  baseURL: "https://api.punkapi.com/v2",
  timeout: 3000
})

export { instance as axios }
