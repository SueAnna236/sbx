//使用express构建web服务器 --11:25
const express = require('express');
const bodyParser = require('body-parser');
/*引入路由模块*/
const index=require("./routes/index_router");
const details=require("./routes/details_router");
const products=require("./routes/products_router");

const cors=require("cors");

var app = express();

// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });

var server = app.listen(3000);
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static('public'));

app.use(cors({
  origin:"http://localhost:8080"
}))
/*使用路由器来管理路由*/
app.use("/index",index);

//http://localhost:3000/details?lid=5
app.use("/details",details);

//http://localhost:3000/products/?kwords=i5&pno=0
app.use("/products",products);

