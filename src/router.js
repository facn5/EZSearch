var handlers = require("./handler.js");

const router = (req, res) => {
  var url = req.url;
  if (url === "/") {
    handlers.index(res);
  } else if (url.includes("public")) {
    handlers.assets(url, res);
  } else if (url.includes("/search?q=")) {
    handlers.search(url, res);
  } else {
    handlers.error(res);
  }
};

module.exports = router;
