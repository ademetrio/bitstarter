var express = require('express');

var app = express.createServer(express.logger());

var name = fs.readFileSync('index.html');

var buffer = buf.toString('name');


app.get('/', function(request, response) {
  response.send('buffer');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
