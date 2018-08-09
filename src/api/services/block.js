import axios from 'axios';
import BASE_API_URL from '../config';

export default {
  getLatest(req, res, next) {
    return axios
      .get(`${BASE_API_URL}latestblock`)
      .then(data => res.json(data.data))
      .catch(e => next(e));
  },
};
