
///// Challenge 2:

// function isNumber(element) {
//   return Number(element);
// }

// var filtered_for_numbs = process.argv.filter(isNumber);
// var string_to_nums     = filtered_for_nums.map(function(num) {
//   return Number(num);
// });

// var reduced_nums = string_to_nums.reduce(function(a, b) {
//   return a + b;
// });

///// Challenge 3:

// var fs   = require('fs')
// var path = process.argv[2];

// var buf  = fs.readFileSync(path).toString();
// buf = buf.split("\n");
// console.log(buf.length - 1);

///// Challenge 4: 

var fs = require('fs');
var path =  require('path');

function grepFiles(error, data) {
  var filteredList = list.filter( function(arg) { // This callback checks whether the file's ext name matches the given ext name.
    return path.extname(arg) === ("." + process.argv[3]);
  });
  
};

fs.readdir(process.argv[2], grepFiles);






























