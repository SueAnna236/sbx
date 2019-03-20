// 开发微信测试账户聊天机器人
// 1：加载两个模块 express wechat
const express = require("express");
const wechat = require("wechat");
// 2：创建配置对象
var config = {
  appid: "wx794a003e632b2c78",
  token: "weixin"
}
// 3：创建express服务器并且制定3000端口
var app = express();
app.listen(3000);
// 注意事项：ngrok.exe窗口不能关闭
// 4：接收get / 微信测试
app.get("/",wechat(config,(req,res)=>{
  // 4.1：接收微信服务器测试数据
  var msg = req.weixin.Content;
  console.log("4.1:"+msg);
  // 4.2：回复微信服务器测试数据
  res.reply("hi");
}))
// 5：接收post / 微信聊天
app.post("/",wechat(config,(req,res)=>{
  // 5.1：获取手机用户聊天信息
  var msg = req.weixin.Content;
  if(msg === undefined){
    res.reply(":(");
    return;
  }
  // 5.2：回复用户聊天信息
  var html = "测试";
  if(msg.indexOf("hi")!=-1){
    html = "您好！";
  }else if(msg.indexOf("bye")!=-1){
    html = "再见！";
  }else{
    html = "?????"
  }
  res.reply(html)
}))