var http = require('http');
var sys  = require("sys");
require('./fizzBuzz')

http.createServer(function(req, res) {
  var output, input;
  sys.puts("I got hit");
  sys.puts(req.url);

  input = req.url;

  if(req.url == '/'){
    output = 'To play FizzBuzz, please append a number to the url. E.g., /10';
  }
  else {
    output = fizzBuzz(parseInt(input.substring(1))) }

  res.writeHead(200, {
  'Content-Length': output.length,
  'Content-Type': 'text/plain' });

  res.end(output);

}).listen(8080);