const express = require('express');
const port = 3000;

var app = express();

app.listen(port,()=>{
  console.log("服务器开始监听"+port);
});

// 使用CookieParser中间件，读取请求头部的Cookie头部，
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// 自定义的中间件：向客户端发送一个Cookie
app.use(function(req, res, next){
  console.log('COOKIE:',req.cookies)
  //在响应消息中追加一个cookie
  res.cookie('siteName','TarenaSite');
  next();
})

// 将public目录下的静态内容公开
app.use(express.static('public'));


// 创建路由，向客户端输出所有的产品列表
app.get('/product/list',(req,res)=>{
  var html = `
    <html>
      <body>
        <h2>产品列表</h2>
        <a href="/product/detail/2">查看2号商品详情</a><br>
        <a href="/product/detail/3">查看3号商品详情</a><br>
        <a href="/product/detail/4">查看4号商品详情</a><br>
        <h2>根据浏览历史，进行产品推荐</h2>`;
  var pid = req.cookies.lastViewedPid;
  if(pid === '2'){
    html += `<a href="#">查看22商品详情</a><br>`
    html += `<a href="#">查看222商品详情</a><br>`
  }else if(pid === '3'){
    html += `<a href="#">查看33商品详情</a><br>`
    html += `<a href="#">查看333商品详情</a><br>`
  }else if(pid === '4'){
    html += `<a href="#">查看44商品详情</a><br>`
    html += `<a href="#">查看444商品详情</a><br>`
  }else{
    html += `<span>请浏览我们的商品</span>`
  }
  html += `</body>
    </html>
  `;
  res.send(html);
});

// 创建路由，向用户输出某个商品的详情
app.get('/product/detail/:pid',(req,res)=>{
  // 向客户端发送产品详情之前，需要记录最新浏览的商品的编号
  res.cookie('lastViewedPid', req.params.pid, {
    expires: new Date('2020-1-1')
  });
  var html = `
    <html>
      <body>
        <h2>${req.params.pid}号商品详情</h2>
        ......
        <br>
        <a href="/product/list">返回产品列表</a>
      </body>
    </html>
  `;
  
  res.send(html);
});

// 使用中间件：为每个新来的客户端分配新的Session空间
// 为每个能出示SessionID的客户端，查找对应的Session空间
// express-session
const session = require('express-session');
app.use(session({
  secret: 'xyz123', //秘钥 //数字签名 = sessionid + secret
  resave: true, //每一次请求之后是否重新存储session数据
  saveUninitialized: true //第一次初始化的session数据是否保存
}));

// 创建路由，用于验证用户的登录信息
app.get('/login', (req, res)=>{
  var uname = req.query.uname;
  if(uname == 'dingding' || uname == 'dangdang'){//存数据
    // 登录成功，把登录用户名保存在服务器端的session中
    req.session['loginUname'] = uname;
    res.send({code: 200});
  }else{
    res.send({code: 400});
  }
});

// 路由：向客户端返回登录信息
// 无需客户端提交请求数据——请求头中已有SessionID
// 服务器会根据此id自动在该客户端对应的服务器端session空间中查找其数据
app.get('/logininfo', (req, res)=>{
  res.send(req.session['loginUname']);//取数据
})