import axios from 'axios';
import * as storage from './storage';

const service = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
});

service.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${ storage.getItem('token') }` || '';
  return config;
}, error => {
  console.log(error);
});

service.interceptors.response.use(response => {
  return response;
}, error => {
  console.log(error);
});

export default service
