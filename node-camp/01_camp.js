// Basic node piping. https://gist.github.com/ptolemybarnes/eda4e417396151a350f9

var fs = require('fs')

var source      = fs.createReadStream('./poem.txt');
var destination = fs.createWriteStream('./destination.txt');

source.pipe(destination);

// KATA: Pipe A ==> B ==> C.