var spdyProxy = require('./server.js').createServer;
var path = require('path');
var fs = require('fs');

var opt = {
    key: fs.readFileSync(path.resolve('/etc/letsencrypt/live/www.21paradox.com/privkey.pem')),
    cert: fs.readFileSync(path.resolve('/etc/letsencrypt/live/www.21paradox.com/cert.pem')),
    port: 443
};

var proxy = spdyProxy(opt);


var setup = require('proxy');
//var server = setup(http.createServer());


// var spdy = require('spdy');
// var server = spdy.createServer(opt);

// var server1 = setup(server);

// server1.listen(443, function () {
//     var port = server.address().port;
//     console.log('HTTP(s) proxy server listening on port %d', port);
// });


proxy.listen(443);