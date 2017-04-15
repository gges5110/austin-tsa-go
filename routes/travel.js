var express = require('express');
var router = express.Router();

router.get('/travel', function(request, response) {
  var name = "Louis"
  if (request.query.name) {
    name = request.query.name;
  }

  response.render('pages/travel', {
    name: name
  });
});

module.exports = router;
