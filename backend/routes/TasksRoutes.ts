import { Router } from 'express';
import { authenticateToken, getTasks } from '../controllers/TasksController';

export const taskRouter = Router();
taskRouter.get('/tasks', authenticateToken, getTasks);
