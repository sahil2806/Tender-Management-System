import express from 'express';
import {login,signup} from '../../controllers/auth-controller.js'
import {create,destroy,get,getAll} from '../../controllers/tender-controller.js';
import { createBid } from  '../../controllers/bid-controllers.js'
const router = express.Router()

router.post('/signup',signup);
router.post('/login',login);

router.post('/tender',create);
router.delete('/tender/:id',destroy);
router.get('/tender/:id',get);
router.get('/tender',getAll);

router.post('/bid',createBid);



export default router;

