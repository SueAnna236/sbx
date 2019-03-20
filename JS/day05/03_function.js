/*
//带有参数的函数
//计算任意两个数相加，并打印结果
function addNum(num1,num2){
	//形参：num1,num2，本质就是声明了两个变量，但是未赋值
	console.log(num1+num2);
}
//调用的时候：实参的值就会赋值给形参（给变量赋值）
addNum(2,6);


//练习：创建函数getSum，传递一个参数，得到1到任意数字之间的和，打印结果
function getSum(num){
	for (var sum=0,i=1;i<=num;i++)
	{
		sum+=i;
	}
	console.log(sum);
}
getSum(100);
*/


//练习：创建函数getRun，传递2个参数，得到人两个年份之间的闰年个数。
function getRun(y1,y2){
	for (var count=0,i=y1;i<=y2;i++)
	{
		if (i%4==0&&i%100!=0||i%400==0)
		{
			count++;
		}
	}
	console.log(count);
}
getRun(2000,2100);
getRun(1949,2018);
getRun(201,400);
