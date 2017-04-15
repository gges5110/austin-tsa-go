var express = require('express')
var app = express()

var env = process.env.NODE_ENV || 'development';

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/route1', function (req, res) {
  res.send('Hello World1!')
})

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
