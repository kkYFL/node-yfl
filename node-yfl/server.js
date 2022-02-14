const http = require('http');
const server = http.createServer((request,response) => {
  let url = request.url;
  response.write(url);
  response.end();
})
server.listen(3000,'localhost',() => {
  console.log('locolhost:3000')
})

// const myChunk = require('./index.js');

// console.log(myChunk(['1','2','3','4']));

