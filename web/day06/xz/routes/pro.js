const pool=require('../pool.js');

const express=require('express');
var router=express.Router();



//添加路由
//用户登录 post
router.post('/login',(req,res)=>{
	var obj=req.body;
	var $uname=obj.uname;
	if (!$uname)
	{
		res.send({code:401,msg:'用户不存在'});
		return;
	}
	var $upwd=obj.upwd;
	if (!$upwd)
	{
		res.send({code:402,msg:'密码不存在'});
		return;
	}
	pool.query('SELECT * FROM xz_user WHERE uname=? AND upwd=?',[$uname,$upwd],(err,result)=>{
		if (err)
		{
			throw err;
		}
		console.log(result);
		if (result.length>0)
		{
			res.send("登录成功");
		}else{
			res.send("用户名或密码错误");
		}
	});
});

//查询用户表，并响应给前端
router.get('/list',(req,res)=>{
	pool.query('SELECT * FROM xz_user',(err,result)=>{
		if (err)
		{
			throw err;
		}
		res.send(result);
	});
});

//删除用户
router.get('/list',(req,res)=>{
	/*var obj=req.query;
	console.log(obj);
	var $uid=obj.uid;
	if (!$uid)
	{
		res.send({code:401,msg:'uid 不能为空'});
		return;
	}*/
	pool.query('DELETE FROM xz_user WHERE uid=?',[uid],(err,result)=>{
		if (err)
		{
			throw err;
		}
	console.log(1111);
		if (result.affectedRows>0)
		{
			res.send("删除成功");
		}else{
			res.send("删除出错");
		}
	});
});


/*
//用户注册
router.post('/register',(req,res)=>{
	var obj=req.body;
	pool.query('',(err,result)=>{
		if (err)
		{
			throw err;
		}
	});
});
*/
module.exports=router;