import express from 'express';

import transactionService from '../services/transaction';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/:transactionIndex').get(transactionService.getByIndex);

export default router;
