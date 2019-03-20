 /*
//带有返回值的函数
//练习：创建函数getSum，传递一个参数，得到1到任意数字之间的和，返回结果
function getSum(num){
	for (var sum=0,i=1;i<=num;i++)
	{
		sum+=i;
	}
	//返回计算的结果
	return sum;
}
var res=getSum(100);
console.log(res);


//练习：创建函数getRun，传递2个参数，返回两个年份之间的闰年个数
function getRun(start,end){
	for (var count=0,i=start;i<=end;i++ )
	{
		if (i%4==0&&i%100!=0||i%400==0)
		{
			count++;
		}
	}
	//把运行的结果带出来
	return count;
}
var tat=getRun(2000,2100);
console.log(tat);

//练习：创建函数getMax，传递2个参数，返回最大值
function getMax(num1,num2){
	if (num1>num2)
	{
		return num1;
	}else{
		return num2;
	}
	
}
var max=getMax(5,5);
console.log(max);

function getMax(num1,num2){
	 return num1>num2 ? num1:num2;
}
var max=getMax(5,5);
console.log(max);


//练习：创建函数getMax，传递3个参数，返回最大值
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
var max=getMax(14,6,22);
console.log(max);


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
var res=getMax(13,5,9);
console.log(res);


function getMax(num1,num2,num3){
	var max=num1>num2?num1:num2;
	return max>num3?max:num3;
}
var res=getMax(13,5,9);
console.log(res);

//练习：创建函数getSex，传递一个参数，返回“男”、“女”
function getSex(n){
	if (n==1)
	{
		return '男';
	}esle
		return '女';
}
var res=getSex(1);
console.log(res);
*/

//练习：创建函isRun数判断一个年份是否为闰年，传递1个参数（年份），是闰年返回true，不是闰年返回false
function isRun(year){
	if (year%4==0 && year%100!=0 || year%400==0)
	{
		return true;//return后的语句不会再执行
	}
	return false;
}
var res=isRun(2000);
//console.log(res);
if (res)
{//if后的括号里如果只有一个值，默认是和true进行比较
	console.log(366);
}else{
	console.log(365);
}