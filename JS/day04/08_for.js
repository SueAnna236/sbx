//计算1到10之间所有数字的和
var sum=0;
for (var i=1;i<=10;i++)
{
	sum+=i;
}
console.log(sum);

//在for循环中的第1个表达式中声明多个变量
for (var sum=0,i=1;i<=10;i++)
{
	sum+=i;
}
console.log(sum);
//for循环中的初始值，可以写在for语句之前，分号不可以省略
var sum=0,i=1;
for (;i<=10;i++)
{
	sum+=i;
}
console.log(sum);

//for循环中的自增（减）可以写在循环体中，但是分号不能省略
var sum=0,i=1;
for (;i<=10;)
{
	sum+=i;
	i++;
}
console.log(sum);

//循环条件可以省略，默认称为无限循环
var sum=0,i=1;
for (;;)
{
	console.log(i);
	//打印之后，如果已经是10，结束循环
	if (i==10)
	{
		break;
	}
	i++;
}
