
//猜数字游戏
//声明变量保存数字
var i=5;
while (true)
{
	//获取输入数字,字符串类型的数据
	//如果输入的值里含有非数字，比较的过程中，会变成NaN,比较的时候都是false
	var num=prompt('input a number');
	if (num>i)
	{
		alert('big');
	}else if (num<i)
	{
		alert('small');
	}else{
	alert('right');
	break;	
	}
}
