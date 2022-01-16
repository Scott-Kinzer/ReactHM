import axios from 'axios';

const axiosService = axios.create({baseURL: 'http://91.201.233.14/api/v2'});

export default axiosService;