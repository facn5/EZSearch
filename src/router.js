const handler = require('./handler');
const path = require('path');
const fs = require('fs');

const router = (req, res) => {
    const url = req.url;
    if (url === '/'){
        handler.homeHandler(res);
    }else if (url.indexOf('public') !== -1){
        handler.publicHandler(res, url);
    }
    else {
        handler.errHandler(res);
    }
}

module.exports = router;

/*
if (url === '/'){
        handler.homeHandler(res);
    }else
 */