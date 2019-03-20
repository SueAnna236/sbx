onmessage = function(e){
  console.log(e.data)
}
postMessage(666)
// 执行5s的程序
// 1：创建变量保存开始时间
var start = new Date().getTime();
// 2：创建do while 循环
do{
// 3：在循环中创建结束时间
var end = new Date().getTime();
//console.log("123")
// 4：如果结束时间减去开始时间>5000
}while(end - start < 5000)