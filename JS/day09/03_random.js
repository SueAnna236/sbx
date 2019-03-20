/*
//练习：创建数组，保存10个人的姓名，随机取出4个人（放入到新数组，允许重复）
var arr=['Tom','Jerry','Kate','Ttt','Jddd','Kfff','Tff','Jefffry','Kaddde','Rff'];
var four=[];
//随机取4个
for (var i=0;i<4;i++)
{
	//产生随机数
	four[four.length]=arr[Math.floor(Math.random()*10)];
}
console.log(four);


var arr=['Tom','Jerry','Kate','Ttt','Jddd','Kfff','Tff','Jefffry','Kaddde','Rff'];
//创建一个空数组
var four=[];
for (var i=0;i<10;i++)
{
	//产生随机数，取整，把随机获取的姓名添加到新数组中
	four.push(arr[Math.floor(Math.random()*10)]);
	if (four.length==4)
	{
		break;
	}
}
console.log(four);
*/

//练习：创建数组，保存0到9，A到Z，36个字符随机取4个字符，放入到新数组中，允许重复
var code=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','U','V','W','X','Y','Z'];
var check=[];
//循环产生0到9，把值假如到数组中
for (var j=0;j<10;j++)
{
	code.push(j);
}
//通过Unicode码获取26个字母
//String.fromCharCode() Unicode码对应的字符
for (var i=0;i<4;i++)
{
	check.push(code[Math.floor(Math.random()*(code.length))]);
	//避免重复，取完后，把取出的元素在原数组中删除
}
console.log(check);













