var express=require("express");
var pool=require("../pool.js");
let router=express.Router();

router.post("/",(req,res)=>{
  var $uid=req.query.uid;
  var $uname=req.query.uname;
  var $upwd=req.query.upwd;
  
  var sql=" INSERT INTO pet_user(uname, upwd) VALUES (?,?)";
  pool.query(sql,[$uname,$upwd],(err,result)=>{
    if(err) throw err;
    if(result.affectedRow==0){
      res.json({code:-1,msg:"注册失败"});
    }else{
      res.json({code:1,msg:"注册成功"})
    }
  })
})
module.exports=router;