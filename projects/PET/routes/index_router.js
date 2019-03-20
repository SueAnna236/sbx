const express = require("express");
const router = express.Router();
const pool = require("../pool");

// 一：查询所有宠物
//http://localhost:3000/index
router.get("/",(req,res)=>{
  var sql = " SELECT * FROM pet_product WHERE pid!=0 ORDER BY pid";
  pool.query(sql,[],(err,result)=>{
  if(err){
    throw err;
  }
  res.send(result);
  console.log(result[0]);
  });
});

module.exports=router;
