var weekday=8;
if(weekday==0){
	console.log('火锅');
}else if(weekday==1){
	console.log('自助牛排');
}else if(weekday==2){
	console.log('青菜');
}else if(weekday==3){
	console.log('烧烤');
}else if(weekday==4){
	console.log('面金条');
}else if(weekday==5){
	console.log('吃鸡');
}else if(weekday==6){
	console.log('海鲜');
}else{
	console.log('输入错误');
}

//1-待付款，2-待发货，3-运输中，4-已签收，5-已取消
//声明变量存储状态码，根据状态码打印不同的显示内容，如果以上都不满足，提示‘错误状态码’
var status=5;
if (status==1)
{
	console.log('等待付款');
}else if (status==2)
{
	console.log('等待发货');
}else if (status==3)
{
	console.log('运输中');
}else if (status==4)
{
	console.log('已签收');
}else if (status==5)
{
	console.log('已取消');
}else {
	console.log('错误状态码');
}

//90以上 优秀；80到90 良好；70到80 中等；60到70 及格；60以下 不及格

var score=95;
if (score>=90)
{
	console.log('优秀');
}else if (score>=80)//score<90
{
	console.log('良好');
}else if (score>=70)//score<80
{
	console.log('中等');
}else if (score>=60)//score<70
{
	console.log('及格');
}else
{//score<60
	console.log('不及格');
}

//练习：分数从低到高判断
if (score<60)
{
	console.log('不及格');
}else if (score<70)
{
	console.log('及格');
}else if (score<80)
{
	console.log('中等');
}else if (score<90)
{
	console.log('良好');
}else{
	console.log('优秀');
}
