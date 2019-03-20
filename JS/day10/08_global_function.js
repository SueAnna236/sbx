//全局函数，可以使用global.函数（）来调用。
var a=3.5;
var res=global.parseInt(a);
console.log(res);

var url='http://www.codeboy.com?kw=学子商城';
console.log(global.encodeURI(url));



