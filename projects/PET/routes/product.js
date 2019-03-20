var express=require("express");
var pool=require("../pool.js");
let router=express.Router();

router.get("/",(req,res)=>{
  var sql="SELECT * FROM pet_product";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.json(result);
  })
});

module.exports=router;