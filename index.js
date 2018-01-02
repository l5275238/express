var express = require('express');
var route=require('express').Router();
var app = express();
var detail=require('./route/detail');
var file=require('./route/file')
var erro=require('./middleware/erro')
//跨域
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
  else  next();
});
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 200;
//   next(err);
// });

// error handler

app.use(detail)
app.use(file)
app.use(function(err, req, res, next) {
  res.json({
    message: "失败了",
    status: 999,
    success: false,
    erro:err.stack
  })
});
var server=app.listen(3030,function () {
  console.log('成功');
})