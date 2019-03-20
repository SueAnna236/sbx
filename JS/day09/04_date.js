//创建一个Date对象，存储2018-10-1 18:20:30
var d1=new Date('2018/10/1 18:20:30');
//月份中的1到12，对应的范围0到11
var d2=new Date(2018,9,1,18,20,30);
//直接以数组为参数，表示距离计算机元年的时间（单位是毫秒）
var d3=new Date(10000000000000);
//创建1970-1-2 0:0:0的Date对象
var d4=new Date(1*24*60*60*1000);
//当前的系统时间的Date对象
var d5=new Date();
console.log(d1);
console.log(d2);
console.log(d3);
console.log(d4);
console.log(d5);


