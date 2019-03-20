const pool=require('../pool.js');

const express=require('express');
var router=express.Router();

//1.ajaxDemo接口
router.get('/ajaxDemo',(req,res)=>{
	res.send('我的第一个ajax程序');
});



module.exports=router;