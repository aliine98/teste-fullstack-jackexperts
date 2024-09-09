import { Router } from 'express';
import { addNewTask, authenticateToken, changeTaskStatus, getTasks, updateTask } from '../controllers/TasksController';

export const taskRouter = Router();
taskRouter.get('/tasks', authenticateToken, getTasks);
taskRouter.post('/new-task', authenticateToken, addNewTask);
taskRouter.patch('/change-status/:id', authenticateToken, changeTaskStatus);
taskRouter.patch('/update-task/:id', authenticateToken, updateTask);
