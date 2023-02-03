import axios from 'axios';
import { storeToRefs } from 'pinia';

const API_URL = import.meta.env.VITE_APP_API_URL

export const api = create(`${API_URL}`)

export function create(baseURL: string, options?: any){
  const instance = axios.create(Object.assign({ baseURL }, options))

  return instance
}