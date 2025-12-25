import axios from 'axios';

// Configuración básica de Axios para la API de Simpsons
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SIMPSONS_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
