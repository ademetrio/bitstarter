
var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

var name = fs.readFileSync('index.html');

var len = name.toString();

app.get('/', function(request, response) {
  response.send(len);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
