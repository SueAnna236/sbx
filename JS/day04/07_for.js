//打印1到10
for (var i=1;i<=10;i++)
{
	//循环体
	console.log(i);
}

//打印1到100之间能被3整除的数字
for (var j=1;j<=100;j++)
{
	if (j%3==0)
	{
		console.log(j);
	}
}

//计算20到50之间所有整数的和
var sum=0;
for (var num=20;num<=50;num++)
{
	sum+=num;
}
console.log(sum);

//练习：打印2,4,6,8,10
for (var n=2;n<=10;)
{
	console.log(n);
	n+=2;
}

//练习：打印80,77,74，....50
for (var m=80;m>=50;)
{
	console.log(m);
	m-=3;
}

//练习：计算1到20之间所有偶数乘积
var p=1;
for (var a=1;a<=20;a++ )
{
	if (a%2==0)
	{
		p*=a;
	}
}
console.log(p);

//练习：打印本世纪（2000到2100）所有的闰年
for (var year=2000;year<=2100;year++)
{
	if (year%4==0&&year%100!=0)
	{
		console.log(year);
	}else if (year%400==0)
	{
		console.log(year);
	}
}

//练习：打印1*5=5 2*5=10 3*5=15 4*5=20 5*5=25 
var pf='';
for (var f=1;f<=5;f++)
{
	pf+=f+'*5='+f*5+' ';
}
console.log(pf);