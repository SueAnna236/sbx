/*
//循环产生1~10
//while
var i=1;
while (i<=10)
{
	console.log(i);
	i++
}

var i=1;
while (true)
{
	if (i==10)
	{
		break;
	}
	i++;
	console.log(i);
}

//for
for (var i=1;i<=10;i++)
{
	console.log(i);
}

//循环1~10，遇到5，跳过(不执行输出)后继续下一次
//for
for (var i=1;i<=10;i++)
{
	if (i==5)
	{
		continue;
	}
	console.log(i);
}
*/

/*
//do-while循环0~9
var i=0;
do
{
	console.log(i);
	i++;
}
while (i<=9);

//计算1~10之间所有数字的和
//forvar sum=0
for (var i=1;i<=10;i++)
{
	sum+=i;
}
console.log(sum);

//for,在for循环中的第1个表达式中声明多个变量
for (var sum=0,i=1;i<=10;i++)
{
	sum+=i;
}
console.log(sum);

//for,for循环中的初始值，可以写在for语句之前
//但是分号不能省略
var sum=0,i=1;
for (;i<=10;i++ )
{
	sum+=i;
}
console.log(sum);

//while结构
var sum=0,i=1;
while (i<=10)
{
	sum+=i;
	i++;
}
console.log(sum);

//for循环中的自增(减)可以写在循环体中
//但分号不能省略
var sum=0,i=1;
for (;i<=10 ; )
{
	sum+=i;
	i++
}
console.log(sum);

//for循环条件可以省略，默认就成为无限循环
var sum=0,i=1;
for (; ; )
{
	sum+=i;
	if (i==10)
	{
		break;
	}
	i++
}
console.log(sum);

//练习：打印1~100之间所有的偶数(遇到奇数跳过)
for (var i=1;i<=100;i++)
{
	if (i%2!=0)
	{
		continue;
	}
	console.log(i);
}
*/

/*
//计算1~100之间所有偶数的和
var sum=0,i=1;
while (i<=100)
{
	if (i%2==0)
	{
		sum+=i;
	}
	i++;
}
console.log(sum);

//练习：计算1~100之间所有奇数的和
//do-while
var i=1,sum=0;
do
{
	if (i%2!=1)
	{
		sum+=i;
	}
	i++
}
while (i<=100);
console.log(sum);

//练习：打印1~100所有能被7整除的数字
//do-while
var i=1;
do
{
	if (i%7==0)
	{
		console.log(i);
	}
	i++
}
while (i<=100);

//打印1~100所有能被3整除的数字
for (var i=1;i<=100;i++)
{
	if (i%3==0)
	{
		console.log(i);
	}
}

//计算20~50之间所有整数的和
//for
for (var sum=0,i=20;i<=50;i++ )
{
	sum+=i;
}
console.log(sum);
*/

/*
//练习：计算1~20之间所有偶数的乘积
//for
for (var pr=1,i=1;i<=20;i++)
{
	if (i%2==0)
	{
		pr*=i;
	}
}
console.log(pr);

//练习：计算1~100之间的和
//do-while
var i=1,sum=0;
do
{
	sum+=i;
	i++;
}
while (i<=100);
console.log(sum);

//计算1~10之间所有数字的乘积
//while
var n=1,pr=1;
while (n<=10)
{
	pr*=n;
	n++;
}
console.log(pr);

//do-while
var n=1,pr=1;
do
{
	pr*=n;
	n++;
}
while (n<=10);
console.log(pr);

//练习：打印1,2,5,7,10,11,13,14,17,98
//不能被3或者不能被4整除的数字
//for
for (var i=1;i<=100;i++)
{
	if (i%3==0||i%4==0)
	{
		continue;
	}
	console.log(i);
}
*/

