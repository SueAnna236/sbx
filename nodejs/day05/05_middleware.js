const express=require('express');
var app=express();
app.listen(3000,()=>{});
//登陆成功之前需要对用户进行验证----中间件，我登录路由服务的
//在中间件中一样有请求和响应两个对象
app.use((req,res,next)=>{
	console.log('执行了验证');
	//next表示执行下一个中间件或者主业务逻辑
	next();
});
//练习：使用中间件‘查看权限’
app.use((req,res,next)=>{
	console.log('查看权限');
	next();
});

//路由
app.get('/login',(req,res,next)=>{
	res.send('登录成功');
	next();
});
//练习：使用中间件‘记录日志’
app.use((req,res,next)=>{
	console.log('记录日志');
	next();
});





















