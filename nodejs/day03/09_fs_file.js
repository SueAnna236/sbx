//引入fs模块
const fs=require('fs');
/*
//读取文件
fs.readFile('./05_url.js',(err,data)=>{
	if (err)
	{
		throw err;
	}
	console.log(data.toString());
});


//练习：使用同步方法readFileSync读取文件
var file=fs.readFileSync('./05_url.js');
console.log(file.toString());


//2、写入文件，先清空，再写入；如果文件不存在，则会创建文件
//参数1：写入的文件路径
//参数2：要写入的数据
//参数3：回调函数
fs.writeFile('./data.txt','codeboy.com',(err)=>{
	if (err)
	{
		throw err;
	}
	console.log('写入成功');
});


//3、判断文件是否存在
var res=fs.existsSync('./data.txt');
console.log(res);


//练习：查看当前目录下是否有1.txt，如果不存在，创建该文件（writeFileSync），并写入’hello‘

var res=fs.existsSync('./1.txt');
if (!res)
{
	fs.writeFileSync('1.txt','hello');
}
console.log('创建成功');


//4、写入文件
fs.appendFile('./1.txt','tedu.cn\n',(err)=>{
	if (err)
	{
		throw err;
	}
	console.log('写入成功');
});


//练习：将一个对象中的数据写入到文件data.txt中。{eid：2，ename：‘Tom’，sex：1，salary：8000}，使用同步方法
var person={
	eid:2,
	ename:'Tom',
	sex:1,
	salary:8000
}
for (var key in person)
{
	fs.appendFileSync('data.txt',person[key]+'，');
}
fs.appendFileSync('data.txt','\n');


//5、删除文件
fs.unlink('./1.txt',(err)=>{
	if (err)
	{
		throw err;
	}
	console.log('删除成功');
})
*/

fs.unlinkSync('./data.txt');
console.log('删除成功');

