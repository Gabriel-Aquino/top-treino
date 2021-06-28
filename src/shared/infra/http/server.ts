import express from 'express';
import 'reflect-metadata';
import cors from 'cors';
import mainRoute from './routes';
import '../typeorm';

const app = express();
app.use(express.json());
app.use(cors());

app.use(mainRoute);

app.listen(3333, () => {
  console.log('Server has been started!');
});
