/*
//练习：创建数组，保存所有员工的工资，求所有员工工资的总和、平均工资
var salary=[5000,8000,7500,9000,12000];
//遍历数组中的元素，获取每一个值，再把每一个值加到sum中
for (var sum=0,i=0;i<salary.length;i++)
{
	sum+=salary[i];
	//console.log(salary[i]);
}
console.log(sum);
console.log(sum/salary.length);


//练习：创建函数getIndex，传递2个参数（第一个参数是数组，第二个参数是字符串），返回字符串在数组中的下标;如果找不到下标，返回-1
//创建函数getIndex
function getIndex(arr,value){
	//查找value在arr中的下标
	//遍历数组中的每一个元素，和要查找的值进行比较
	for(var i=0;i<arr.length;i++){
		//arr[i]每一个元素
		//i 每一个元素的下标
		if (arr[i]==value)
		{
			return i;
		}
	}
	//如果所有的都不满足，找不到对应的下标
	return -1;
}
var res=getIndex(['北京','上海','深圳'],'上海');
console.log(res);


//练习：创建数组，包含有多个姓名（有重复的），获取Tom在数组中出现的次数
var sname=['Tom','Tom','Tom','Tom','Tom','Tom','Tom'];
for (var count=0,i=0;i<sname.length;i++)
{
	if (sname[i]=='Tom')
	{
		count++;
	}
}
console.log(count);
*/

//练习：创建数组，包含一组数字，获取数组中的最大值
//[83,17,102,59,44]
var num=[83,17,102,59,44,8];
//用max和数组中的每一个元素进行比较
var max=num[0];
for (var i=1;i<num.length;i++)
{
	//初始化一个变量，保存最大值
	//假设数组的第一个元素就是最大值
	//如果max小于任意一个元素，就把这个元素保存到max中
	if (max<num[i])
	{
		max=num[i];
	}
}
console.log(max);

//将数据降序排列


