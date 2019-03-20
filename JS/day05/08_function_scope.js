//函数声明提升
//在程序执行前，函数创建也会提升到最前边
//如果两个函数名称相同，后边创建的函数会覆盖前边的函数
fn();//2
function fn(){
	console.log(1);
}
fn();//2
function fn(){
	console.log(2);
}










