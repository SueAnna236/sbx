// 1：加载第三方模块 express fs multer
const express = require("express");
const fs = require("fs");
const multer =require("multer");
// 2：创建express服务器
var app = express();
// 3：指定静态目录public
app.use(express.static("public"));
// 4：监听3000端口
app.listen(3000);
// 5：创建multer对象 创建目录upload
var upload = multer({dest: "upload/"});
// 6：接收用户上传文件请求post  /upload-接收用户上传请求 upload.single-一次上传一张图片  mypic-上传图片参数名字name="mypic"
app.post("/upload",upload.single("mypic"),(req,res)=>{
// 7：判断文件大小 如果超过2MB 禁止上传
  var size = req.file.size/1024/1024;
  if (size > 2){
    res.send({code: -1,msg:"上传图片过大，不能超过2MB"});
    return;
  }
// 8：判断文件类型必须是图片  image/gif image/jpg image/png
  var type = req.file.mimetype;
  var i2 = type.indexOf("image");
  if(i2 == -1){
    res.send({code: -2,msg:"上传只能是图片"});
    return;
  }
// 9：创建新的图片文件 原来的文件1.jpg 新文件12938482922.jpg
  // 原来的文件名
  var src = req.file.originalname;
  // 新的文件名
  var fTime = new Date().getTime();//时间戳
  var fRane = Math.floor(Math.random()*9999);//随机数
  var i3 = src.lastIndexOf(".");//后缀的点
  var suff = src.substring(i3,src.length);//找到后缀
  var des = "./upload/" + fTime + fRane + suff;
// 10：将临时文件移动到/upload目录下
  fs.renameSync(req.file.path,des);
// 11：返回上传成功消息即可
  res.send({code: 1,msg:"图片上传成功"});
});