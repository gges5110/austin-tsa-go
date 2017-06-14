var express = require('express');
var router = express.Router();

router.get('/food', function(request, response) {
  var name = "Louis"
  if (request.query.name) {
    name = request.query.name;
  }
  var restaurant_list = [
    {
      'location': {
        'lat': 30.282553,
        'lng': -97.742228
      },
      'name': "Cocos",
      'catagory': "Taiwanese"
    },
    {
      'location': {
        'lat': 30.286311,
        'lng': -97.742408
      },
      'name': "Song La",
      'catagory': "Taiwanese"
    },
    {
      'location': {
        'lat': 30.288080,
        'lng': -97.744095
      },
      'name': "Little Sheep Mongolian Hot Pot",
      'catagory': "Taiwanese"
    },
    {
      'location': {
        'lat': 30.285649,
        'lng': -97.742062
      },
      'name': "Chipotle",
      'catagory': "Mexican"
    },
    {
      'location': {
        'lat': 30.291532,
        'lng': -97.734966
      },
      'name': "Taco Joint",
      'catagory': "Mexican"
    },
    {
      'location': {
        'lat': 30.287719,
        'lng': -97.745573
      },
      'name': "Sushi Niichi",
      'catagory': "Japanese"
    }
  ];

  response.render('pages/food', {
    name: name,
    restaurant_list: restaurant_list
  });
});

module.exports = router;
