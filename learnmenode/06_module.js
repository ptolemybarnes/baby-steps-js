var fs   = require('fs');
var path = require('path');

function dirFilterer(dirName, ext, printer){

  fs.readdir(dirName, function(err, data){
    if (err) { return printer(err) }

    var filteredData = data.filter( function(datum) {
      return path.extname(datum) == ("." + ext);
    });

    return printer(null, filteredData);
  });
};

module.exports = dirFilterer;