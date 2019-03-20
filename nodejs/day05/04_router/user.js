//引用模块
const express=require('express');
//创建空路由器
var router=express.Router();
//往空路由器添加路由
router.get('/list',(req,res)=>{
	res.send('用户列表');
});
router.get('/delete',(req,res)=>{
	res.send('用户删除列表');
});
router.get('/update',(req,res)=>{
	res.send('用户修改列表');
});
//导出路由器
module.exports=router;