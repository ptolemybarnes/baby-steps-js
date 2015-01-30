var time = new Date();
var net  = require("net");

function pad(num) {
  return (num < 10 ? "0" : "") + num;
}

function getTime() {
  return time.getFullYear() + "-"
  + pad(time.getMonth() +1)    + "-"
  + pad(time.getDate())     + " "
  + pad(time.getHours())    + ":"
  + pad(time.getMinutes()) + '\n';
}

function timeServer(port) {
  var server = net.createServer(function callback(socket){
    socket.end(getTime());
  });

  server.listen(port);
}

timeServer(process.argv[2]);