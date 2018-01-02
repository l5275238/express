var route=require('express').Router();

route.use('/',function (req,res,next){
  console.log(req.url);
  if(req.url=='/login'){
    next()
  }
  else {
    var name=req.headers.authorization;
    console.log(name);
    token.verify(name,req,res,next);
  }


})