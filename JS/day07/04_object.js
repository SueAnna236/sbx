var person={
	name:'Tom',
	age: 22
};
//把person对象的地址复制一份非person2
//两个变量指向同一个对象
var person2=person;
//通过person改变name的属性值，person2对应的对象也发生了变化
person.name='Jerry';
console.log(person2.name);//Jerry

//练习：通过person2改变对象的age属性，查看person.age是否也发生了变化
person2.age='56';
console.log(person.age);


