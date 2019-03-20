/*
1*1=1
2*1=2 2*2=4
3*1=3 3*2=6 3*3=9
*/
/*
for (var j=1;j<=9;j++)
{
	var str='';
	for (var i=1;i<=j;i++)
	{
		str+=j+'*'+i+'='+i*j+' ';
	}
	console.log(str);
}


//练习：封装10+20的结果，并把结果打印出来，调用3次。
function addNum(){
	console.log(10+20);
}
addNum();
addNum();
var res=addNum();


//练习：封装计算1~100所有整数的和，打印和；调用3次
function addSum(){
	for (var sum=0,i=1;i<=100;i++)
	{
		sum+=i;
	}
	console.log(sum);
}
addSum();
addSum();
addSum();


//计算任意两个数相加，并打印结果
function addNum(n1,n2){
	console.log(n1+n2);
}
addNum(6,9);
addNum(8,5);
addNum(2,5);


//练习：创建函数getSum，传递1个参数，得到1~任意数字之间的和。打印结果
function getSum(num){
	for (var i=1,sum=0;i<=num;i++)
	{
		sum+=i;
	}
	console.log(sum);
}
getSum(100);


//练习：创建函数getRun，传递2个参数，打印任意两个年份之间的闰年个数。
function getRun(start,end){
	for (var count=0,y=start;y<=end;y++)
	{
		if (y%4==0 && y%100!=0 || y%400==0)
		{
			count++;
		}
	}
	console.log(count);
}
getRun(2000,2100);
getRun(1949,2018);
getRun(1900,2018);


//计算1~任意数字之间的和，返回结果
function getSum(num){
	for (var sum=0,i=1;i<=num;i++)
	{
		sum+=i;
	}
	return sum;
}
var res=getSum(100);
console.log(res);


//练习：创建函数getRun，传递2个参数，返回两个年份之间的闰年个数。
function getRun(start,end){
	for (var count=0,i=start;i<=end;i++)
	{
		if (i%4==0 && i%100!=0 || i%400==0)
		{
			count++;
		}
	}
	return count;
}
var res=getRun(2000,2100);
console.log(res);


//练习：创建函数getMax，传递2个参数，返回最大值。
function getMax(num1,num2){
	if (num1>num2)
	{
		return num1;
	}else{
		return num2;
	}
}
var res=getMax(7,6);
console.log(res);

function getMax(num1,num2){
	return num1>num2?num1:num2;
}
var res=getMax(9,4);
console.log(res);


//练习：创建函数getMax，传递3个参数，返回最大值。
function getMax(num1,num2,num3){
	if (num1>num2)
	{
		if (num1>num3)
		{
			return num1;
		}else{
			return num3;
		}
	}else{
		if (num2>num3)
		{
			return num2;
		}else{
			return num3;
		}
	}
}
var res=getMax(9,16,2);
console.log(res);

function getMax(num1,num2,num3){
	var max;
	if (num1>num2)
	{
		max=num1;
	}else{
		max=num2;
	}
	if (max>num3)
	{
		return max;
	}else{
		return num3;
	}
}
var res=getMax(5,9,36);
console.log(res);

function getMax(num1,num2,num3){
	return num1>num2 ? (num1>num3 ? num1: num3) : (num2>num3 ? num2 : num3);
}
var res=getMax(6,9,58);
console.log(res);

function getMax(num1,num2,num3){
	var max=num1>num2 ? num1 : num2;
	return max>num3 ? max : num3;
}
var res=getMax(7,25,6);
console.log(res);


//练习：创建函数getSex，传递1个参数(0/1)，返回'女'/'男'
function getSex(sex){
	if (sex==1)
	{
		return '男';
	}else{
		return '女';
	}
}
var res=getSex(1);
console.log(res);


//练习：创建函数isRun，传递1个参数(年份)，是闰年返回true,不是闰年返回false
function isRun(year){
	if (year%4==0 && year%100!=0 || year%400==0)
	{
		return true;
	}else{
		return false;
	}
}
var res=isRun(2000);
console.log(res);
//查看一个年份有多少天
if (res)
{
	console.log(366);
}else{
	console.log(365);
}


//练习：创建函数getSum，传递1个参数，返回1~参数之间所有整数的和————使用递归
function getSum(n){
	if (n==1)
	{
		return 1;
	}else{
		return n+getSum(n-1);
	}
}
var res=getSum(100);
console.log(res);
*/

//练习：创建函数getJC，传递1个参数，返回1~参数之间的乘积————使用递归
function getJc(n){
	if (n==1)
	{
		return 1;
	}else{
		return n*getJc(n-1);
	}
}
var res=getJc(10);
console.log(res);

