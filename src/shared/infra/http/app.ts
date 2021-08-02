import express, { Response, Request, NextFunction } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import cors from 'cors';
import AppError from '@shared/errors/AppError';
import mainRoute from './routes';
import connection from '../typeorm';
import '@shared/container';

connection();

const app = express();
app.use(cors());
app.use(express.json());

app.use(mainRoute);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Integral server error',
  });
});

export { app };
