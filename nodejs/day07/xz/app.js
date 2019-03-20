const express=require('express');
//引入用户路由器
const userRouter=require('./routes/user.js');
//引入商品路由器
const productRouter=require('./routes/product.js');
//引入body-parser中间件
const bodyParser=require('body-parser');
const mysql=require('mysql');
//创建服务器
var app=express();
app.listen(3000);

//托管静态资源到public目录
app.use(express.static('public'));

//使用body-parser中间件来将post请求的数据解析为对象
//设置必须放在路由之前，只有设置好了，才能使用req.body
app.use(bodyParser.urlencoded({
	extended:false  //不使用扩展的模块，而是用nodejs提供的querystring模块解析为对象
}));

//使用路由器来管理路由
//把用户路由器挂载到/user下
//访问形式 /user/register
app.use('/user',userRouter);
//把商品路由器挂载到/product下
//访问形式/product/list
app.use('/product',productRouter);























