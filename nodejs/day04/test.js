/*
//1.http模块
//引入http模块
const http=require('http');
//模拟客户端浏览器
http.get('http://www.tmooc.cn/search/index.shtml',(res)=>{
	console.log(res.statusCode);//200
	res.on('data',(buf)=>{
		console.log(buf.toString());//整个页面
	});
});


//练习：使用http模块向tmooc首页发送请求，打印请求的状态码和数据http://www.tmooc.cn
const http=require('http');
http.get('http://www.tmooc.cn',(res)=>{
	console.log(res.statusCode);
	res.on('data',(buf)=>{
		console.log(buf.toString());
	});
});


//练习：请求中国气象网的数据http://www.weather.com.cn/data/sk/101010100.html
const http=require('http');
http.get('http://www.weather.com.cn/data/sk/101010100.html',(res)=>{
	console.log(res.statusCode);
	res.on('data',(buf)=>{
		console.log(buf.toString());
	});
});


//创建web服务器
const http=require('http');
var server=http.createServer();
server.listen(3005,()=>{
	console.log('服务器创建成功');
});
server.on('request',(req,res)=>{
	console.log('请求发生');
	console.log(req.url);
	console.log(req.method);
	console.log(req.headers);
});


//练习：使用http模块创建web服务器，端口为3001，使用事件获取客户端请求，打印请求的方法、url、头信息。
//http://127.0.0.1:3001/admin/login.html，
//http://127.0.0.1:3001/member/shopping.html
const http=require('http');
var server=http.createServer();
server.listen(3001,()=>{
	console.log('创建成功');
});
server.on('request',(req,res)=>{
	console.log(req.method);
	console.log(req.url);
	console.log(req.headers);
});


const http=require('http');
var server=http.createServer();
server.listen(3001,()=>{
	console.log('创建成功');
});
server.on('request',(req,res)=>{
	res.writeHead(302,{
		Location:'http://www.tmooc.cn'
	});
	res.write('hello world!');
	res.end();
});


//练习：创建web服务器，监听3000端口，接受浏览器的请求，打印请求的路径，响应的文本是请求的路径
const http=require('http');
var server=http.createServer();
server.listen(3000,()=>{
	console.log('创建成功');
});
server.on('request',(req,res)=>{
	console.log(req.url);
	var url=req.url;
	res.write(url);
	res.end();
});
*/
/*
如果请求的url是/member，响应‘this is member page’；
如果请求的url是/admin，响应‘welcome to admin page’；
请求的url是/login，响应’please login‘；
请求url是/student，跳转到学子商城；
如果请求的url是/，跳转到/login；
如果请求的以上的url都没有，响应’404 not found‘

const http=require('http');
var server=http.createServer();
server.listen(3000,()=>{
	console.log('创建成功');
});
server.on('request',(req,res)=>{
	var url=req.url;
	switch (url)
	{
	case '/member' :
		res.write('this is member page');
		break;
	case '/admin' :
		res.write('welcome to admin page');
		break;
	case '/login' :
		res.write('please login');
		break;
	case '/student' :
		res.writeHead(302,{Location:'http://www.tmooc.cn'});
		break;
	case '/' :
		res.writeHead(302,{Location:'/login'});
		break;
	default :
		res.write('404 not found');
	}
	res.end();
});


//2.express框架
//引入框架
const express=require('express');
//创建服务器
var app=express();
app.listen(3002,()=>{
	console.log('创建成功');
});
app.get('/login',(req,res)=>{
	console.log('这是登录页面');
	res.end();
});


const express=require('express');
var app=express();
app.listen(3002,()=>{
	console.log('创建成功');
});
app.get('/login',(req,res)=>{
	console.log(req.method);
	console.log(req.url);
	console.log(req.headers);
	console.log(req.query);
	res.end();
});


//练习：创建路由，请求的方法是get，请求的url是/reg，响应的内容，打印’这是注册页面‘
const express=require('express');
var app=express();
app.listen(3002,()=>{
	console.log('创建成功');
});
app.get('/reg',(req,res)=>{
	res.send('这是注册页面');
});


const express=require('express');
var app=express();
app.listen(3004,()=>{
	console.log('创建成功');
});

app.get('/admin',(req,res)=>{
	res.send('1');
});

app.get('/login',(req,res)=>{
	res.sendFile(__dirname+'/login.html');
});

app.get('/member',(req,res)=>{
	res.redirect('http://www.tmooc.cn/');
});
*/

/*
使用express创建web服务器，创建以下路由
get ‘/index’ 发送文本‘这是首页’
get ‘/login’ 发送文件‘login.html’
get ‘/’ 跳转到‘/index’
get ‘/student’ 跳到 学子商城
*/
const express=require('express');
var app=express();
app.listen(3006,()=>{
	console.log('创建成功');
});

app.get('/index',(req,res)=>{
	res.send('这是首页');
});

app.get('/login',(req,res)=>{
	res.sendFile(__dirname+'/login.html');
});

app.get('/',(req,res)=>{
	res.redirect('/login');
});

app.get('/student',(req,res)=>{
	res.redirect('http://www.tmooc.cn/');
});








