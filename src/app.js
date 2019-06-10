import express, { json } from 'express';
import cors from 'cors';
import connectToDb from './config/db';

const app = express();

connectToDb();

app.use(cors());
app.use(json({ extended: false }));
app.use('/api', require('./routes/players').default);

export default app;
