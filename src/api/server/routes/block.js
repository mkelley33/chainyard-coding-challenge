import express from 'express';

import blockService from '../services/block';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/').get(blockService.getAllForOneDay);

router.route('/latest').get(blockService.getLatest);

router.route('/:hash').get(blockService.getByHash);

export default router;
