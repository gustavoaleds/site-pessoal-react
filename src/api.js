import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-site-pessoal-3qiz.onrender.com/api',
});

export default api;
