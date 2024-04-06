import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import router from './app/routes';

mongoose
  .connect(process.env.MONGODB_URL as string)
  .then(() => console.log('Connect to Database'));

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/v1/', router);

app.listen(3000, () => {
  console.log('Server is Runnig on Localhost:3000');
});
