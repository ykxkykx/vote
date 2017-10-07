var express = require('express');
var path = require('path');

var app = express();
app.set('port', process.env.PORT || 28842);

//设置静态资源路径
// app.set(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));
//设置模板渲染
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

var index = require('./routes/index');
app.use('/', index);

// 404 NOT FOUND
app.use(function(req, res, next) {
  res.status(404);
  res.send('404 - Not Found');
})

// 500 SERVER EOORO
app.use(function(req, res, next) {
  res.status(404);
  res.send('500 - Server Error');
})

app.listen(app.get('port'), function() {
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate');
})