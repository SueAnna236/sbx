/*
console.log(1>3);
console.log(2=='2');//true，比较两个值是否相等
console.log(2==='2');//false，比较值和类型是否相等


console.log(3>'10');//false，字符串转成了数字
console.log('3'>'10');//true，都是字符串，比较的是Unicode编码
console.log('3'.charCodeAt());//51
console.log('10'.charCodeAt());//49，转‘1’的Unicode码
console.log('乾隆'>'康熙');//false
console.log('乾'.charCodeAt());
console.log('康'.charCodeAt());
console.log('张无忌'>'张翠山');
*/

console.log(3>'10a');//flase
console.log(3<'10a');//false
console.log(3=='10a');//false
console.log(NaN==NaN);//false
console.log(3!='10a');//true