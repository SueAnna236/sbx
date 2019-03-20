
const express=require('express');

var app=express();
app.listen(3000,()=>{});

//前置中间件
//只能拦截/list路由
app.use('/list',(req,res,next)=>{
	console.log('商品列表的前置中间件');
	next();
});

//路由
app.get('/list',(req,res,next)=>{
	res.send('这是商品列表');
	next();
});

//后置中间件
app.use('/list',(req,res,next)=>{
	console.log('商品列表的后置中间件');
});

//练习：创建路，请求方法：get，url：/detail，响应‘商品详情’，添加前置和后置中间件
app.use('/detail',(req,res,next)=>{
	console.log('前');
	next()
});
app.get('/detail',(req,res,next)=>{
	res.send('商品详情');
	next();
});
app.use('/detail',(req,res,next)=>{
	console.log('后');
	next();
});

/*
练习：创建路由（/view，get）响应当前的浏览次数，每次请求，所响应的次数要加1
思路：初始化一个全局变量0，中间件变量+1，在路由中响应这个变量
*/
var num=0;
app.use('/view',(req,res,next)=>{
	num++;
	next();
});
app.get('/view',(req,res,next)=>{
	console.log(num);
	res.send(num.toString());
	next();
});
