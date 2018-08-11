import axios from 'axios';

const API_URL = '/api/';

export default {
  getAllBlocksForOneDay() {
    return axios.get(`${API_URL}/blocks/`);
  },
  getLatestBlock() {
    return axios.get(`${API_URL}/blocks/latest`);
  },
  getByHash(hash) {
    return axios.get(`${API_URL}/blocks/${hash}`);
  },
};
