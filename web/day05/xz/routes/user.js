const pool=require('../pool.js');

const express=require('express');
var router=express.Router();



//添加路由
//用户注册
router.post('/register',(req,res)=>{
	var obj=req.body;
	var $uname=obj.uname;
	var $upwd=obj.upwd;
	var $phone=obj.phone;
	var $email=obj.email;
	if (!$uname)
	{
		res.send({code:401,msg:'uname required'});
		return;
	}
	if (!$upwd)
	{
		res.send({code:402,msg:'upwd required'});
		return;
	}
	if (!$email)
	{
		res.send({code:403,msg:'email required'});
		return;
	}
	if (!$phone)
	{
		res.send({code:404,msg:'phone required'});
		return;
	}
	pool.query('INSERT INTO xz_user VALUES(NULL,?,?,?,?,NULL,NULL,NULL)',[$uname,$upwd,$email,$phone],(err,result)=>{
		if (err)
		{
			throw err;
		}
		//console.log(result);
		if (result.affectedRows>0)
		{
			res.send({code:200,msg:'reg success'});
		}
	});
});

//用户登录
router.post('/login',(req,res)=>{
	var obj=req.body;
	var $uname=obj.uname;
	if (!$uname)
	{
		res.send({code:401,msg:'uname required'});
		return;
	}
	var $upwd=obj.upwd;
	if (!$upwd)
	{
		res.send({code:402,msg:'upwd required'});
	}
	pool.query('SELECT * FROM xz_user WHERE uname=? AND upwd=?',[$uname,$upwd],(err,result)=>{
		if (err)
		{
			throw err;
		}
		if (result.length>0)
		{
			res.send({code:200,msg:'login success'});
		}else{
			res.send({code:300,msg:'login error'});
		}
		console.log(result);
	});
});

module.exports=router;