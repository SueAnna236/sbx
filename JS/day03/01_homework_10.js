//1、判断是否是闰年
var year=2000;
console.log((year%4==0 && year%100!=0) || (year%400==0) || (year%3200==0 && year%172800==0)); 

/*
if(year%4==0 && year%100!=0)
	{
	console.log(true);
	}
else if(year%400==0)
	{
	console.log(true);
	}
else if(year%3200==0 && year%172800==0)
	{
	console.log(true);
	}
else
	{
	console.log(false);
	}
*/

//2、判断成绩是否及格
var score=88;
score>=60 && console.log('及格');
score<60 || console.log('及格');
/*
if(score>=60)
	{
	console.log('及格');
	}

if(score>=60)
	{
	console.log('及格');
	}
else
	{
	console.log('不及格');
	}
*/