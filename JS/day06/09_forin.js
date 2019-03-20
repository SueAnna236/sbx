/*
//遍历对象(循环)属性
var emp={
	eid:5,
	ename:'Kate',
	sex:0,
	birthday:'1997-7-1',
	salary:7000,
	phone:'18211111111'
};
//for-in
//in前的变量key表示要遍历的所有属性名
//in后面表示要遍历的对象
for(var key in emp)
{
	console.log(key+':'+emp[key]);
}
*/

//练习：遍历之前写的书对象的属性
var book={
	bid:5,
	title:'javascript',
	author:'L',
	pubTime:'2014-10-5',
	isOnsale:true
};
for(var key in book){
	console.log(key+':'+book[key]);
}


//练习：遍历之前写的汽车对象的属性
var car=new Object();
car.cid=2;
car.brand='Volvol';
car.color='red';
car.size=15;
car.price=260000;
for(var p in car){
	console.log(p+':'+car[p]);
}









