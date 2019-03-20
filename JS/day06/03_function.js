/*
//匿名函数的自调用
var fn=function(){

}
fn();

function fun(){

}
fun();
//匿名函数自调用
(function(){
	console.log(123);
})();
*/

//轮播图
(function (){
	//局部作用域，避免全局污染
	var num=1;
})();



//排行榜
(function (){
	var num=2;
})();







