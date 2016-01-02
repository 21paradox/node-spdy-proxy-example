var spdyProxy = require('spdyproxy');
var path = require('path');

var opt = {

    key: path.resolve('/etc/letsencrypt/live/www.21paradox.com/privkey.pem'),
    cert: path.resolve('/etc/letsencrypt/live/www.21paradox.com/cert.pem'),
    port: 443

};

spdyProxy(opt);

