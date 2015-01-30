var net  = require('net');
var date = new Date();

function pad(num) {
  return (num < 10 ? '0' : '') + num; 
}

function now() {
  return(date.getFullYear() 
    + "-" + pad(date.getMonth()+1) 
    + "-" + pad(date.getDate()) 
    + " " + pad(date.getHours()) 
    + ":" + pad(date.getMinutes()));
}

function timeServer(port) {
  var server = net.createServer(function(socket) {
    socket.end(now() + '\n');
  })
  
  server.listen(port)
};

timeServer(process.argv[2]);

