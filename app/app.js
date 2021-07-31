import * as http from 'http';
let port = process.env.PORT || 4001

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!!!!');
}).listen(port);