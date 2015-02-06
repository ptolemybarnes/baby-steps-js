var through = require('through');

var through = require('through');

var tr = through(write, end);

tr.write('');
tr.end();

function write (buf) { console.log(buf.toString().toUpperCase()) }

(process.stdin).pipe(tr).pipe(process.stdout);

function end () { console.log('__END__') }
