
  
import axios from 'axios';
import { baseURL } from './urls';

const axiosService = axios.create({baseURL});
export default axiosService;


export const axiosServiceUsers = axios.create({baseURL: 'https://jsonplaceholder.typicode.com/users'});

