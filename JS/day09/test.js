/*
//Math对象
console.log(Math.PI);

console.log(Math.abs(-965.2));

console.log(Math.round(5.46));

console.log(Math.ceil(5.46));

console.log(Math.floor(5.46));

console.log(Math.max(5,8,11));

console.log(Math.min(5,8,11));

console.log(Math.pow(2,5));

console.log(Math.random());

//一共56个人，获取0到55之间的随机数（整数）
console.log(Math.floor(Math.random()*56));


//练习：创建数组，保存10个人的姓名，随机取出4个人（放入到新数组，允许重复）
var ten=['Tom','Jerry','Kate','Lily','梅梅','Poly','明明','David','Lucy','Brand'];
var four=[];
for (var i=0;i<4;i++)
{
	four.push(ten[Math.floor(Math.random()*10)]);
}
console.log(four);


//练习：创建数组，保存0到9，A到Z，36个字符随机取4个字符，放入到新数组中，允许重复
//创建一个空数组
var num=[];
//向数组中添加数字0到9
for (var i=0;i<10;i++)
{
	num.push(i);
}

var str='A';
//查看字符A的、Unicode码
var unic=str.charCodeAt();
for (var j=0;j<26;j++)
{
	//向数组num中添加A到Z字母，String.fromCharCode(unic+j)--获取Unicode码对应的字符
	num.push(String.fromCharCode(unic+j));
}
//声明一个空数组存放随机选出的字符
var four=[];
for (var m=0;m<4;m++)
{
	//随机选取的字符放入空数组中
	four.push(num[Math.floor(Math.random()*num.length)]);
}
console.log(four);


//Date对象
var d=new Date('2018/10/1 18:20:36');

var d=new Date(2018,10,1,18,30,36);

var d=new Date(1000);

var d=new Date();


//获取日期时间
var d=new Date('2018/10/1 18:20:36');
var y=d.getFullYear();
var Mon=d.getMonth();
var Dat=d.getDate();
var H=d.getHours();
var Minu=d.getMinutes();
var Sec=d.getSeconds();
var Mill=d.getMilliseconds();
var Day=d.getDay();
var Tim=d.getTime();
console.log(y,Mon,Dat,H,Minu,Sec,Mill,Day,Tim);


//练习：获取当前系统时间的Date对象，打印出以下格式：2018年10月19日 14:06:30 星期五 下午
var d=new Date();
var year=d.getFullYear();
var month=d.getMonth()+1;
var date=d.getDate();
var hour=d.getHours();
var minute=d.getMinutes();
var second=d.getSeconds();
var weekday=d.getDay();
var pm='';
if (second<10)
{
	second='0'+second;
}
if (hour>=12)
{
	pm='下午';
}else{
	pm='上午';
}
week=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
console.log(year+'年'+month+'月'+date+'日 '+hour+':'+minute+':'+second+' '+week[weekday]+' '+pm);


//练习：计算当前系统时间距离2018年圣诞节还有多久。格式：距离2018年圣诞节还有60天8小时23分钟15秒
var today=new Date();
var chris=new Date(2018,11,25);
var m=(chris-today)/1000;
//天数
var d=Math.floor(m/(60*60*24));
//小时
var h=Math.floor((m%(24*60*60))/(60*60));
//分钟
var f=Math.floor((m%(60*60))/60)
//秒数
var s=Math.floor(m%60);
console.log('距离2018年圣诞节还有'+d+'天'+h+'小时'+'分钟'+s+'秒');


//设置日期和时间
var d=new Date('2018/10/1 18:20:36');
d.setFullYear(2011);
d.setMonth(11);
d.setDate(19);
d.setHours(12);
d.setMinutes(0);
d.setSeconds(0);
d.setMilliseconds(1856);
d.setTime(185662448786);
console.log(d.toLocaleString());
console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString());


//练习：打印10天以后是星期几？
var d=new Date();
var date=d.getDate()+10;
d.setDate(date);
console.log(d.getDay().toLocaleString());


//练习：计算合同中的时间，员工的入职时间是2018-6-10，合同的有效期3年，求合同的到期时间？续签合同：提前一个月续签，如果是周末，提前到周五，求续签的时间？
var d=new Date('2018/6/16');
console.log('员工的入职时间为：'+d.toLocaleDateString());
var t=new Date(d);
//合同到期的时间
t.setFullYear(d.getFullYear()+3);
console.log('合同到期的时间为：'+t.toLocaleDateString());
var x=new Date(t);
//续签合同的月份
x.setMonth(t.getMonth()-1);
if (x.getDay()==0)
{
	x.setDate(t.getDate()-2);
}else if (x.getDay()==6)
{
	x.setDate(t.getDate()-1);
}
console.log('续签的合同时间为：'+x.toLocaleDateString());
*/

//计算圆周率3.14，半径为5圆的周长
var r=5;
console.log((2*Math.PI*r).toFixed(1))w;


/*
//第一周周考题
for (var i=1;i<=5;i++)
{
	var str1='';
	
	for (var j=5;j>=i;j--)
	{
		str1+='*';
	}
	var str2='';
	for (var n=1;n<=i;n++ )
	{
		str2+=' ';
	}
	var str3='';
	for (var m=5;m>i;m--)
	{
		str3+='*';
	}
	var str=str2+str1+str3;
	console.log(str);
}
*/





