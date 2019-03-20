var age=6;
//age>=18? console.log('成年人'):console.log('未成年人');
if(age>=18){
	console.log('成年人');
}else{
	console.log('未成年人');
}

//声明变量保存商品的总额，如果总额满1000，打八折，打印应付金额为；付款，声明变量保存余额，如果余额小于应付的金额，打印‘余额不足’，否则打印‘支付成功’
var total=8888;

if(total>=1000){
	total*=.8;
}
console.log('应付金额为:'+total);
var mon=11565;
if(mon<total){
	console.log('余额不足');
}else{
	console.log('支付成功');
	console.log('当前余额：'+(mon-total));
}

//声明变量保存用户名和密码，如果用户名是root，密码是123456，打印‘登录成功’，否则打印‘登录失败’
var uname='rroot';
var upwd='123456';
if(uname=='root' && upwd=='123456'){
	console.log('登录成功');
}else{
	console.log('登录失败');
}

uname=='root' && upwd=='123456'?console.log('登录成功'):console.log('登录失败');

