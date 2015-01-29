var http = require('http');
var bl   = require('bl');
var outputs = [];
var count   = 0;

function printResults () {
  for(var i = 0; i < 3; i++) {
    console.log(outputs[i]);
  }
}

function httpGet(i) {
  http.get(process.argv[(i + 2)], function(response){
    response.pipe(bl(function(err, data) {
      outputs[i] = data.toString();
      count++ 

      if (count == 3) {
        printResults();
      }
    }))
  })
}

for(var i = 0; i < 3; i++ ) {
  httpGet(i);
}