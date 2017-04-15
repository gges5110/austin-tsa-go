var express = require('express');
var router = express.Router();

router.get('/food', function(request, response) {
  var name = "Louis"
  if (request.query.name) {
    name = request.query.name;
  }

  response.render('pages/food', {
    name: name
  });
});

module.exports = router;
