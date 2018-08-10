import express from 'express';

import blockService from '../services/block';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/:hash').get(blockService.getByHash);

router.route('/latest').get(blockService.getLatest);

export default router;
