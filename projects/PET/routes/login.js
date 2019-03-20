var express=require("express");
var pool=require("../pool.js");
let router=express.Router();

router.get("/",(req,res)=>{
  var $uname=req.query.uname;
  var $upwd=req.query.upwd;
  var sql="SELECT uid FROM pet_user WHERE uname=? and upwd=?";
  pool.query(sql,[$uname,$upwd],(err,result)=>{
    if(err) throw err;
    if(result.length==0){
      res.json({code:-1,msg:"用户名或者密码错误"});
    }else{
      res.json({code:1,msg:"登录成功",name:$uname});
    }
  });
})
module.exports=router;
