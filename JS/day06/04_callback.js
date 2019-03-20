//
/*
function fn(a,b){
	return a+b;
}
fn(1,2);


//匿名函数：function(){}
//回调函数：匿名函数以实参的形式传递给形参
function fn(cb){
	//cb=function(){return 1;}
	//把传递的匿名函数调用
	//把匿名函数的调用结果存储到变量num中
	var num=cb();
	console.log(num);
}
fn(function(){
	return 1;
});


//练习：创建函数addNum，传递2个参数，参数是以匿名函数的形式传递，打印2个匿名函数调用的和
function addNum(a,b){
	//a()调用第一个匿名函数：执行第一个匿名函数体中的内容，返回结果是5
	//b()调用第二个匿名函数：执行第二个匿名函数体中的内容，返回的结果是7
	var sum=a()+b();
	console.log(sum);
}
addNum((function(){
	//函数体中可以写多行代码
	return 5
}),function(){
	return 7
});
*/

function fn(cb){
	//调用传递的匿名函数
	//调用函数：执行函数体中的代码
	cb();
}
//参数中可以传递多行代码----使用匿名函数
fn(function(){
	var num1=1;
	var num2=2;
	console.log(num1+num2);
	console.log(num1-num2);
});


