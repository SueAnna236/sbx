// 1：创建一个构造函数啊aneObj
var aneObj = function(){
  this.rootx = [];//起点坐标
  this.headx = [];//终点x坐标
  this.heady = [];//终点y坐标
  this.amp = [];//摆动幅度
  this.alpha = 0;//摆动正弦函数返回-1 0 1
}
// 2：为构造函数添加数量num=50
aneObj.prototype.num = 50;
// 3：为构造函数添加初始化方法
aneObj.prototype.init = function(){
  for(var i=0;i<this.num;i++){
    this.rootx[i] = i * 16 + Math.random()*20;
    this.headx[i] = this.rootx[i];
    this.heady[i] = canheight-250+Math.random()*50;
    this.amp[i] = Math.random()*20+20;
  }
}
// 4：为构造函数添加绘制方法
aneObj.prototype.draw = function(){
  ctx2.save();
  ctx2.strokeStyle = "#3b154e";
  ctx2.lineWidth = 20;
  ctx2.globalAlpha = 0.6;
  ctx2.lineCap = "round";
  // 计算-1~1之间周期性数值
  this.alpha += 32*0.0008;
  var l = Math.sin(this.alpha);
  for(var i=0;i<this.num;i++){
    ctx2.beginPath();
    // 重新计算终点坐标
    this.headx[i] = this.rootx[i]+this.amp[i]*l;
    // 移动到起点坐标
    ctx2.moveTo(this.rootx[i],canheight);
    // 绘制贝塞尔 控制点 终点
    ctx2.quadraticCurveTo(this.rootx[i],canheight-100,this.headx[i],this.heady[i]);
    ctx2.stroke();
  }
}
// 5：在index.html中将ane2.js引入
// 6：在main.js中添加对象和方法


