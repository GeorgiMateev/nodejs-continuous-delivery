var core = require('./core.js');

const PORT=process.env.APP_PORT; 

var express = require('express');
var exphbs  = require('express-handlebars');

var notesController = require('./controllers/notes-controller.js')();

var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
  res.render('index');
})

app.route('api/notes')
    .get(notesController.get )
    .post(notesController.post)
    .delete('/:id', notesController.delete);

app.listen(PORT, function () {
  console.log('Example app listening on port '+ PORT +'!');
})