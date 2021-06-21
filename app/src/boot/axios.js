// import something here

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
// export default async (/* { app, router, Vue ... } */) => {
// something to do
// }
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000'
})

export default ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance
}

export { axiosInstance }
