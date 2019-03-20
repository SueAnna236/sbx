/*
创建服务器，托管一个静态文件
表单	输入身份证号	查询按钮->服务器获取身份证号（在中间件）；再次使用中间件截取身份证号中的年月日，性别，在路由中响应这些信息。
*/

const express=require('express');
const querystring=require('querystring');
var app=express();
app.listen(3000,()=>{});

app.use(express.static('./public'));


/*
var str='',y,m,d,sex;
var obj={};
app.use('/cardid',(req,res,next)=>{
	obj=req.query;
	str=req.query.cardnum;
	console.log(str);
	next();
});

app.use('/cardid',(req,res,next)=>{
	y=str.slice(6,10);
	m=str.slice(10,12);
	d=str.slice(12,14);
	sex=Number(str.slice(16,17));
	if (sex%2==0)
	{
		sex='女';
	}else{
		sex='男';
	}
	console.log(sex);
	next();
});

app.get('/cardid',(req,res,next)=>{
	res.send('身份证号码为：'+str+'，出生于'+y+'年'+m+'月'+d+'日，性别为：'+sex);
});
*/



var str;
var obj;
var id;

app.use('/cardid',(req,res,next)=>{
	//获取浏览器请求的数据--post
	req.on('data',(buf)=>{
		str=buf.toString();
		obj=querystring.parse(str);
		//console.log(obj.cardnum);
		id=obj.cardnum;
		next();		
	});
	
});
//中间件2：截取身份证的年月日，性别，最终给路由使用
var y,m,d,sex;
app.use('/cardid',(req,res,next)=>{
	var y=id.slice(6,10);
		m=id.slice(10,12);
		d=id.slice(12,14);
		sex=Number(id.slice(16,17));
		next();
});

//根据表单的请求，来写路由
app.post('/cardid',(req,res)=>{
	var s='';
		if (sex%2==0)
		{
			s='女';
		}else{
			s='男';
		}
		console.log(s);
		res.send('身份证号是：'+str+'，出生于：'+y+'年'+m+'月'+d+'日，性别：'+s);

});
