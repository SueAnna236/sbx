//引入的不带路径的circle目录模块
//引入后，模块中有导出的方法，所以需要变量保存
var res=require('circle');
//调用导出的对象中的方法
console.log(res.getArea());
console.log(res.getLength().toFixed(2));