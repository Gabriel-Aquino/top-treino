import express from 'express';
import 'reflect-metadata';
import cors from 'cors';
import mainRoute from './routes';
import '../typeorm';
import '@shared/container';

const app = express();
app.use(cors());
app.use(express.json());

app.use(mainRoute);

export { app };
