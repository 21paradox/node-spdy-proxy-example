var spdyProxy = require('spdyproxy').createServer;
var path = require('path');
var fs = require('fs');

var opt = {
    key: fs.readFileSync(path.resolve('/etc/letsencrypt/live/www.21paradox.com/privkey.pem')),
    cert: fs.readFileSync(path.resolve('/etc/letsencrypt/live/www.21paradox.com/cert.pem')),
    port: 443
};

var proxy = spdyProxy(opt);

proxy.llisten(443);