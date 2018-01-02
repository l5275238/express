var callBack=function (rows,res) {

   var  obj={
      message: "成功",
      status: 999,
      success: false,
      data:rows
    }
  res.json(obj)
}




module.exports=callBack;
