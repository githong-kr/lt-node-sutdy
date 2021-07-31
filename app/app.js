"use strict";

// official
import * as http from 'http';

// non-official
import {myDate} from './src/js/date.js';

let port = process.env.PORT || 4001

http.createServer((req, res) => {

    console.log(`url : ${req.url} method : ${req.method}`);

    if(req.method === 'GET' && req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(`Hello World!!!! ${myDate()}`);
    } else if (req.method === 'GET' && req.url === '/test') {
        res.statusCode = 200;
        res.end('Good Job!');
    } else {
        res.statusCode = 404;
        res.end();
    }
}).listen(port);