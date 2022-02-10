import { Router } from 'express';
import { to } from '@nc/utils/async';
import { getExpenses } from '../services/get-expenses'
export const router = Router();

router.get('/get-expenses', async (req, res, next) => {
    const [error, response] = await to(getExpenses());
  
    if (error) 
        return next(error);    
    else  
        return res.send(response);
  });