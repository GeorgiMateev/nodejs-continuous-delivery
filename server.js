var http = require('http');

var core = require('./core.js');

const PORT=process.env.APP_PORT; 

var server = http.createServer((req, res) => res.end('Result 5*5: ' + core.square(5)));

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});