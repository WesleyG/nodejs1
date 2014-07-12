/* Node.js module child_process. Exec() executes
a shell command from within Node.js. */ 
var exec = require("child_process").exec;

function start(response) {
  console.log("Request handler 'start' was called.");

  // get list of files from dir
  exec("ls -lah", function (error, stdout, stderr) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(stdout);
    response.end();
  });
}

function upload(response) {
	console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Upload");
  response.end();
}

exports.start = start;
exports.upload = upload;