//引入http模块
const http=require('http');
/*
//模拟客户端浏览器法请求
//请求的url和请求的方法
http.get('http://www.tmooc.cn/search/index.shtml',(res)=>{
	//res是服务器端响应的对象
	//查看响应的状态码
	console.log(res.statusCode);
	//获取服务器端响应的内容
	//通过一个事件：当有数据传输
	//通过回调函数来获取服务器端响应的数据
	res.on('data',(buf)=>{
		//buf就是服务器端响应的数据
		console.log(buf.toString());
	})
});


http.get('http://www.tmooc.cn',(res)=>{
	console.log(res.statusCode);
	res.on('data',(buf)=>{
		console.log(buf.toString());
	});
});
*/

//练习：请求中国气象网的数据
http.get('http://www.weather.com.cn/data/sk/101010100.html',(res)=>{
	console.log(res.statusCode);
	res.on('data',(buf)=>{
		console.log(buf.toString());
	});
});










