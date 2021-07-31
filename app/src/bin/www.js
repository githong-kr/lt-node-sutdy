"use export";

// official
import express from 'express';
import dotenv from 'dotenv';

// non-official
import * as advice from './common/advice.js';
import * as home from '../routes/home/index.js';

// variable
const PORT = process.env.PORT || 4001;
const app = express();

export default class Server {
  constructor() {
    console.log('Server setting start...');

    dotenv.config();

    app.use(advice.allAround);
    app.use('/', home.router); 

    console.log('Server setting end...');
  }

  start() {
    console.log(`server start port: ${PORT}`);
    return app.listen(PORT);
  }
}