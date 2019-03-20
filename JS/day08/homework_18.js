//将一句英文字符串中单词首字母转为大写，其余转为小写。‘wE ARe family’->‘We Are Family’
var str='wE ARe family';
/*
str=str.replace(/we/gi,'We');
str=str.replace(/are/gi,'Are');
str=str.replace(/family/gi,'Family');
console.log(str);
*/
//分割成多个英文单词，把每一个英文单词转换
var arr=str.split(' ');
//遍历数组中的元素,得到每一个英文单词
for (var i=0;i<arr.length;i++)
{
	//每一个元素arr[i]
	//获取第一个字符,转为大写
	var first=arr[i].slice(0,1).toUpperCase();
	var last=arr[i].slice(1).toLowerCase();
	//转换的结果替换数组中的元素
	arr[i]=first+last;
}
//把数组转为字符串，用空格切割数组元素
console.log(arr.join(' '));



