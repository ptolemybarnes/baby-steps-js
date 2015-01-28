var http = require('http');

function getUrlContents(url) {
  http.get(url, function callback(response) {
    response.on("data", function(data) {
      console.log(data.toString());
    });
  });
};

getUrlContents(process.argv[2]);