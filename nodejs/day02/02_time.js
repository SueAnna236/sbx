/*
//1、一次性定时器
//开启，把开启的定时器放入到变量中，便于清除
var timer=global.setTimeout(()=>{
	console.log('beng');
},3000);//第二个参数是间隔的时间
//清除定时器
global.clearTimeout(timer);



//2、周期性定时器
var timer=setInterval(()=>{
	console.log('ding');
},2000);
clearInterval(timer);
*/


//练习：使用周期性定时器每隔3秒钟打印‘hello’，打印3次后，清除定时器
var i=0;
var timer=setInterval(()=>{
	//在回调函数内使用var声明的变量都是局部变量
	console.log('hello');
	i++;
	if (i==3)
	{
		clearInterval(timer);
	}
},3000);



