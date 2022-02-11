import { Router } from 'express';
import { to } from '@nc/utils/async';
import { getExpenses,getExpensesByUserId } from '../services/get-expenses'
export const router = Router();

router.get('/get-expenses', async (req, res, next) => {
    console.log(req.query)
    const [error, response] = await to(getExpenses(req.query));

    if (error)
        return next(error);
    else
        return res.send(response);
});

router.get('/get-expenses/:user_id', async (req, res, next) => {
    const [error, response] = await to(getExpensesByUserId(req.query,req.params.user_id));
  
    if (error) {
      return next(error);
    }
  
    return res.send(response);
  });