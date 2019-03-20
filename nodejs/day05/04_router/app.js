//引入商品模块路由器
const productRouter=require('./product.js');
const userRouter=require('./user.js');
const express=require('express');
var app=express();
app.listen(3000,()=>{});

//把商品模块下的路由挂载到/product下
//路由url的访问形式：/product/list，/product/delete
//路由最终是给web服务器使用
app.use('/product',productRouter);
app.use('/user',userRouter);


