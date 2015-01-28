var http = require('http');
var bl   = require('bl');

function getUrlManyContents(url) {

  http.get(url, function(response) {
    response.pipe(bl(function(err, data) { 
    
      console.log(data.toString().length); 
      console.log(data.toString());
    }))
  });
}

getUrlManyContents(process.argv[2]);