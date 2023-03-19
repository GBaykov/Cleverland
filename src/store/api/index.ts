import axios from 'axios';
import { HOST } from '../../constants';

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: HOST,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }

  return config;
});
