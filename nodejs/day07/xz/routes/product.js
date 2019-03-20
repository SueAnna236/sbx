const pool=require('../pool.js');
const express=require('express');
//创建空路由
var router=express.Router();

//路由
//1.商品列表
router.get('/list',(req,res)=>{
	//获取数据
	var obj=req.query;
	//数据转为整型
	var $pno=parseInt(obj.pno);
	var $count=parseInt(obj.count);
	//如果页码或者数量为空设置默认值
	if (!$pno)
	{
		$pno=1;
	}
	if (!$count)
	{
		$count=10;
	}
	//计算每页开始查询的值
	var $start=($pno-1)*$count;
	//执行SQL语句，查询用户
	pool.query('SELECT * FROM xz_laptop LIMIT ?,?',[$start,$count],(err,result)=>{
		if (err)
		{
			throw err;
		}
		//无论结果是多少条记录，都直接响应给浏览器
		res.send(result);
	});
});

//2.添加商品路由
router.post('/add',(req,res)=>{
	var obj=req.body;
	//console.log(obj);
	//验证是否为空
	//遍历对象：取出每一个属性的值，判断是否为空
	var i=400;
	for (var key in obj)
	{
		i++;
		//获取属性值obj[key]
		//如果属性值是空的，就是提示这个属性是必须的
		if (!obj[key])
		{
			res.send({code:i,msg:key+' required'});
			return;
		}
	}
	var $family_id=obj.family_id;
	var $title=obj.title;
	var $subtitle=obj.subtitle;
	var $price=obj.price;
	var $promise=obj.promise;
	var $spec=obj.spec;
	var $lname=obj.lname;
	var $details=obj.details;
	pool.query('INSERT INTO xz_laptop VALUES(NULL,?,?,?,?,?,?,?,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,?,NULL,NULL,NULL)',[$family_id,$title,$subtitle,$price,$promise,$spec,$lname,$details],(err,result)=>{
		if (err)
		{
			throw err;
		}
		if (result.affectedRows>0)
		{
			res.send({code:200,msg:'add success'});
		}
	});
});

//3.商品详情路由
router.post('/detail',(req,res)=>{
	var obj=req.body;
	//console.log(obj);
	var $lid=obj.lid;
	if (!$lid)
	{
		res.send({code:401,msg:'lid requied'});
		return;
	}
	pool.query('SELECT * FROM xz_laptop WHERE lid=?',[$lid],(err,result)=>{
		if (err)
		{
			throw err;
		}
		if (result.length>0)
		{
			res.send(result);
		}else{
			res.send({code:301,msg:'not found'});
		}
	});
});

//4.商品修改路由
router.get('/update',(req,res)=>{
	var obj=req.query;
	//console.log(obj);
	var i=400;
	for (var key in obj)
	{
		i++;
		if (!obj[key])
		{
			res.send({code:i,msg:key+' required'});
			return;
		}
	}
	var $lid=obj.lid;
	var $family_id=obj.family_id;
	var $title=obj.title;
	var $subtitle=obj.subtitle;
	var $price=obj.price;
	var $promise=obj.promise;
	var $spec=obj.spec;
	var $lname=obj.lname;
	var $details=obj.details;
	pool.query('UPDATE xz_laptop SET family_id=?,title=?,subtitle=?,price=?,promise=?,spec=?,lname=?,details=? WHERE lid=?',[$family_id,$title,$subtitle,$price,$promise,$spec,$lname,$details,$lid],(err,result)=>{
		if (err)
		{
			throw err;
		}
		//console.log(result);
		if (result.affectedRows>0)
		{
			res.send({code:200,msg:'update success'});
		}else{
			res.send({code:301,msg:'update error'});
		}
	});
});

//删除商品
router.get('/delete',(req,res)=>{
	var obj=req.query;
	var $lid=obj.lid;
	if (!$lid)
	{
		res.send({code:401,msg:'lid required'});
		return;
	}
	pool.query('DELETE FROM xz_laptop WHERE lid=?',[$lid],(err,result)=>{
		if (err)
		{
			throw err;
		}
		if (result.affectedRows>0)
		{
			res.send({code:200,msg:'delete success'});
		}else{
			res.send({code:301,msg:'delete erroer'});
		}
	});
});



//导出路由器
module.exports=router;




