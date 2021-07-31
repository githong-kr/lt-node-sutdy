"use strict";

// official
import express from 'express';
const app = express();

// non-official
import { myDate } from './src/js/date.js';
import * as advice from './src/js/advice.js'

const PORT = process.env.PORT || 4001;

const server = {
    constructor: () => {
        console.log('Server setting start..');

        app.use(advice.allAround);
        app.get('/', (req, res) => {
            res.json(`alive with ${process.env.NODE_ENV}`);
        })

        app.get('/test', (req, res) => {
            console.log('/test start');
            res.json(`Good Job!`);
        })
    },

    start: () => {
        console.log(`Server start port: ${PORT}`);
        return app.listen(PORT);
    }
}

export { server }