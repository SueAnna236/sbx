//使用随机方法，在30个数字里随机取出7个数字，不能重复，把取出的结果放入到新数组中，按照从小到大排序。
var arr=[];
var sev=[];
//向num数组中添加元素
for (var i=0;i<30;i++)
{
	arr.push(i);
}
//console.log(arr);
//随机取出7个数字
for (var j=0;j<7;j++)
{
	var num=Math.floor(Math.random()*(arr.length));
	//下标：num=Math.floor(Math.random()*(arr.length))
	sev.push(arr[num]);
	//找到随机取出的元素在原数组中的下标
	//arr.indexOf(sev[j])
	//删除原数组中的数据
	//arr.splice(arr.indexOf(sev[j]),1);	
	arr.splice(num,1);
	//排序，有小到大
	sev.sort(function(a,b){
		return a-b;
	});
}
//查看原数据
//console.log(arr);
console.log(sev);

