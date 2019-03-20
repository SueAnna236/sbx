/*
//设置日期和时间
var d1=new Date('2018/10/20 15:30:40');
//设置年份
d1.setFullYear(2008);
d1.setMonth(7);//0到11
d1.setDate(30);
d1.setHours(8);
d1.setMinutes(30);
d1.setSeconds(50);
d1.setTime(1000000000);
console.log(d1.toLocaleString());


console.log(d1);
//本地化时间格式
//年月日时分秒
console.log(d1.toLocaleString());
//年月日
console.log(d1.toLocaleDateString());
//时分秒
console.log(d1.toLocaleTimeString());


//练习：打印10天以后是星期几？
var d=new Date();
d.setDate(d.getDate()+10);
console.log(d.toLocaleString());
console.log(d.getDay().toLocaleString());
*/

//练习：计算合同中的时间
//员工的入职时间是2018-6-10
//合同的有效期3年，求合同的到期时间
var d1=new Date('2018/6/16');
//到期时间：复制入职时间的date对象
var t=new Date(d1);
//计算3年后的时间：获取当前的年份+3，结果赋值给年份
t.setFullYear(t.getFullYear()+3);
//续签合同：提前一个月续签，如果是周末，提前到周五，求续签的时间？
var x=new Date(t);
//设置的时间：当前的月份-1
x.setMonth(x.getMonth()-1);
if (x.getDay()==0)
{
	//如果是周日，提前2天；
	x.setDate(x.getDate()-2);
}else if (x.getDay()==6)
{
	//如果是周六，提前1天
	x.setDate(x.getDate()-1);
}
console.log('入职时间：'+d1.toLocaleDateString());
console.log('到期时间：'+t.toLocaleDateString());
console.log('续签时间：'+x.toLocaleDateString());
console.log(x.getDay());

