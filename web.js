
var express = require('express');

var app = express.createServer(express.logger());

var buffer = new Buffer(64);

var name = fs.readFileSync('index.html');

var len = buffer.write(name);
var mess = len.toString();

app.get('/', function(request, response) {
  response.send(mess);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
