
//在1到33随机取6个数，不能重复；在1到16随机取1个数；第二次取的值放在最后
var red=[],douball=[];
for (let i=1;i<=33;i++)
{
	red.push(i);
}
/*
for (let j=1;j<=16;j++)
{
	blue.push(j);
}
*/
for (let r=1;r<=6;r++)
{
	//找出随机取得的下标
	var rnum=Math.floor(Math.random()*(red.length));
	//将随机取得数字加入到空数组的最后
	douball.push(red[rnum]);
	//将随机取得的数字在原数组red里删除
	red.splice(rnum,1);
	douball.sort((a,b)=>a-b);
}
//随机取一个蓝色的球
//取1到16的随机数，向上取整
var blue=Math.ceil(Math.random()*16);
douball.push(blue);
/*
for (let b=1;b<=1;b++)
{
	bnum=Math.floor(Math.random()*(blue.length));
	douball.push(bnum);
*/
console.log(douball);


//写一段代码实现下面的倒三角形
//*****
// ****
//  ***
//   **
//    *
for(i=5;i>0;i--){
		var s='';
		var m='';
		for (k=0;k<5-i;k++)
		{
			s+=' ';
		}
		for(j=i;j>0;j--){
		   m+="*";
		}
		console.log(s+m);
	}


//用原生js写一段代码实现下面的额倒三角
//*********
// *******
//  *****
//   ***
//    *
for(i=5; i>=1;i--){
	var s='',m='';
    for(var k=0; k<5-i;k++){
		s+=' ';
    }
    for(j = i*2-1; j>=1;j--){
        m+='*';
    }
    console.log(s+m);
}