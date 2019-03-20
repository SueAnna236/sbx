//递归:在函数内部调用自身
//递归产生无限循环
var i=0;
function say(){
	i++;//每次调用函数都会执行自增
	alert('long ago');
	//如果i为3的时候，终止函数的执行（return）
	if (i==3)
	{
		return;
	}
	say();
}
say();
