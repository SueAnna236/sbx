//练习：创建web服务器，监听3000端口，接受浏览器的请求，打印请求的路径，响应的文本是请求的路径
const http=require('http');
//创建web服务器
var server=http.createServer();
server.listen(3000,()=>{
	console.log('创建成功');
});
//接收浏览器发送的请求
server.on('request',(req,res)=>{
	var url=req.url;
	/*	
	console.log(req.url);
	res.writeHead(302,{
		Location:'http://www.tmooc.cn'
	});
	res.write(url);
	*/
	/*
	如果请求的url是/member，响应‘this is member page’；
	如果请求的url是/admin，响应‘welcome to admin page’；
	请求的url是/login，响应’please login‘；
	请求url是/student，跳转到学子商城；
	如果请求的url是/，跳转到/login；
	如果请求的以上的url都没有，响应’404 not found‘
	*/
	switch (url)
	{
	case '/student':
		res.writeHead(302,{Location:'http://www.tmooc.cn'});
		break;
	case '/member':
		res.write('this is member page');
		break;
	case '/admin':
		res.write('welcome to admin page');
		break;
	case '/login':
		res.write('please login');
		break;
	case '/':
		res.writeHead(302,{Location:'/login'});
		break;
	default:
		res.write('404 not found');
	}
	res.end();
});













