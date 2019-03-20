/*
console.log('start');

//1、syntaxError 语法错误，先检查语法错误，任何代码都不执行
//var 1a=2;
var a=1；

//2、referenceError 引用错误，有未声明的变量
var b=a+1;


//3、TypeError 类型错误，错误的使用了括号等
var a=1;
a();


//4、RangeError 范围错误，传递的参数超出了范围等......，会阻止后续代码的执行
var arr=new Array(-5);


//尝试执行，说明可能产生错误
try{
	//尝试执行的代码
	var b=a+1;
}catch(err){//尝试执行出现错误后，捕获到err中
	//console.log(err);
	//解决方案
	var b=1+1
}
console.log(b);
*/

/*
try{
	var a=1;
	a();	
}catch(err){
	console.log(err);
}


try{
	var arr=new Array(-5);	
}catch(err){
	console.log(err);
}

console.log('end');
*/

//练习：计算所有成绩（3门）的和，如果成绩（其中一门）不存在，默认设置为60；最后打印总和
var a=78,b=99;
try{
	var sum=a+b+c;
}catch(err){
	//解决方案
	var sum=a+b+60;
}
console.log(sum);