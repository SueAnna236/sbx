//在JS中，文件中创建的函数和声明的变量都属于是全局对象下的
var a=1;
function fn(){
	console.log(123);
}
console.log(window.a);
window.fn();