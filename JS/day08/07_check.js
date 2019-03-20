var code='dFov';
while (true)
{
	//获取输入的内容
	var str=prompt('please input 4 codes');
	//输入的内容和初始化的字符比较
	//把输入的内容和初始化的字符都转成大写或小写
	if (str.toLowerCase()==code.toLowerCase())
	{
		alert('login success');
		break;
	}
}

