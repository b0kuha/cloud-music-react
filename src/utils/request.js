import axios from 'axios';

const service = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 5000,
});

service.interceptors.request.use(config => {
  return config;
}, error => {
  console.log(error);
});

service.interceptors.response.use(response => {
  return response.data;
}, error => {
  console.log(error);
});

export default service
