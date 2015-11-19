var express = require('express');
var path    = require('path');
var app     = express();

app.use('/app', express.static(__dirname + '/app'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'app/', 'login.html'));
});

app.get('/login.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'app/', 'login.html'));
});

app.get('/itrust.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'app/', 'itrust.html'));
});

var server = app.listen(7123, function () {
  var host = '0.0.0.0'; //server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
