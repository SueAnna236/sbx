//练习：使用http模块创建web服务器，端口为3001，使用事件获取客户端请求，打印请求的方法、url、头信息。
//http://127.0.0.1:3001/admin/login.html，
//http://127.0.0.1:3001/member/shopping.html
const http=require('http');
var server=http.createServer();
server.listen(3001,()=>{
	
});
server.on('request',(req,res)=>{
	/*
	console.log(req.method);
	console.log(req.url);
	console.log(req.headers);*/
	//响应
	//响应一行文本
	//res.write('this is 1809 homework');
	//res.write('hello world!');
	//响应的重定向，与写入文本是相冲突的，不可同时
	//参数1：响应的状态码
	//参数2：设置响应的头信息
	res.writeHead(302,{
		Location:'http://www.tmooc.cn',
		//'Content-type':'text/html;charset=utf8'
	});
	//响应结束，一旦响应结束后，就不能再次写入了
	res.end();
	//console.log(res);
});





