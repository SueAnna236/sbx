/*
var name='Tom';
var sex='男';
var age=26;
function say(){
	console.log('nihao')
};
module.exports.name=name;
module.exports.sex=sex;
module.exports.age=age;
module.exports.sayHi=say;
//导出函数，就是导出函数的地址
console.log(exports);
*/

var obj={
	name:'jerry',
	age:25,
	sex:'女',
	say:function(){
		console.log('saying');
	}
}
module.exports=obj;
//一旦为module.exports赋值后，module.exports与exports两者就不相等----继承
//console.log(module.exports===exports);//false