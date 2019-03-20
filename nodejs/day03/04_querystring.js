//使用nodejs提供的查询字符串模块

//属于不带路径的，文件模块
const querystring=require('querystring');
/*
var str='lid=5&pname=dell';
//使用查询字符串模块提供的方法，将查询字符串解析为对象
var obj=querystring.parse(str);
var person={
	name:'Tom',
	age:18,
	sex:'男'
}
//使用查询字符串模块将对象转换成查询字符串
var personStr=querystring.stringify(person);
console.log(personStr);
*/

//练习：将百度URL在查询字符串解析为对象：ie=utf-8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=汽车
const querystring=require('querystring');
var str='ie=utf-8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=汽车';
var obj=querystring.parse(str);
console.log(obj);
var strFy=querystring.stringify(obj);
console.log(strFy);

