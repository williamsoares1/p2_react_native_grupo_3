import axios from 'axios';

export const apiClientes = axios.create({
  baseURL: 'https://4bad-2804-56c-d7ce-8100-5c1a-d2b2-6547-bdc8.ngrok-free.app',
});