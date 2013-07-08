
var express = require('express');

var app = express.createServer(express.logger());

var buffer = new Buffer(256);

var file = fs.readFileSync('index.html');

var lit = buffer.write(file); 

var string = lit.toString();

app.get('/', function(request, response) {
  response.send('string');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
