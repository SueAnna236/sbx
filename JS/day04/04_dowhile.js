//循环产生1到10
var i=11;
do
{
	console.log(i);
	i++;
}
while (i<=10);

//打印2，4,6,8,10
var j=2;
do
{
	console.log(j);
	j+=2;
}
while (j<=10);

//计算1到100之间和
var num=1;
var sum=0;
do
{
	sum+=num;
	num++;
}
while (num<=100);
console.log(sum);

//计算1到10的乘积
var n=1;
var pd=1;
do
{
	pd*=n;
	n++;
}
while (n<=10);
console.log(pd);

//打印90,85,80......50
var m=90;
do
{
	console.log(m);
	m-=5;
}
while (m>=50);

//计算1到100之间所有奇数的和
var k=1;
var sumk=0;
do
{
	if (k%2==1)
	{
		sumk+=k;
	}
	k+=2;
}
while (k<=100);
console.log(sumk);

//打印1到100之间所有能被7整除的数
var s=1;
do
{
	if (s%7==0)
	{
		console.log(s);
	}
	s++;
}
while (s<=100);


