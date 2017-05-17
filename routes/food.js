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
      'name': "Cocos",
      'catagory': "Taiwanese Food"
    },
    {
      'location': {
        'lat': 30.286311,
        'lng': -97.742408
      },
      'name': "Song La",
      'catagory': "Taiwanese Food"
    },
    {
      'location': {
        'lat': 30.288080,
        'lng': -97.744095
      },
      'name': "Little Sheep Mongolian Hot Pot",
      'catagory': "Chinese Food"
    }
  ];

  response.render('pages/food', {
    name: name,
    restuartant_list: restuartant_list
  });
});

module.exports = router;
