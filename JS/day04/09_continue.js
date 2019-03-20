//循环1到10，遇到5，跳过（不执行输出）后继续下一次
for (var i=1;i<=10;i++)
{
	//如果i为5，跳过本次循环
	if (i==5)
	{
		continue;//跳出循环体，执行自增
	}
	
	console.log(i);
}

//打印1到100之间的所有的偶数（利用continue遇到奇数跳过）
for (var num=1;num<=100;num++)
{
	//遇到奇数跳过
	if (num%2!=0)
	{
		continue;
	}
	console.log(num);
}

//打印1,2,5,7,10,11,13,14,17，...98（不能被3或4整除的数字）
for (var j=1;j<=100;j++)
{
	if (j%3==0||j%4==0)
	{
		continue;
	}
	console.log(j);
}

//计算新中国成立后至今一共有多少个闰年
var sum=0;
for (var year=1949;year<=2018;year++)
{
	if (year%4==0&&year%100!=0||year%400==0)
	{
		sum++;
	}
}
console.log(sum);

//计算新中国成立后至今一共有多少个闰年
var sumr=0;
for (var year=1949;year<=2018;year++)
{
	if (!(year%4==0&&year%100!=0||year%400==0))
	{
		continue;
	}
	sumr++;
}
console.log(sumr);

//计算本世纪所有的闰年，打印前10个
var count=0;
for (var t=2000;t<=2100;t++)
{
	if (t%4==0&&t%100!=0||t%400==0)
	{
		console.log(t);
		count++;
	}
	//如果count的数量达到了10，结束循环
	if (count==10)
	{
		break;
	}
}
console.log(count);

//计算1到100之间的和，当和大于4000的时候，退出循环，打印和及当前i的值
var cf=0;
for (var h=1;h<=100;h++)
{
	cf+=h;
	if (cf>4000)
	{
		console.log(cf);
		console.log(h);
		break;
	}
}

//计算1/10+2/9+3/8+4/7+5/6+6/5+7/4+8/3+9/2+10/1
//如果循环条件中有多个表达式，则最后一个起作用
for (var x=1,y=10,sumv=0;x<=10,y>=1;x++,y--)
{
	sumv +=x/y;
}
console.log(sumv);