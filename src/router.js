const handler = require('./handler');

const router = (req, res) => {
    const url = req.url;
    if (url === '/'){
        handler.handleHome(res);
    }else {
        res.writeHead(404);
        res.end("Not Found");
    }
}

module.exports = router;