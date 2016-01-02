var url = require('url');


var n = url.parse('//wujieliulan.com/mnews.htm');


 
var parse = require('url-parse');

var parsed = parse('//wujieliulan.com/mnews.htm');

console.log(parsed);
 
console.log(parsed.get('port'));