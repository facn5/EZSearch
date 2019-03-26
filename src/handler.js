const path = require('path');
const fs = require('fs');

const handleHome = (res) => {
    let filePath = path.join(__dirname,'..','public','index.html');
        fs.readFile(filePath,(err, file)=>{
            if(err){
                res.writeHead(500);
                res.end("500 error");
            }else {
                res.writeHead(200,{'Content-Type': 'text/html'});
                res.end(file);
            }
        }); 
}

module.exports = {
    handleHome: handleHome
}