import express from 'express';
import cors from 'cors';
import { userRouter } from './routes/UserRoutes';
import { taskRouter } from './routes/TasksRoutes';

const app = express();
const port = 3333;
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
