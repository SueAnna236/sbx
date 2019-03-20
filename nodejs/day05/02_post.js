
const querystring=require('querystring');
const express=require('express');
var app=express();
app.listen(3000,()=>{});

//路由：请求注册页面
//请求的方法：get，请求的url：/reg
app.get('/reg',(req,res)=>{
	res.sendFile(__dirname+'/reg.html');
});

//请求注册的路由
app.post('/myreg',(req,res)=>{
	//res.send('注册成功');
	//如果有请求的数据，发送给服务器端
	//事件
	req.on('data',(buf)=>{
		console.log(buf.toString());	
		//将浏览器传递的数据解析成对象
		//响应浏览器 ***注册成功
		var str=buf.toString();
		var obj=querystring.parse(str);
		//console.log(obj);
		//console.log(`${obj.uname}注册成功`);
		res.send(obj.uname+'注册成功');
	});
});

//练习：创建路由，请求的方法：get，请求的url：/myreg2；获取请求的数据
app.get('/myreg2',(req,res)=>{
	console.log(req.query);
	res.send('get请求成功，请求的数据为'+req.query.uname+'注册成功');
});
