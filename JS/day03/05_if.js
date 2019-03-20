//if语句
var total=31;
//如果订单满30减15
if(total>=30){
	//在当前基础上减15
	total-=15;//total=total-15;
}
console.log(total);

//练习：满1000打八折，计算应付金额
var totalAll=500;
if(totalAll>=1000){
	totalAll*=.8;
}
console.log('应付金额'+totalAll);

//练习：在个人签名中，如果签名为空，显示‘这家伙很懒’；有签名，显示签名内容
var txt='';
if(txt==''){
	console.log('这家伙很懒');
}
console.log(txt);
//出现false的特殊情况:undefined、null、NaN、0、''
var a;
if(a){
	console.log('hello');
}
if(undefined){
	console.log('hello');
}
if(null){
	console.log('hello');
}
if(NaN){
	console.log('hello');
}
if(0){
	console.log('hello');
}
if(''){
	console.log('hello');
}
if(6){
	console.log('hello');
}
if(!''){
	console.log('hello');
}

//练习：声明一个变量，如果变量为空，打印‘用户名不能为空’
var userName='';
if(userName=='')
	console.log('用户名不能为空');

if(!userName){
	console.log('用户名不能为空');
	console.log('请输入用户名');
}
