var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();

router.get('/', function(req, res) {
  var content = fs.readFileSync(path.resolve(__dirname, '../public/resource/index.json'));
  var result = JSON.parse(content);
  res.render('index', result);
})

module.exports = router;