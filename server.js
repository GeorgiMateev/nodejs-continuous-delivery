var core = require('./core.js');

var express = require('express');
var exphbs  = require('express-handlebars');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var database = require('./database/database.js').initialize();

var notesController = require('./controllers/notes-controller.js')(database.Note);

var app = express();

const PORT=process.env.APP_PORT; 

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
  res.render('index');
});

// Request body parsing middleware should be above methodOverride
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json({ limit: '1mb' }));

app.use(methodOverride());

app.route('/api/notes')
    .get(notesController.get)
    .post(notesController.post);

app.route('/api/notes/:id')
    .delete(notesController.delete);

app.listen(PORT, function () {
  console.log('Example app listening on port '+ PORT +'!');
})