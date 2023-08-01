import express = require('express');
import { router } from './routes'
import 'dotenv/config';
// import { SerialConnection } from './providers/serial';
// import SerialPort from 'serialport';
// import connectDB from './providers/mongo/connection';

const app = express();

app.use(express.json());
app.use(express.urlencoded());

// connectDB();

// const serial = new SerialConnection(SerialPort);
// serial.start();

app.use(router);

export { app };
