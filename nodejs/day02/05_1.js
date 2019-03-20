//引入05.js模块
//把引入的模块存放到变量中，变量中就保存了导入的内容
var obj=require('./05.js');
console.log(obj);
console.log(obj.num);
console.log(obj.str);
console.log(exports===module.exports);


