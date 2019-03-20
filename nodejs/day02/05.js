//(function(exports,require,module,__dirname,__dirfilename){
//任意一个模块中，我们所写的代码都默认被一个构造函数所包含
//require 引入模块
//__filename 文件的完整路径和文件的名称
console.log(__filename);
//__dirname 文件的完整路径
console.log(__dirname);
//exports 导出
//console.log(exports);
//module 模块
//当前的模块中的变量、函数都属于局部作用域下的，不能被外部所使用，如果要被外部使用，就需要将它导出
//要导出的内容----对象
var a=1;
var b='hello';
module.exports.num=a;
module.exports.str=b;
//console.log(module.exports);
console.log(exports);//继承
//})