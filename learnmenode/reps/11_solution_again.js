var http = require('http');
var fs   = require('fs');

function serveText(filePath, port) {
  var stream = fs.createReadStream(filePath);

  http.createServer(function(req, res) {
    stream.pipe(res);
  }).listen(port)
};

serveText(process.argv[3], process.argv[2])

		
