import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const getAllProducts = (filters) => {
    const query = filters ? `?${new URLSearchParams(filters).toString()}` : '';
    return axios.get(`${BASE_URL}/catalog${query}`);
};
