var fs = require('fs')
 
var source      = fs.createReadStream('sonnet.txt');
var destination = fs.createWriteStream('destination.txt');
var secondDestination = fs.createWriteStream('secondDestination.txt')
 
source.pipe(destination).pipe(secondDestination);