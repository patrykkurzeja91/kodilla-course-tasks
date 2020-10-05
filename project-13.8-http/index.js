var http = require("http");
var fs = require('fs');


var server = http.createServer();
server.on("request", function(req, res) {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    if (req.url === "/") {
      fs.readFile("./cloud/index.html", function(err, data) {
        if (err) throw err;
        res.write(data);
        res.end();
      });
    } else {
      fs.readFile("./cloud/error.jpg", function(err, img){
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "image/png" });
        res.write(img, "binary");
        res.end();      
      });
  
    }
  });
server.listen(9000);