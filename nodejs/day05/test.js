
//1.get和post请求
const express=require('express');
const fs=require('fs');
const querystring=require('querystring');
var app=express();
app.listen(3000,()=>{});
/*
//路由：请求注册页面
//请求的方法：get，请求的url：/reg，请求文件/reg.html
app.get('/reg',(req,res)=>{
	res.sendFile(__dirname+'/reg.html');
});

//请求注册的路由
app.post('/myreg',(req,res)=>{
//如果有请求的数据，发送给服务器端
	//事件
	req.on('data',(buf)=>{
		var str=buf.toString();
		var obj=querystring.parse(str);
		res.send(obj.uname+'注册成功');
	});
});

//练习：创建路由，请求的方法：get，请求的url：/myreg2；获取请求的数据
app.get('/myreg2',(req,res)=>{
	res.send(req.query.uname+'注册成功')
});



//2.路由传参
//请求的url：/detail，请求方法：get
//路由传递参数：通过url中设置要接收的名称，以冒号开头的形式
app.get('/detail/:lid/:uname',(req,res)=>{
	console.log(req.params);
	res.send(req.params);
});



//练习：创建购物车路由，请求的url：/shopping，请求的方法：get，传递商品的价格（price）和商品的名称（pname）；响应'商品的价格为**，名称为**'
app.get('/shopping/:price/:pname',(req,res)=>{
	res.send('商品的价格为'+req.params.price+'，名称为'+req.params.pname);
});


//3.中间件
//拦截所有函数
app.use((req,res,next)=>{
	console.log('前置中间件');
	next();
});

//练习：使用中间件‘查看权限’
app.use((req,res,next)=>{
	console.log('查看权限');
	next();
});

app.get('/login',(req,res,next)=>{
	res.send('欢迎登陆');
	next();
});

app.use((req,res,next)=>{
	console.log('后置中间件');
});


//拦截特定路由----拦截/list
app.use('/list',(req,res,next)=>{
	console.log('商品前置中间件列表');
	next();
});

app.get('/list',(req,res,next)=>{
	res.send('商品列表');
	next();
});

app.use('/list',(req,res,next)=>{
	console.log('商品后置中间件列表');
});


//练习：创建路由，请求方法：get，url：/detail，响应‘商品详情’，添加前置和后置中间件
app.use('/detail',(req,res,next)=>{
	console.log('前置');
	next();
});

app.get('/detail',(req,res,next)=>{
	res.send('商品详情');
	next();
});

app.use('/detail',(req,res,next)=>{
	console.log('后置');
});
*/

/*
练习：创建路由（/view，get）响应当前的浏览次数，每次请求，所响应的次数要加1
思路：初始化一个全局变量0，中间件变量+1，在路由中响应这个变量；在文件中记录浏览次数，每次登陆从文件中读取次数

var n=0;
app.use('/view',(req,res,next)=>{
	n++;
	next();
});
app.get('/view',(req,res,next)=>{
	
	var filename='num.txt';
	//如果num.txt不存在，创建并写入0
	if (!fs.existsSync(filename))
	{
		fs.writeFileSync(filename,0);
	}
	//读取num.txt中的内容
	var n=fs.readFileSync(filename).toString();
	//将读取的内容转为数值型，并+1
	n++;
	//console.log(n);
	//向num.txt文件中写入n
	fs.writeFileSync(filename,n);
	console.log(n);
	res.send(n.toString());
});
*/

//练习：托管到files目录下，如果files下和public下出现相同名称的文件，显示那个文件？
app.us(express.static('./public'));


















