var day=3;
switch (day)//使用全等于比较
{
case 0:
	console.log('红烧肉');
	beak;
case 1:
	console.log('豆腐');
	break;
case 2:
	console.log('排骨');
	break;
case 3:
	console.log('豆角');
	break;
case 4:
	console.log('茄子');
	break;
case 5:
	console.log('土豆');
	break;
case 6:
	console.log('鱼');
	break;
default:
	console.log('错误的输入');
}

//1-待付款，2-待发货，3-运输中，4-已签收，5-已取消
//声明变量存储状态码，根据状态码打印不同的显示内容，如果以上都不满足，提示‘无法追踪’

var status=2;
switch (status)
{
case 1:
	console.log('等待付款');
	break;
case 2:
	console.log('等待发货');
	break;
case 3:
	console.log('运输中');
	break;
case 4:
	console.log('已签收');
	break;
case 5:
	console.log('已取消');
	break;
default:
	console.log('无法追踪');
}

//90以上 优秀；80到90 良好；70到80 中等；60到70 及格；60以下 不及格
var score=99;
var scoreInt=parseInt(score/10);
switch (scoreInt)
{
case 10:
	console.log('优秀');
	break;
case 9:
	console.log('优秀');
	break;
case 8:
	console.log('良好');
	break;
case 7:
	console.log('中等');
	break;
case 6:
	console.log('及格');
	break;
default:
	console.log('不及格');
}
