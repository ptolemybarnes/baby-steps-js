var http = require('http');
var port = process.argv[2];
var url  = require('url');

function HTTPJSONApiServer(port) {
  http.createServer(function(req, res) {
    var request = url.parse(req.url, true);
    var hours   = request.query.iso;
          console.log(hours);
    
    if(request.url.pathname === '/api/parsetime') {
    }


    console.log(request.query.iso);

  }).listen(port)
};

HTTPJSONApiServer(port);
