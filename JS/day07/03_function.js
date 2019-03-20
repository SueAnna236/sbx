/*
var person={
	name:'Tom',
	age:18,
	say:function(){//是一个方法
		console.log('My name is '+this.name+',I am '+this.age);
	},
	run:function(){
		return person.name+' 正在走路';	
	}
};
//调用对象中的方法
person.say();
//在person对象中添加run方法，返回‘Jerry正在走路’，使用person对象调用run方法，打印
var res=person.run();
console.log(res);
*/

//练习：创建圆(circle)对象，含有属性圆周率PI、半径r，含有方法计算面积（getArea）、计算周长（getLength）
var circle={
	PI:3.14,
	r:5,
	getArea:function(){
		console.log(this.PI*this.r*this.r);
	},
	getLength:function(){
		return 2*this.PI*this.r;
	}
};
circle.getArea();
console.log(circle.getLength());

