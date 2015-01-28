var dirFilterer = require('./05_module.js');

function printer(err, fileNames) {
  for(var i = 0; i < fileNames.length; i ++) {
    console.log(fileNames[i]);
  }
};

dirFilterer(process.argv[2], process.argv[3], printer);