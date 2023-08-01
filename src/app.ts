import express = require('express');
import { router } from './routes'
import 'dotenv/config';
import connectDB from './providers/mongo/connection';

const app = express();

app.use(express.json());
app.use(express.urlencoded());

connectDB();
app.use(router);

export { app };
