// var http = require('http');

var core = require('./core.js');

const PORT=process.env.APP_PORT; 

// var server = http.createServer((req, res) => res.end('Result 5*5: ' + core.square(5)));

// server.listen(PORT, function(){
//     console.log("Server listening on: http://localhost:%s", PORT);
// });

var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
  res.render('index');
})

app.listen(PORT, function () {
  console.log('Example app listening on port '+ PORT +'!');
})