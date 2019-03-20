/*//变量的命名规则
var a1=1;
//var 1a=2; 不能以数字开头
var $a=3;	//不允许特殊字符开头，但允许$
var __a=4;
console.log(__a);


var userName='Tom';	//驼峰命名法
var user_name='Jerry';	//下划线命名法
//关键字和保留字不能作为变量名 var class=1;


//一次性声明多个变量
var dname='研发部',did=20;
console.log(dname);
console.log(did);

//练习：声明书的标题、作者、价格、出版时间
var title='老人与海',author='海明威',price='45.68',pubTime;
console.log(title);
console.log(author);
console.log(price);
console.log(pubTime);	//undefined
*/

//声明变量未赋值
var num;
//使用num存储数字1
num=1;
num='hello';
num=false;
console.log(num);
