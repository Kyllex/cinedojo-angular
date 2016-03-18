(function () {
  'use strict';

  var express = require('express');
  var bodyParser = require('body-parser');

  var app = express();

  app.use(bodyParser.json()); // application/json
  app.use(bodyParser.urlencoded({ extended: true })); // application/x-www-form-urlencoded

  app.get('/', function (req, res) {

    var responseData = {
      message: 'OK'
    }

    res.json(responseData);
  });

  app.post('/', function (req, res) {
    console.info(req.body); // get req body

    var postResponse = {
      message: 'bora'
    }

    res.json(postResponse);
  });

  app.listen(3000, function () {
    console.log('App listening on port 3000!');
  });
})();