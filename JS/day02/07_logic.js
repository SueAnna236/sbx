/*
//判断一个人是否处于工作的年龄
//18岁以上，60以下
var age=17;
console.log(age>=18 && age<=60);

//练习：判断分数是否为中等，70~80以下
var score=89;
console.log(score>=70 && score<80);

//练习：判断购票半价的标准 12岁以下，65岁以上
var age2=8;
console.log(age2<=12 || age2>=65);

//练习：取反
console.log(!true);
console.log(!(3<2));

//练习：声明；两个变量存储用户名和密码，如果用户名为root，密码为123456，返回true；否则返回false
var uname='rooot';
var upwd='123456';
console.log(uname=='root' && upwd=='123456');
//查看一下程序是否报错
var a=3;
console.log(a>5 && congsole.log(num));
//a<1 || console.log(num);
*/

//判断是否为成年人
var age3=36;
age3>=18 && console.log('是成年人');
//如果第一个条件为false，才会执行第二个条件
//age3不满足小于18的时候，只能说明大于等于18
age3<18 || console.log('是成年人');
