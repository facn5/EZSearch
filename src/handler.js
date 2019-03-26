const path = require('path');
const fs = require('fs');

const exType = {
    html: { 'Content-Type': 'text/html' },
    css: { 'Content-Type': 'text/css' },
    js: { 'Content-Type': 'application/javascript' }
};

const homeHandler = (res) => {
    let filePath = path.join(__dirname, '..', 'public', 'index.html');
    fs.readFile(filePath, 'utf8', (err, file) => {
        if (err) {
            res.writeHead(500);
            res.end("500 error");
        } else {
            res.writeHead(200, exType.html);
            res.end(file);
        }
    });
}

const publicHandler = (res, url) => {
    let filePath = path.join(__dirname, '..', url);
    let extension = url.split('.')[1];
    fs.readFile(filePath, (err, file) => {
        if (err) {
            res.writeHead(500);
            res.end('500 Error');
        } else {
            res.writeHead(200, exType[extension]);
            res.end(file);
        }
    })
}

const errHandler = (res) => {
    let filePath = path.join(__dirname, '..', 'public', '404.html');
         fs.readFile(filePath, (err, file) => {
        if (err) {
            res.writeHead(500);
            res.end("500 error");
        } else {
            res.writeHead(200, exType.html);
            res.end(file);
        }
    });
}

module.exports = {
    homeHandler: homeHandler,
    publicHandler: publicHandler,
    errHandler: errHandler
}