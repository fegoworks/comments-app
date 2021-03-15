import axios from 'axios'
import {BASE_API_URL} from '<constants>/constants'
import { API_KEY } from '../constants/constants';


const api = axios.create({
  baseURL: BASE_API_URL,
})

api.defaults.headers.get['key'] = API_KEY;

export default api