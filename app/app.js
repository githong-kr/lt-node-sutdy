"use strict";

// official
import * as http from 'http';

// non-official
import {myDate} from './src/js/date.js';

let port = process.env.PORT || 4001

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`Hello World!!!! ${myDate()}`);
}).listen(port);