/*
//练习：打印2,4,6,8,10
//do-while
var i=2;
do
{
	console.log(i);
	i+=2;
}
while (i<=10);

var i=2;
do
{
	if (i%2==0)
	{
		console.log(i);
	}
	i++
}
while (i<=10);

//for
for (var i=2;i<=10;i+=2 )
{
	console.log(i)
}
*/

/*
//练习：打印90,85,80....50
//do-while
var i=90;
do
{
	console.log(i);
	i-=5;
}
while (i>=50);
*/

/*
//for
for (var i=90;i>=50;i-=5)
{
	console.log(i);
}


//练习：猜数字游戏，声明一个变量保存数字；循环弹出提示框，并输入数字；如果输入的数字比存储的大，警示窗口弹出'big'，如果输入的数字比存储的小，警示窗口弹出'small'，否则警示窗口弹出'right'，结束循环。
var num=10;
while (true)
{
	var p=prompt('please write a number');//循环弹出提示框
	if (p>num)
	{
		alert('big');
	}else if (p<num)
	{
		alert('small');
	}else{
		alert('right');
		break;
	}
}


//练习：声明变量保存密码'123456'，使用do-while循环弹出提示框，如果密码输入正确，警示窗口弹出‘login success’，结束循环。
var pwd='123456';
do
{
	var pt=prompt('please write your password');
	if (pt==pwd)
	{
		alert('login sucess');
		break;
	}
}
while (true);

var pwd='123456';
do
{
	var pt=prompt('please write your password');
}
while (pt!=pwd);
alert('login sucess');

//练习：打印本世纪(2000~2100)所有的闰年
//for
for (var year=2000;year<=2100;year++)
{

	if (year%4==0&&year%100!=0||year%400==0)
	{
		console.log(year);
	}
}


//练习：打印5个*
//for
var str='';
for (var i=1;i<=5;i++ )
{
	str+='*';
}
console.log(str);


//打印5行5列的*
//for
for (var j=1;j<=5;j++)
{
	var str='';
	for (var i=1;i<=5;i++)
	{
		str+='*';
	}
	console.log(str);
}

//练习：打印6行8列的*
for (var j=1;j<=6;j++)
{
	var str='';
	for (var i=1;i<=8;i++)
	{
		str+='*';
	}
	console.log(str);
}
*/
//练习：打印直角三角形显示的*
/*
*
**
***
****
*****

//for
for (var j=1;j<=5;j++)
{
	var str='';
	for (var i=1;i<=j;i++)
	{
		str+='*';
	}
	console.log(str);
}
*/
/*
//练习：打印99乘法表第5行
//for
var str='';
for (var i=1;i<=5;i++)
{
	str+=i+'*5='+i*5+' ';
}
console.log(str);

//练习：计算新中国成立后一共有多少个闰年。
for (var count=0,y=1949;y<=2018;y++ )
{
	if (y%4==0&&y%100!=0||y%400==0)
	{
		count++;
	}
}
console.log(count);

//练习：计算本世纪所有的闰年，打印前10个。
//记录闰年的个数
for (var count=0,y=2000;y<=2100;y++)
{
	if (y%4==0&&y%100!=0||y%400==0)
	{
		console.log(y);
		count++;
	}
	if (count==10)
	{
		break;
	}
}
console.log(count);

//练习：计算1~100之间的和，当和大于4000的时候，结束循环，打印总和以及当前i的值。
//for
for (var sum=0,i=1;i<=100;i++)
{
	sum+=i;
	if (sum>=4000)
	{
		break;
	}
}
console.log(sum);
console.log(i);

//练习：计算1/10+2/9+3/8+4/7+5/6+6/5+7/4+8/3+9/2+10/1
//for 
for (var sum=0,i=1,j=10;i<=10;i++,j-- )
{
	sum+=(i/j);
}
console.log(sum);


//打印99乘法表
//for
for (var j=1;j<=9;j++)
{
	var str='';
	for (var i=1;i<=j;i++)
	{
		str+=i+'*'+j+'='+i*j+' ';
	}
	console.log(str);
}
*/

