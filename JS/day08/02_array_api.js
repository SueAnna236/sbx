/*
//1、将数组转为字符串
var arr=['a','b','c'];
console.log(arr.join(''));


//2、合并多个数组中的元素
var arr1=['Tom','Jerry'];
var arr2=['Kate','David'];
var arr3=['King','Cris'];
console.log(arr1.concat(arr2,arr3));


//3、截取数组中的元素
var arr=['推荐','时尚','科技','热点','体育']
console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-3));//倒数第3个
console.log(arr.slice(-3,-1));
*/

//4、删除(添加)数组中的元素
var arr=['推荐','时尚','科技','热点','体育']
//console.log(arr.splice(2));//返回的是删除的元素
//console.log(arr.splice(1,3));//从下标开始往后删除3个元素
console.log(arr.splice(1,1,'健康','娱乐','明星'));//在下标1的位置删除1个元素，添加元素
//练习：删除时尚，再添加新闻
//console.log(arr.splice(1,1,'新闻'));
//console.log(arr);

/*
//5、翻转数组中的元素
var arr=['a','b','c','d','e'];
console.log(arr.reverse());


//6、数组排序
var arr=[23,6,78,9,45];
//默认按照Unicode码从从小到大排序
//console.log(arr.sort());
console.log(arr.sort(function(a,b){
	return a-b;
}));
console.log(arr.sort(function(a,b){
	return b-a;
}));
*/
/*
//7、在数组的最后添加元素
var arr=['推荐','时尚','科技','热点','体育'];
//console.log(arr.push('小说'));//返回添加后数组的长度
//console.log(arr);

//8、在数组中最后删除元素
//console.log(arr.pop());
//console.log(arr);

//9、在数组的最前边添加元素
//console.log(arr.unshift('美食'));
//console.log(arr);

//10、在数组的开头删除元素
console.log(arr.shift());
console.log(arr);
*/