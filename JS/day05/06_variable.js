/*
//变量提升
var num1=1;
console.log(num1);


//在整个程序执行前，首先检查所在作用域下使用var关键字声明的变量，把声明提升到最前边，不会提升赋值，赋值还是在原来的位置
console.log(num1);//undefined
var num1=1;


function fn1(){
	var num;//在所在的作用域提升声明
	console.log(num2);
	num2=2;
}
fn1();//undefined


//结果是多少？
var a=3;
function fn(){
	//局部作用域，检查var声明的变量
	var a;
	//当前作用域下有变量a，所以不会去到上一级去找
	console.log(a);//undefined
	var a=5;
}
fn();

var a=3;
function fn(){
	//当前作用域下没有变量a，所以会去到上一级去找
	console.log(a);//3
	a=5;
}
fn();


var b=5;
function fn2(num){
	num++;
	//console.log(num);//6
}
//把b的值以实参的形式传递
//拷贝一份b的值给fn2，和之前的b没有任何关系
fn2(b);
console.log(b);
*/

//原始类型数据的存储
var c=1;
//拷贝一份c给d
var d=c;
d=2;
console.log(c);
