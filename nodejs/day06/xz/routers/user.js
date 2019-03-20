//引入连接池对象	../上一级
const pool=require('../pool.js');
const express=require('express');
//路由器是express下的功能
//创建一个空的路由器
var router=express.Router()
//添加路由
router.post('/register',(req,res)=>{
	var obj=req.body
	console.log(req.body);
	//获取用户名，判断用户名是否为空
	var $uname=obj.uname
	if (!$uname)//如果用户名为空
	{
		res.send({code:401,msg:'uname required'});
		return; //阻止函数中程序继续往后执行
	}
	var $upwd=obj.upwd;
	if (!$upwd)
	{
		res.send({code:402,msg:'upwd required'});
		return; 
	}
	var $email=obj.email;
	if (!$email)
	{
		res.send({code:403,msg:'email required'});
		return; 
	}
	var $phone=obj.phone;
	if (!$phone)
	{
		res.send({code:404,msg:'phone required'});
		return;
	}
	//验证通过，将用户的数据插入到数据表中
	pool.query('INSERT INTO xz_user VALUES(NULL,?,?,?,?,NULL,NULL,NULL)',[$uname,$upwd,$email,$phone],(err,result)=>{
		if (err)
		{
			throw err;
		}
		console.log(result);
		//如果affectedRows属性大于0，数据插入成功
		if (result.affectedRows>0)
		{
			res.send({code:200,msg:'reg sucess'});
		}
	});

	//if ((!!$uname)&&(!!$upwd)&&(!!$email)&&(!!$phone))
	//{
		//res.send('注册成功');
	//}	
});
//导出路由器
module.exports=router;
