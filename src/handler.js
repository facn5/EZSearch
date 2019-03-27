var fs = require("fs");
var wordSearch = require("./search");
var path = require("path");

var extensionType = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    json: "application/json"
  };

function indexHandler(res) {
  var filePath = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(filePath, function(error, file) {
    if (error) {
      console.error(error);
      res.writeHead(500, { "Content-Type": extensionType.html });
      res.end("<h1>sorry, something went wrong</h1>");
    } else {
      res.writeHead(200, { "Content-type": extensionType.html });
      res.write(file);
    }
    res.end();
  });
}

function assetsHandler(url, res) {
  var extension = url.split(".")[1];
  var filePath = path.join(__dirname, "..", "public", url);
  fs.readFile(filePath, function(error, file) {
    if (error) {
      res.writeHead(500, { "Content-Type": extensionType.html });
      res.end("<h1>sorry, something went wrong</h1>");
    } else {
      res.writeHead(200, { "Content-Type": extensionType[extension] });
      res.end(file);
    }
  });
}

function searchHandler(url, res) {
  url = decodeURI(url);
  var queryString = url.split("q=")[1];
  var returnArray = wordSearch(queryString);
  res.writeHead(200, { "Content-Type": extensionType.json });
  res.end(JSON.stringify(returnArray));
}

module.exports = {
  index: indexHandler,
  assets: assetsHandler,
  search: searchHandler
};
