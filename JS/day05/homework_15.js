//使用递归计算斐波那契数列的第n项
//1  1  2  3  5  8  13  ......
//从第3项开始，每一项的值=前两项的值相加
function getT(n){
	//如果n为1或者2的时候，都返回1
	if (n==1 || n==2)
	{
		return 1;
	}
	return getT(n-1)+getT(n-2);
}
var rabbit=getT(12);
console.log(rabbit);

//函数----封装旅游的过程
function play(){
	console.log('吃火锅');
	console.log('吃海鲜');
	console.log('潜水');
	return '火锅底料';
}
var res=play();
console.log(res);
