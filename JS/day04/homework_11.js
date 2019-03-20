//计算1到100之间所有偶数的和
var i=2;
var sumh=0;
while (i<=100)
{
	sumh+=i;
	i+=2;
}
console.log(sumh);

var num=1;
var sumd=0;
while (num<=100)
{
	if (num%2==0)
	{
		sumd+=num;
	}
	num++;
}
console.log(sumd);

//计算1到100之间所有能被3整除的数字的和
var j=1;
var sumi=0;
while (j<=100)
{
	if (j%3==0)
	{
		sumi+=j;
	}
	j++;
}

console.log(sumi);

while (j<=100)
{
	sumi+=j;
	j+=3;
}
console.log(sumi);

//计算1到10之间所有数字的乘积
var num=1;
var pr=1;
while (num<=10)
{
	pr*=num;
	num++;
}
console.log(pr);

