//练习：创建用户模块路由器（user.js），添加用户列表（list）、删除（delete）、更改（update），在服务器中挂载到user下。
const express=require('express');
var router=express.Router();

router.get('/list',(req,res)=>{
	res.send('用户列表');
});

router.get('/delete',(req,res)=>{
	res.send('用户删除列表');
});

router.get('/update',(req,res)=>{
	res.send('用户修改列表');
});

module.exports=router;
