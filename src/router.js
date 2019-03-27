var handlers = require("./handler.js");

function router(req, res) {
  var url = req.url;
  if (url === "/") {
    handlers.index(res);
  } else if (url.indexOf("/search?q=") === 0) {
    handlers.search(url, res);
  } else {
    handlers.assets(url, res);
  }
}

module.exports = router;
