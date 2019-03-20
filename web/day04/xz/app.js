const express=require('express');

const bodyParser=require('body-parser');

const userRouter=require('./routes/user.js');

const mysql=require('mysql');

const demo=require('./routes/demo.js');
//创建服务器
var app=express();

app.listen(3000);

//托管静态资源
app.use(express.static('public'));
app.use(express.static('./myEx'));

app.use(bodyParser.urlencoded({

	extended:false
}));

app.use('/demo',demo);

app.use('/user',userRouter);


