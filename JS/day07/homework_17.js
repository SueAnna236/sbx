//使用遍历数组，翻转数组中的元素['tom','jerry','king','kate']->['kate','king','herry','tom']
var arr=['tom','jerry','king','kate'];
var res=[];

for (var i=arr.length-1;i>=0;i--)
{
	res[res.length]=arr[i];
}
console.log(res);


for (var j=0;j<arr.length;j++)
{
	res[j]=arr[arr.length-j-1];
}
console.log(res);


//选做：冒泡排序，将数组中的元素由大到小排列
var arr=[23,9,78,6,45];
//循环嵌套
//外层循环：循环的轮数--4轮
for (var i=1;i<arr.length;i++ )
{
	//内层循环：每一轮循环的次数
	//第一轮循环4次比较；第二轮循环3次比较......
	//从0开始
	//循环的次数=数组长度-i
	//4  1
	//3  2
	//2  3
	//1  4
	for (var j=0;j<arr.length-i;j++)
	{
		//当前的数和下一个数比较
		var x;
		if (arr[j]<arr[j+1])
		{
			x=arr[j+1];
			arr[j+1]=arr[j];
			arr[j]=x;
		}
	}
}
console.log(arr);

