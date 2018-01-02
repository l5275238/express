var route=require('express').Router();

route.use(function(err, req, res, next) {
  res.json({
    message: "失败了",
    status: 0,
    success: false,
    erro:err.stack
  })
});
module.exports = route;