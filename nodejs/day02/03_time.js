/**/
//3、定时器 立即执行 process对象的nextTick----将来的行为
//一个事件的最后
process.nextTick(()=>{
	console.log(1);
});


//4、立即执行计时器----将来的行为
//下一个事件的开始
var timer=setImmediate(()=>{
	console.log(2);
});



//clearImmediate(timer);

//当前执行的
console.log(3);


