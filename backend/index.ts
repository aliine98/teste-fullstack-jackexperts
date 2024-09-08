import express from 'express';
import cors from 'cors';

export const router = express.Router();
const app = express();
const port = 3333;
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
