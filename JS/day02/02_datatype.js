/*
var num=1;
var num2=3.14;
var num3=012;//8进制
var num4=0xf;//16进制
console.log(num4);
*/
var num5=044;
var num6=0x24;
console.log(num5);
console.log(num6);
var num7=314.567;
var num8=3.14567e2;
var str1="hello world";
var str2='2';
var str3='京';
console.log(str3);
//查看数据类型
console.log(typeof(str3));
//将字符转为Unicode编码
console.log(str3.charCodeAt());
//练习：查看自己姓名的Unicode码
var str4='伦';
console.log(str4);
console.log(str4.charCodeAt());

var isOnline=true;//是否在线
var isVip=false//是否为Vip
var isOnsale=true;//是否在售
console.log(isOnline);
console.log(typeof(isOnline));
//练习：打印两个数字的比较结果（> <）
console.log(8>2);

//未定义型
var a;
//null
var b=null;
console.log(b);
console.log(typeof(b));