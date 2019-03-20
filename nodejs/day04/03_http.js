//引入http模块
const http=require('http');
//创建web服务器
var server=http.createServer();
//分配端口，后期监听端口
server.listen(3000,()=>{
	console.log('服务器创建成功');
});
//访问的创建的服务器：IP地址或者域名、服务器的端口、协议
//http://127.0.0.1:3000
//接收浏览器的请求，并作出响应
//服务器通过一个事件来获取是否有请求
server.on('request',(req,res)=>{
	//req是请求的对象
	//res是响应的对象
	console.log('有一个请求发生');
	//获取请求的url
	console.log(req.url);
	//获取请求的方法
	console.log(req.method);
	//获取请求的头信息
	console.log(req.headers);
});






