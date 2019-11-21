import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.118.157:3000/',
});

export default api;
