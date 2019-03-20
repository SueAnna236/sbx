const pool=require('../pool.js');

const express=require('express');
var router=express.Router();

//1.ajaxDemo接口
router.get('/ajaxDemo',(req,res)=>{
	res.send('我的第一个ajax程序');
});

//2.login 接收参数
router.get('/login',(req,res)=>{
	//获取用户名称
	var $uname=req.query.uname;
	//获取用户密码
	var $upwd=req.query.upwd;
	//验证用户名和密码存在
	if (!$uname)
	{
		res.send("用户名不存在");
		return;
	}
	if (!$upwd)
	{
		res.send("密码不存在");
		return;
	}
	//res.send("用户名为："+$uname+"密码为："+$upwd);
	//将用户和密码作为参数去数据库查询
	pool.query('SELECT * FROM xz_user WHERE uname=? AND upwd=?',[$uname,$upwd],(err,result)=>{
		if (err)
		{
			throw err;
		}
		if (result.length>0)
		{
			res.send("登录成功");
		}else{
			res.send("登录失败");
		}
	});
});

//3.userlist
router.get('/userlist',(req,res)=>{
	//var obj=req.query;
	//console.log(obj);
	pool.query('SELECT * FROM xz_user',(err,result)=>{
		if (err)
		{
			throw err;
		}
		console.log(result);
		res.send(result);
	});
});

//register
router.get('/register',(req,res)=>{
	var obj=req.query;
	var $uname=obj.uname;
	var $upwd=obj.upwd;
	pool.query('SELECT * FROM xz_user',(err,result)=>{
	if (err)
	{
		throw err;
	}
	for (var key in result)
	{
		if ($uname==result[key].uname)
		{
			res.send("用户名已被占用");
		}else{
			res.send("用户名可以使用");
		}
	}
	});
});
/*
router.get('/register',(req,res)=>{
	var obj=req.query;
	var $uname=obj.uname;
	if (!$uname)
	{
		res.send("用户名不能为空");
		return;
	}
	var $upwd=obj.upwd;
	if (!$upwd)
	{
		res.send("密码不能为空");
		return;
	}
	pool.query('INSERT INTO xz_user VALUES(NULL,?,?,NULL,NULL,NULL,NULL,NULL)',[$uname,$upwd],(req,res)=>{
		if (err)
		{
			throw err;
		}
		if (result.affectedRows>0)
		{
			res.send("注册成功");
		}
	});
});
*/

module.exports=router;