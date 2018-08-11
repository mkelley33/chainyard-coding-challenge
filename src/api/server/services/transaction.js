import axios from 'axios';
import BASE_API_URL from '../config';

export default {
  getByIndex(req, res, next) {
    return axios
      .get(`${BASE_API_URL}rawtx/${req.params.transactionIndex}`)
      .then(resp => res.json(resp.data))
      .catch(e => next(e));
  },
};
