//课后练习：创建文件计数器，每次运行显示浏览的次数。
//①判断文件num.txt是否存在，如果不存在则创建文件，并写入初始值0
//②从num.txt中读取文件中的内容，将读取的数字加1，打印出来。把加1的结果再次写入（清空写入）到num.txt
//全部用同步方
//引入fs模块
const fs=require('fs');
//判断文件num.txt是否存在
var filename='num.txt';
//如果num.txt不存在，创建并写入0
if (!fs.existsSync(filename))
{
	fs.writeFileSync(filename,0);
}
//读取num.txt中的内容
var num=fs.readFileSync(filename).toString();
//将读取的内容转为数值型，并+1
num++;
console.log(num);
//向num.txt文件中写入num1
fs.writeFileSync(filename,num);
//console.log(num);









