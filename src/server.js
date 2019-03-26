const http = require('http');

const router = (req, res) => {
    const url = req.url;
    if (url === '/'){
        res.writeHead(200);
        res.end("Hello");
    }else {
        res.writeHead(404);
        res.end("Not Found");
    }
}

const server = http.createServer(router);

server.listen(3000, () => {
    console.log("SERVER IS UP");
});