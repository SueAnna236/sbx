var pwd='123456';
/*
do
{
	var w=prompt('input a password');
	if (w==pwd)
	{
		alert('login success');
		break;
	}
}
while (true);
*/

do
{
	var w=prompt('input a password');
}
while (w!=pwd);
//'123456' != '123456'
//结果是false，结束循环
alert('login success');
