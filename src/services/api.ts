import axios from "axios"

export const api = axios.create({
  baseURL: 'https://api-site.lojaconectada.com.br/v2',
  timeout: 5000,
  headers: {
    'Authorization': 'Token ede9cf2a16d6b49172248a52624bc09be788bfd1',
    'Content-Type': 'application/json'
  },
})

export const getVehicles = async () => {
  try {
    const response = await api.get('/vehicles');
    return response.data;
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    throw error;
  }
};
export default api;