/*
//使用内置构造函数创建对象
//创建一个空对象
var computer=new Object();
//添加属性
computer.color='white';//.语法表示‘的’
computer.size=27;
computer['price']=4999;
//如果不加引号，认为是一个变量
computer['brand']='dell';
//如果有特殊字符，必须加引号
computer['made-in']='china';
console.log(computer);


//练习：创建一个汽车对象，编号、品牌、颜色、大小、价格
var car=new Object();
car.cid=2;
car.brand='Volvol';
car.color='red';
car.size=15;
car.price=260000;
console.log(car);

//练习：创建一本书对象，编号、标题、作者、出版时间、是否在售
var book=new Object();
book['bid']=6;
book['tital']='Old Man';
book['author']='Z';
book['pubTime']='1986-5-4';
book['isOnsale']=true;
console.log(book);


var school={};
school.sname='tedu';
school['sid']=1000;
console.log(school);
*/

//获取对象的属性值
var country={
	cname:'china',
	area:96000000,
	language:'chinese'
}
//获取属性值，通过属性名
console.log(country.cname);
console.log(country['area']);






