//引入fs模块
const fs=require('fs');
/*
//1、创建目录
fs.mkdir('./mydir',(err)=>{
	if (err)
	{
		throw err;
	}
	console.log('目录创建成功');
});


//练习：使用mkdir的同步方法创建目录mydir1
fs.mkdirSync('./mydir1');
console.log('目录创建成功');


//2、删除目录
fs.rmdir('./mydir1',(err)=>{
	if (err)
	{
		throw err;
	}
	console.log('目录删除');
});


//3、读取目录
fs.readdir('./1',(err,files)=>{
	if (err)
	{
		throw err;
	}
	console.log(files);
});
*/

//练习：使用同步方法readdirSync读取目录，打印文件个数；遍历数组中的元素
var files=fs.readdirSync('./1');
console.log(files.length);
for (var i=0;i<files.length;i++)
{
	console.log(files[i]);
}
console.log('执行完毕');