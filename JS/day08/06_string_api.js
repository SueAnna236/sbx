/*
var str='How Are YOU';
//如果要调用字符串对象下的方法，不需要包装成对象
//1、将英文字符转为大写
console.log(str.toUpperCase());
//2、将英文字符转为小写
console.log(str.toLowerCase());


var str='hello world';
//3、获取字符串长度
console.log(str.length);
//通过下标获取某一个字符
console.log(str.charAt(1));
//遍历字符串--打印每个字符
for (var i=0;i<str.length;i++)
{
	console.log(str.charAt(i).charCodeAt());
}

//将字符转为Unicode码
console.log('a'.charCodeAt());


//4、获取某个字符(串)对应的下标
var str='javascrip';
//第1个参数查找的字符（串），第2个参数表示开始的下标
console.log(str.indexOf('t',4));


//练习：检验一个字符串是否是一个合法的邮箱格式，通过检测字符串中是否有‘@’；是，打印true，不是，打印false
var str='tom455@qq.com';
//如果含有@，下标大于等于0，合法
if (str.indexOf('@')>=0)
{
	console.log(true);
}else{
	console.log(false);
}

var str='rrere#ll';
console.log(str.lastIndexOf('l'));


//截取字符串
var str='javascript';
console.log(str.slice(4));
console.log(str.slice(4,7));
console.log(str.slice(-3));
console.log(str.slice(-3,-1));


//练习：通过身份证号码，截取年、月、日，打印‘1995年08月20日’110201199508203640
var card='110201199508203640';
console.log(card.slice(6,10)+'年'+card.slice(10,12)+'月'+card.slice(12,14)+'日');
//倒数第二个字符表示性别：偶数->女，奇数->男
var sex=card.slice(-2,-1);
if (sex%2==0)
{
	console.log('女');
}else{
	console.log('男');
}


//练习：分别截取出邮箱里的用户名和域名Tom1995@163.com

var email='Tom1995@163.com';
var sub=email.indexOf('@');
console.log(email.slice(0,sub));
console.log(email.slice(sub+1));


//练习：将一个英文单词的首字母转为大写，其余转为小写heLLo
var str='heLLo';
var head=str.slice(0,1);
var ano=str.slice(1);
console.log(head.toUpperCase()+ano.toLowerCase());


//将数组转为字符串--按照某个字符分割数组元素
var arr=['a','b','c'];
console.log(arr.join('|'));
//将字符串转为数组--按照某个字符分割字符串
var str='a|b|c';
console.log(str.split('|'));
*/

//练习：使用split将邮箱按照‘@’分割成数组，获取用户名和域名Tom123@163.com
var email='Tom123@163.com';
email=email.split('@');
console.log('用户名：'+email[0]);
console.log('域名：'+email[1]);





