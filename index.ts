import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyPraser from 'body-parser';
import blogsRouter from './routes/blogsRouter';
import mongoose from 'mongoose';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3500;

app.use(cors());
app.use(bodyPraser.json());

app.use('/blogs', blogsRouter);

// Handle Errors
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ statusCode, message: err.message });
  return;
});

mongoose
  .connect(process.env.CONNECTION_STRING as string)
  .then(() => {
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  })
  .catch((e) => {
    console.log('Connection failed:', e);
  });
