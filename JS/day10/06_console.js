/*
global.console.log(123);
global.console.info('hello');
global.console.error(123);
global.console.warn(123);
global.console.
*/
//计算for循环的耗时
global.console.time('for-loop');//计时开始
for (let i=1;i<=10000;i++)
{
	
}
global.console.timeEnd('for-loop');//计时结束


//练习：使用计时查看while和do-while两个循环1000次的耗时
global.console.time('while-loop');//计时开始
var i=1
while (i<=10000)
{
	i++;
}
global.console.timeEnd('while-loop');//计时结束

global.console.time('do-while-loop');//计时开始
var j=1;
do
{
	j++;
}
while (j<=10000);
global.console.timeEnd('do-while-loop');//计时结束