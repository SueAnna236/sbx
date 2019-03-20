/*
//练习：创建函数getSum，传递1个参数，返回1到参数之间所有整数的和--使用递归
function getSum(n){
	//递归的结束：当n为1的时候，结束，返回1
	if (n==1)
	{
		return 1;
	}
	//当前的数+前n-1个数的和
	return n+getSum(n-1);
}
var res=getSum(5);
console.log(res);
*/


//练习：创建函数getJC，传递1个参数，返回1到参数之间的乘积-递归
function getJC(n){
	if (n==1)
	{
		return 1;
	}
	return n*getJC(n-1);
}
var res=getJC(5);
console.log(res);





