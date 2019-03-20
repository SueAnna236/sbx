/*
//创建函数----函数声明
function fn(){
	
}

//创建一个匿名函数，把函数的地址存储待变量fun中,此时的fun就是函数的名称
//创建函数----函数表达式
var fun=function (num){
	console.log(num);
	return num+20;
}
var res=fun(10);
console.log(res);
*/

//练习：使用函数表达式创建函数getSum，传递1个参数，获取1到参数之间的所有数字的和，返回和
var getSum=function (num){
	var sum=0;
	for (var i=1;i<=num;i++)
	{
		sum+=i;
	}
	return sum;
}
var res=getSum(100);
console.log(res);




