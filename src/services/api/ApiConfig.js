import axios from "axios"
export const Api = () => {
  return axios.create({
    baseUrl: 'http://localhost:3000'
  })
}

export default Api;