var fs   = require('fs');
var http = require('http');

function serveText(filePath, port) {
  var stream = fs.createReadStream(filePath); // here or on line 9?

  var server = http.createServer(function(req, res) {
    stream.pipe(res);
  });

  server.listen(port);
};

serveText(process.argv[3], process.argv[2]);