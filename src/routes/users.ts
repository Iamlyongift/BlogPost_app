import express from 'express';
import { RegisterUser, loginUser } from '../controllers/userController';

const router = express.Router();

/* GET users listing. */
router.post('/register_user', RegisterUser );
router.post('/login', loginUser );

export default router;
