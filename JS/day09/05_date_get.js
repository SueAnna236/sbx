//获取时间
//创建Date对象
var d1=new Date('2018/10/1/ 18:20:30');
//打印的是0时区的时间，存储的还是当前的时间
console.log(d1);
//获取具体的时间信息--获取年份
console.log(d1.getFullYear());
//获取月份
console.log(d1.getMonth());
//获取日期
console.log(d1.getDate());
//获取小时
console.log(d1.getHours());
//分钟
console.log(d1.getMinutes());
//秒钟
console.log(d1.getSeconds());
//毫秒
console.log(d1.getMilliseconds());
//星期
console.log(d1.getDay());
//距离计算机元年的毫秒数
console.log(d1.getTime());

//练习：获取当前系统时间的Date对象，打印出以下格式：2018年10月19日 14:06:30 星期五 下午
var full=new Date();

var y=full.getFullYear();
var m=full.getMonth()+1;
var d=full.getDate();
var h=full.getHours();
var M=full.getMinutes();
var s=full.getSeconds();
var D=full.getDay()
//如果秒钟小于10，前边加前导0
if (s<10)
{
	s='0'+s;
}
var w=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
var am;//用于保存上午或下午
if (h>=12)
{
	am='下午';
}else{
	am='上午';
}
//打印时间
console.log(y+'年'+m+'月'+d+'日 '+h+':'+M+':'+s+' '+w[D]+' '+am);




