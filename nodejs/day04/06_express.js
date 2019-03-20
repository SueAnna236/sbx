//引入express模块
const express=require('express');
//创建服务器
var app=express();
//监听端口
app.listen(3000,()=>{
	console.log('服务器创建成功');
});
/*
//根据浏览器的请求来作出响应
//路由：结合请求的方法和请求的url
//get：向服务器发送请求的方法
//参数1：请求的url
//参数2：服务器获取浏览器的请求并作出响应
app.get('/login',(req,res)=>{
	//req 请求的对象
	//res 响应的对象
	console.log('这是登录的页面');
	res.end();
});


//练习：创建路由，请求的方法是get，请求的url是/reg，响应的内容，打印’这是注册页面‘
app.get('/reg',(req,res)=>{
	console.log('这是注册页面');
	res.end();
});
*/
//练习：创建路由，请求的方法是post，请求的url是/home，响应的内容是打印’登录成功‘
//只有同时满足请求的方法为post，请求的url为/home，路由才会做出响应
app.post('/home',(req,res)=>{
	console.log('登录成功');
	res.end();
});












