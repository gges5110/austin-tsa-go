var express = require('express')


var env = process.env.NODE_ENV || 'development';

//------------------------------------
//          TEMPLATE ROUTING
//------------------------------------
var routes_index = require('./routes/index.js');
var routes_food = require('./routes/food.js');
var routes_living = require('./routes/living.js');
var routes_travel = require('./routes/travel.js')

var app = express()

app.use(routes_index);
app.use(routes_food);
app.use(routes_living);
app.use(routes_travel);

app.set('port', (process.env.PORT || 8000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
