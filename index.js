var spdyProxy = require('spdyproxy').createServer;
var path = require('path');
var fs = require('fs');

var opt = {
    key: fs.readFileSync(path.resolve('/etc/letsencrypt/live/www.21paradox.com/privkey.pem')),
    cert: fs.readFileSync(path.resolve('/etc/letsencrypt/live/www.21paradox.com/cert.pem')),
    port: 443
};

var options = {
    key: fs.readFileSync(path.resolve('/etc/letsencrypt/live/www.21paradox.com/privkey.pem')),
    cert: fs.readFileSync(path.resolve('/etc/letsencrypt/live/www.21paradox.com/cert.pem')),
};

var spdy = require('spdy');

var server = spdy.createServer(options, function (req, res) {
 
  console.log(req);
  res.writeHead(200);
  res.end('hello world!');
});
 
server.listen(443);
