var http = require('http');
var map  = require('through2-map');
port = process.argv[2];


function HTTPUpperCaserer(port) {
  http.createServer(function(req, res) {
    
    req.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(res);

  }).listen(port);
}

HTTPUpperCaserer(port);