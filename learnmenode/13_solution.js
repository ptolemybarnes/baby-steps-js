var http = require('http')
var url  = require('url');

var requestListener = function(req, res) {
  res.writeHead(200);
  var parsedUrl = url.parse(req.url);
  console.log(parsedUrl);
  var timeArray = parsedUrl.query.match(/T(.*)[.]/)[1].split(":");
  var time = {
    "hour"  : parseInt(timeArray[0]),
    "minute": parseInt(timeArray[1]),
    "second": parseInt(timeArray[2])
  }
  res.end(JSON.stringify(time));
}

var server = http.createServer(requestListener);

server.listen(process.argv[2]);

