var http = require('http');

var core = require('./core.js');

const PORT=8080; 

var server = http.createServer((req, res) => res.end('Result: ' + core.square(5)));

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});