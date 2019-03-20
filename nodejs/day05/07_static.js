const express=require('express');
var app=express();
app.listen(3000,()=>{});
//练习：托管到files目录下，如果files下和public下出现相同名称的文件，显示那个文件？
app.use(express.static('files'));


//如果浏览器请求静态文件（HTML、css、js、图像...）--相对于服务器端来说的，自动去到某个目录下查找，这个目录，就称为静态目录，用于托管静态资源
//内置的中间件
app.use(express.static('./public'));

//练习：在静态目录static下，托管文件login.html，然后使用浏览器请求





