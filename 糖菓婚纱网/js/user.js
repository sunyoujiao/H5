const express=require('express');
const pool=require("../../pool");
var router=express.Router();

router.post('/update',function(req,res){
    var obj=req.body;
    //遍历对象中的属性
    var num=400;
    for(var key in obj){
      num++;
      if(!obj[key]){
        res.send({code:num,msg:key+' required'});
        return;
      }
    }
    pool.query('UPDATE xz_user SET email=?,phone=?,user_name=?,gender=? WHERE uid=?',[obj.email,obj.phone,obj.user_name,obj.gender,obj.uid],function(err,result){
      if(err) throw err;
      if(result.affectedRows>0){
        res.send({code:200,msg:'update suc'});
      }else{
        res.send({code:301,msg:'update err'});
      }
    });
  });









module.exports=router;