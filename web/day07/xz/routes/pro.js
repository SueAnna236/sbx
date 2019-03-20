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
		//console.log(result);
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
router.get('/deleteuser',(req,res)=>{
	var obj=req.query;
	var $uid=obj.uid;
	if (!$uid)
	{
		res.send("uid不能为空");
		return;
	}
	pool.query('DELETE FROM xz_user WHERE uid=?',[$uid],(err,result)=>{
		if (err)
		{
			throw err;
		}
		if (result.affectedRows>0)
		{
			res.send("1");
		}else{
			res.send("0");
		}
	});
});

//用户检索userquery
router.get('/userquery',(req,res)=>{
	var obj=req.query;
	var $uid=obj.uid;
	if (!$uid)
	{
		res.send("uid不存在");
		return;
	}
	pool.query('SELECT * FROM xz_user WHERE uid=?',[$uid],(err,result)=>{
		if (err)
		{
			throw err;
		}
		//console.log(result);
		if (result.length>0)
		{
			res.send(result);
		}else{
			res.send("0");
		}
	});
});


//修改用户
router.post('/updateuser',(req,res)=>{
	var obj=req.body;
	var $uid=obj.uid;
	var $uname=obj.uname;
	var $email=obj.email;
	var $phone=obj.phone;
	var $user_name=obj.user_name;
	var $gender=obj.gender;
	if (!$uid)
	{
		res.send("用户id不存在");
		return;
	}
	if (!$uname)
	{
		res.send("登录名称不存在");
		return;
	}
	if (!$email)
	{
		res.send("电子邮箱不存在");
		return;
	}
	if (!$phone)
	{
		res.send("联系方式不存在");
		return;
	}
	if (!$user_name)
	{
		res.send("真实姓名不存在");
		return;
	}
	if (!$gender)
	{
		res.send("用户性别不存在");
		return;
	}
	pool.query('UPDATE xz_user SET uname=?,email=?,phone=?,user_name=?,gender=? WHERE uid=?',[$uname,$email,$phone,$user_name,$gender,$uid],(err,result)=>{
		if (err)
		{
			throw err;
		}
		res.send("1");
	});
});
/*
//验证用户名是否存在
router.get('/checkUname',(req,res)=>{
	var obj=req.query;
	var $uname=obj.uname;
	console.log(obj.uname);
	if (!$uname)
	{
		res.send("用户名不能为空");
		return;
	}
	pool.query('SELECT uname FROM xz_user WHERE uname=?',[$uname],(err,result)=>{
		if (err)
		{
			throw err;
		}
		console.log(result);
		
		if (result.length>0)
		{
			res.send("0");
		}else{
			res.send("1");
		}
	});
});
*/
//验证用户名是否存在
router.post('/checkUname',(req,res)=>{
	var obj=req.body;
	var $uname=obj.uname;
	console.log(obj.uname);
	if (!$uname)
	{
		res.send("用户名不能为空");
		return;
	}
	pool.query('SELECT uname FROM xz_user WHERE uname=?',[$uname],(err,result)=>{
		if (err)
		{
			throw err;
		}
		console.log(result);
		
		if (result.length>0)
		{
			res.send("0");
		}else{
			res.send("1");
		}
	});
});

//验证邮箱
router.get('/checkEmail',(req,res)=>{
	var obj=req.query;
	var $email=obj.email;
	//console.log($email);
	if (!$email)
	{
		res.send("用户邮箱不能为空");
		return;
	}
	pool.query('SELECT email FROM xz_user WHERE email=?',[$email],(err,result)=>{
		if (err)
		{
			throw err;
		}
		//console.log(result);
		if (result.length>0)
		{
			res.send("0");
		}else{
			res.send("1");
		}
	});
});

//验证联系方式
router.post('/checkPhone',(req,res)=>{
	var obj=req.body;
	var $phone=obj.phone;
	//console.log($phone);
	if (!$phone)
	{
		res.send("联系方式不能为空");
		return;
	}
	pool.query('SELECT phone FROM xz_user WHERE phone=?',[$phone],(err,result)=>{
		if (err)
		{
			throw err;
		}
		//console.log(result);
		if (result.length>0)
		{
			res.send("0");
		}else{
			res.send("1");
		}
	});
});

//注册用户
router.post('/register',(req,res)=>{
	var obj=req.body;
	//var $uid=obj.uid;
	var $uname=obj.uname;
	var $upwd=obj.upwd;
	var $email=obj.email;
	var $phone=obj.phone;
	var $user_name=obj.user_name;
	var $gender=obj.gender;
	if (!$uname)
	{
		res.send("登录名称不存在");
		return;
	}
	if (!$upwd)
	{
		res.send("用户密码不存在");
		return;
	}
	if (!$email)
	{
		res.send("电子邮箱不存在");
		return;
	}
	if (!$phone)
	{
		res.send("联系方式不存在");
		return;
	}
	if (!$user_name)
	{
		res.send("真实姓名不存在");
		return;
	}
	if (!$gender)
	{
		res.send("用户性别不存在");
		return;
	}
	pool.query('INSERT INTO xz_user VALUES(NULL,?,?,?,?,NULL,?,?)',[$uname,$upwd,$email,$phone,$user_name,$gender],(err,result)=>{
		if (err)
		{
			throw err;
		}
		//console.log(result[uname])
	
		res.send("1");
	});
});


module.exports=router;