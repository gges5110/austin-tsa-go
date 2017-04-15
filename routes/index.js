var express = require('express');
var router = express.Router();

router.get('/', function(request, response) {
  var name = "Louis"
  if (request.query.name) {
    name = request.query.name;
  }

  response.render('pages/index', {
    name: name
  });
});

module.exports = router;
