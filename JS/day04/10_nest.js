//打印五行五列的“*”
/*
var str='';
for (var i=1;i<=5;i++)
{
	str+='*';
}
console.log(str);
*/
//再写一个循环执行5次
//外层循环：控制循环的行数--j
for (var j=1;j<=5;j++)
{
	var str='';
	//内层循环：控制循环的列数--i
	for (var i=1;i<=5;i++)
	{
		str+='*';
	}
	console.log(str);
}

//练习：打印6行8列的*
for (var m=1;m<=6;m++)
{
	var str='';
	for (var n=1;n<=8;n++)
	{
		str+='*';
	}
	console.log(str);
}

//打印直角三角形显示的*，打印5行
//外层：循环5行
for (var r=1;r<=5;r++)
{
	var str='';//每次都是在空的里面加*
	//内层：循环列数由所在的行数决定。第1行：<=1;第2行：<=2;第3行：<=3...
	for (var t=1;t<=r;t++)
	{
		str+='*';
	}
	console.log(str);
}