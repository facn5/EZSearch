const http = require('http');
const router = require('./router');

const server = http.createServer(router);

server.listen(3000, () => {
    console.log("SERVER IS UP");
});