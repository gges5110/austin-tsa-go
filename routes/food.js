var express = require('express');
var router = express.Router();

router.get('/food', function(request, response) {
  var name = "Louis"
  if (request.query.name) {
    name = request.query.name;
  }
  var restuartant_list = [
    {
      'location': {
        'lat': 30.282553,
        'lng': -97.742228
      },
      'name': "Cocos"
    },
    {
      'location': {
        'lat': 30.286311,
        'lng': -97.742408
      },
      'name': "Song La"
    }
  ];

  response.render('pages/food', {
    name: name,
    restuartant_list: restuartant_list
  });
});

module.exports = router;
