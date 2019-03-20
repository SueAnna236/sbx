//1.创建服务器
const express=require('express');
var app=express();
app.listen(3000);
//2.路由
app.get('/login',(req,res)=>{
	//req请求的对象
	//获取请求的方法
	console.log(req.method);
	//获取请求的url
	console.log(req.url);
	//获取请求的头信息
	//console.log(req.headers);
	//获取url中的查询字符串，格式为对象
	console.log(req.query);
});

//
app.get('/admin',(req,res)=>{
	//响应：文本、跳转、文件
	//(1)响应文本，只能使用一次，调用完send后，就表示响应已经结束，无法再次响应
	//如果响应的文本是数字，就会被认为是状态码；使用的时候需要加引号
	//res.send('1');
	//(2)响应文件
	//__dirname 绝对路径
	//__filename 绝对路径+文件名称
	//console.log(__dirname);
	//res.sendFile(__dirname+'/admin.html');
	//(3)跳转----响应的重定向
	res.redirect('http://www.tmooc.cn/');
	
});
