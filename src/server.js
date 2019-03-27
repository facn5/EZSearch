var http = require("http");
var router = require("./router");

var server = http.createServer(router);
var port = process.env.PORT || 3030;

server.listen(port, function() {
  console.log("Listening to port: " + port);
});
