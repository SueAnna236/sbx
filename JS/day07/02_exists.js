//
var person={
	name:'Tom',
	age:20,
	sex:'男'
};
/*
//检测对象中是否含有某个属性
console.log('name' in person);
console.log('pid' in person);

console.log(person.hasOwnProperty('age'));
//练习：检测是否含有birthday属性
console.log(person.hasOwnProperty('birthday'));
*/
//如果打印不存在的属性，结果是undefined
console.log(person.phone);
//如果访问一个属性对应的属性值，如果属性值是undefined，说明属性不存在
//使用获取的属性值和undefined进行比较
//如果null和undefined比较，==->true，自动转换；使用===，类型和值都相等
console.log(person.phone===undefined);//false->存在，true->不存在








