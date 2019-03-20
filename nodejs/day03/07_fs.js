
//引入文件系统模块
const fs=require('fs');
/*
//1、查看文件的状态
//第1个参数：文件的路径
//第2个参数：回调函数，可以获取文件的状态
//异步：不会阻止后续代码的执行，把执行结果放到程序的最后
fs.stat('05_url.js',(err,stats)=>{
	//err 如果查询有错误，把错误信息放到这个参数中
	if (err)
	{
		//throw 抛出错误，会阻止后续代码执行
		throw err;
	}
	console.log(stats);
	//查看是否是文件
	console.log(stats.isFile());
	//查看是否是目录
	console.log(stats.isDirectory());
});
*/

//2、查看文件的状态 statSync
//同步：阻止后续代码的执行
var stats=fs.statSync('./1')
console.log(stats.isFile());
console.log(stats.isDirectory());

console.log('执行结束');






