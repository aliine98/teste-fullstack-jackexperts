import { Router } from 'express';
import { register } from '../controllers/UserController';

export const userRouter = Router();

userRouter.post('/register', register);
