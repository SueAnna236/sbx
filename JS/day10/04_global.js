//在nodejs下，每一个文件就相当于一个文件作用域----局部作用域
//声明一个变量
//声明的变量是局部变量，而不是全局变量
var a=1;
//fn是局部变量下的函数，不能使用global来访问
function fn(){
	console.log(456)
}
//是否能够使用global来访问
console.log(global.a);
console.log(global.fn());

