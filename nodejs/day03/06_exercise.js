//练习：浏览器端请求的网址http://www.tedu.cn/web/1809.html?sid=20&name=tom#detail，获取查询字符串中的sid和name对应的值。
//用到url和querystring两个模块
const url=require('url');
const querystring=require('querystring');
var str='http://www.tedu.cn/web/1809.html?sid=20&name=tom#detail';
//使用url模块对网址进行解析
var obj=url.parse(str);
//获取网址中的查询字符串
var qs=querystring.parse(obj.query);
console.log(`编号：${qs.sid}，姓名：${qs.name}`);


