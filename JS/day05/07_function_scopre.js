/*
//函数的作用域
//在全局作用域下创建的函数
//可以在任意位置调用
function fn(){
	console.log(1);
}
function func(){
	//myfun是在函数内部创建的函数
	//局部作用域下的函数--在函数内部调用
	function myfun(){
		console.log(2);
	}
	myfun();
}
fn();
func();
*/

var num=0;
function fn0(){
	var num=1;
	function fn1(){
		var num=2;
		function fn2(){
			var num=3;
			console.log(num);//3
		}
		//只能在所在的作用域调用
		fn2();
	}
	fn1();
}
fn0();




