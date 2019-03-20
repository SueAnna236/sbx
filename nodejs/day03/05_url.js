
//使用nodejs下的URL模块
const url=require('url');
var str='http://www.tmmoc.cn:80/course/101.html?lid=5&pname=dell#sale';
//使用url模块
//将网址解析为对象
var obj=url.parse(str);
console.log(obj);
var obj2={
	protocol:'http',
	hostname:'www.codeboy.com',
	port:80,
	pathname:'/home/detail.html',
	//search:'?lid=5&pname=dell',
	//query是一个对象形式
	query:{lid:5,pname:'dell'},
	hash:'one'
}
//把对象转换成网址格式
var str2=url.format(obj2);
console.log(str2);



