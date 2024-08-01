import express from 'express';
import {login,signup} from '../../controllers/auth-controller.js'
import {create,update,destroy} from '../../controllers/tender-controller.js';


const router = express.Router()

router.post('/signup',signup);
router.post('/login',login);

router.post('/tender',create);
router.patch('/tender/:id',update); // it is not working check it once
router.delete('/tender/:id',destroy);

export default router;

