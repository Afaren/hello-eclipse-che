/*eslint-env node*/

// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello eclipse/che\n");
});

// Listen on port 9000, IP defaults to 127.0.0.1
var port = 9000;
server.listen(port, () =>{
    console.log(`listen on ${port}`);
});
