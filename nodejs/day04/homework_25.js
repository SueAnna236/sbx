/*
使用express创建web服务器，创建以下路由
get ‘/index’ 发送文本‘这是首页’
get ‘/login’ 发送文件‘login.html’
get ‘/’ 跳转到‘/index’
get ‘/student’ 跳到 学子商城
*/
const express=require('express');
var app=express();
app.listen(3005);

app.get('/index',(req,res)=>{
	res.send('这是首页');
});

app.get('/login',(req,res)=>{
	res.sendFile(__dirname+'/login.html');
});

app.get('/',(req,res)=>{
	res.redirect('/index');
});

app.get('/student',(req,res)=>{
	res.redirect('http://www.tmooc.cn');
});

