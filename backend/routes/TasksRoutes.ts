import { Router } from 'express';
import { addNewTask, authenticateToken, getTasks } from '../controllers/TasksController';

export const taskRouter = Router();
taskRouter.get('/tasks', authenticateToken, getTasks);
taskRouter.post('/new-task', authenticateToken, addNewTask);
