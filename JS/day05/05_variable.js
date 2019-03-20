/*
//变量的作用域
//函数外部声明的变量，称为全局变量
//可以在任意位置使用
var num1=1;
function fn1(){
	//函数内部声明的变量，称为局部变量
	//只能在函数内部使用
	var num2=2;
	console.log(num1);
	console.log(num2);
}
console.log(num1);
//console.log(num2);
fn1();


//全局变量
var num3=3;
function fn2(){
	//没有使用var关键字声明的变量是全局变量
	num3=5;
}
//调用函数，函数体中的代码才会执行
fn2();
console.log(num3);
*/

var num4=4;
function fn3(){
	var num4=7;
	//首先在当前的作用域下寻找
	console.log(num4);
}
//fn3();
console.log(num4);



