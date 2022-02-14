const url = require('url');
const http = require('http');

const server = http.createServer((req,res) => {
  let urlStr = req.url;
  let urlObj = url.parse(urlStr,true);
  switch(urlObj.pathname){
    case '/api/data':
      res.writeHead(200,{
        'content-type': 'application/json',
        'Access-Control-Allow-Origin':'*'
      })
      res.write('{"res":true,"data":"hello"}');
      break;
    default:
      res.write('page not found')
  }
  res.end();
})

server.listen(9000,() => {
  console.log('localhost:9000  listen');
})