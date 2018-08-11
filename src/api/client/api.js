import axios from 'axios';

const API_URL = '/api/';

export default {
  getLatestBlock() {
    return axios.get(`${API_URL}/blocks/latest`);
  },
};
