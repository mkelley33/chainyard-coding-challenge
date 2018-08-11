import express from 'express';
import blockRoutes from './block';
import transactionRoutes from './transaction';

const router = express.Router(); // eslint-disable-line new-cap

router.use('/blocks', blockRoutes);
router.use('/transactions', transactionRoutes);

// Source: https://github.com/gothinkster/node-express-realworld-example-app/blob/master/routes/api/index.js
router.use((err, req, res, next) => {
  if (err.name === 'ValidationError') {
    return res.status(422).json({
      errors: Object.keys(err.errors).reduce((errors, key) => {
        // eslint-disable-next-line no-param-reassign
        errors[key] = err.errors[key].message;
        return errors;
      }, {}),
    });
  }
  return next(err);
});

export default router;
