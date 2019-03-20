//在任何文件中都有一个匿名函数
//(function(exports,require,module,_dirname,_dirfilename){

console.log('这是04_2.js模块');
//引入04_1.js模块
require('./04_1.js');//同一级路径./

//创建04_3.js模块，引入到04_2.js中
//引入模块：在当前的文件中执行模块的那个文件，模块里面的变量都是局部变量
//文件，相当于是局部作用域
require('./04_3.js');

//console.log(a);//文件中的变量都是局部变量

//})