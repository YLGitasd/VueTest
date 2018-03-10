const http = require('http');
const fs =  require('fs');
const url = require('url');

function read(cb) {
  fs.readFile('./hotSale.json','utf8',function (err,data) {
    if(err || data.length == 0){
      cb([]);
    }else {
      cb(JSON.parse(data));
    }
  })
}
//
// read(function (hotSales) {
//   console.log(hotSales);
// })

http.createServer((req,res)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By",' 3.2.1')
  if(req.method=="OPTIONS") return res.end();/*让options请求快速返回*/

const {pathname,query} = url.parse(req.url,true);

if (pathname === '/hotSale'){
  read(function (hotSales) {
    const hotSale = hotSales.reverse();
    res.setHeader('Content-Type','application/json;charset=utf8');
    res.end(JSON.stringify(hotSale));
  });
  return
  }

}).listen(3000);
