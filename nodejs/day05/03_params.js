
//路由传递

const express=require('express');
var app=express();
app.listen(3000,()=>{});

//路由
//请求的url：/detail，请求方法：get
//路由传递参数：通过url中设置要接收的名称，以冒号开头的形式
app.get('/detail/:lid/:name',(req,res)=>{
	//获取路由传参的数据
	console.log(req.params);
	res.send('这是商品详情');
});

//练习：创建购物车路由，请求的url：/shopping，请求的方法：get，传递商品的价格（price）和商品的名称（pname）；响应'商品的价格为**，名称为**'
app.get('/shopping/:price/:pname',(req,res)=>{
	console.log(`商品的价格为${req.params.price},名称为${req.params.pname}。`);
	res.send('商品的价格为'+req.params.price+',名称为'+req.params.pname);
});















