import axios from 'axios';

export const apiClientes = axios.create({
  baseURL: 'https://json-server.serveo.net',
});