"use export";

// official
import express from 'express';
import dotenv from 'dotenv';

// non-official
import * as advice from './src/js/advice.js';

// variable
const PORT = process.env.PORT || 4001;
const app = express();

export default class Server {
  constructor() {
    console.log('Server setting start...');

    dotenv.config();

    app.use(advice.allAround);

    app.get('/', (req,res) => {
      res.json(`alive with ${process.env.NODE_ENV}`)
    })

    app.get('/test', (req, res) => {
      console.log('/test start');
      res.json(`Good Job!`);
    })

    console.log('Server setting end...');
  }

  start() {
    console.log(`server start port: ${PORT}`);
    return app.listen(PORT);
  }
}