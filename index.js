var spdyProxy = require('./server.js').createServer;
var path = require('path');
var fs = require('fs');
var nconf = require('nconf');

// arguments confg -> environments conf -> config/config.json -> defaults
nconf.argv()

.env()

.file({ file: path.join(__dirname, 'config.json')  });

// setup defaults
nconf.defaults({
    port: 443
});

var opt = {
    key: fs.readFileSync(nconf.get("keypath")),
    cert: fs.readFileSync(nconf.get("certpath")),
    port: 443
};

var proxy = spdyProxy(opt);
var proxySetup = require('proxy');

var spdy = require('spdy');
var server = spdy.createServer(opt);

var Agent = require('agentkeepalive');

var keepaliveAgent = new Agent({
  maxSockets: 100,
  maxFreeSockets: 10,
  timeout: 60000,
  keepAliveTimeout: 30000 // free socket keepalive for 30 seconds
});

server.agent = keepaliveAgent;

var spdyServer = proxySetup(server);

spdyServer.listen(443, function () {
    var port = server.address().port;
    console.log('HTTP(s) proxy server listening on port %d', port);
});
