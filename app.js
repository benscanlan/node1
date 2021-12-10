const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
var i = 0;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  i = i+1;
  console.log(i);
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log("1");
});
