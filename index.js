import express from 'express';
import cors from 'cors';

import todoRouter from './routes/todo.router.js';

const app = express();

const port = 3333;

app.use(express.json());
app.use(cors());

app.use('/', todoRouter);

app.listen(port, () => {
  console.log(`Running app at http://localhost:${port}`);
});
