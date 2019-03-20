/*console.log('lello ');
console.log('world ');
console.log('javascript ');
//不同的位置多次执行3次代码
*/

/*
//创建函数
function printStr(){
	//函数体---封装重复执行的代码
	console.log('hello');
	console.log('world');
	console.log('javascript');
}
//调用
printStr();

//练习：封装10+20的结果，并把结果打印出来，调用3次
function addNum(){
	console.log(10+20);
}
addNum();
addNum();
addNum();
*/
//练习：封装1到100所有整数的和，打印和；调用3次
function getSum(){
	for (var sum=0,i=1;i<=100;i++)
	{
		sum+=i;
	}
	console.log(sum);
}
getSum();
getSum();
getSum();





