var route=require('express').Router();
var bodyParser = require('body-parser');
var api=require('../api/detail');
var callBack=require('../callback')
route.use(bodyParser.json({limit: '50mb'}));
route.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

route.post('/detail',function (req,res,next) {
    callBack(api.getDetai(),res)
})

module.exports = route;