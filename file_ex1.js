// Having a file named a.txt, print the size of that files in bytes.

var fs = require('fs');


fs.stat('./tmp/' + 'test123.txt', function(err, stats) {
  if (err) {throw err; }
    console.log(stats.size);
    //console.log('this file is ' + stats.size + ' bytes long.');
});