//数组是引用类型的数据
var arr1=['a','b','c'];
var arr2=arr1;
arr1[0]='Tom';
console.log(arr1);
console.log(arr2);