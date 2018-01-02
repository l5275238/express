var data=require('../json/data.json')
class Api {
  constructor(){

}
  getDetai(){
    return data;
  }

}
module.exports =new Api();