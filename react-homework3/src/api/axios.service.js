import axios from 'axios';
import { ApiUSERS as baseURL } from './urls';

const axiosService = axios.create({baseURL});

export default axiosService;