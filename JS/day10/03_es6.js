//使用let关键字声明变量
/*
//let声明的变量不存在提升
let a=1;
console.log(a);


//局部作用域
{
	//es6，{}是创建的一个块级作用域，结合let关键字使用，类似于局部作用域
	let num=2;//局部变量，无法被外部访问
	console.log(num);
}


for (var i=1;i<=10;i++)
{
	//
}
//i为结束循环的时候的值11
console.log(i);


for (let i=1;i<=10;i++)
{
	//相当于一个块级作用域，let声明的变量是局部变量
}
console.log(i);

//箭头函数
var arr=[18,37,59,64,81];
arr.sort(function(a,b){
	return a-b;
});
console.log(arr);


var arr=[18,37,59,64,81];
var res=arr.sort((a,b)=>{
	return b-a;
});
console.log(res);


var arr=[18,37,59,64,81];
var res=arr.sort((a,b)=>a-b);//简化代码
console.log(res);


//函数中的参数
function fn(a,b,c=6){
	console.log(a+b+c);
}
fn(2,7,8);


//模板字符串
var now=new Date();
var year=now.getFullYear();
var month=now.getMonth();
var date=now.getDate();
console.log(`今天是${year}年${month}月${date}日
${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
*/


//练习：创建一个对象，包含姓名、性别、年龄、工资；使用模板字符串输出‘我叫**，性别*，年龄*，工资*。’
var person=new Object();
person.name='Tom';
person.sex='1';
person.age=26;
person.salary=8000;
console.log(`我叫${person.name}，性别${person.sex==1?'男':'女'}，年龄${person.age}，工资${person.salary}。`);