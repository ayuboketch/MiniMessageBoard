const http = require('http');
const fs = require('fs');
// const path = require('path');
const _ = require('lodash')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
});

server.listen(3000, 'localhost', () => {
    console.log('listening on port 3000 link = http://localhost:3000');
}); 