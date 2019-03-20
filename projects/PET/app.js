//使用express构建web服务器
const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");

//引入路由模块
const routerData=require("./routes/index_router")
const routerLogin=require("./routes/login");
const routerRegister=require("./routes/register");
const routerProduct=require("./routes/product");

var app = express();
app.listen(3000);

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static("public"));
app.use(cors({
  origin:[
    "http://127.0.0.1:3000",
    "http://localhost:3000",
    "http://127.0.0.1:5500",
    "http:localhost:5500",    
    "http:localhost:3001"
  ],
  credentials: true
}));
/*
const session = require("express-session");
app.use(session({
  secret: "128位随机字符串",
  resave: true,
  saveUniitialized: true,
  cookie: {
    maxAge: 1000*60*60*24
  }
}));
console.log("OK");
*/

//使用路由器来管理路由
app.use("/index",routerData);
app.use("/login",routerLogin);
app.use("/register",routerRegister);
app.use("/product",routerProduct);
