// 海葵对象
// 1：创建一个海葵 构造函数 aneObj
var aneObj = function(){
  this.x = [];//所有海葵x坐标 y的起点600
  this.len = [];//所有海葵高度 计算出终点的y
}
// 2：为构造函数原型添加init函数
aneObj.prototype.init = function(){
  for(var i=0;i<this.num;i++){
    this.len[i] = 230 + Math.random()*50;
    this.x[i] = i * 16 + Math.random()*20;
  }
}
// 3：为构造函数原型添加 draw函数
aneObj.prototype.draw = function(){
  // 3.1：保存画笔的状态
  ctx2.save();
  ctx2.strokeStyle = "#3b154e";
  ctx2.globalAlpha = 0.6; //透明度
  ctx2.lineWidth = 20;  //描边宽度
  ctx2.lineCap = "round"; //圆角
  // 3.2：创建循环50次
  for(var i=0;i<this.num;i++){
    ctx2.beginPath();
    // 3.3：移动起始点
    ctx2.moveTo(this.x[i],canheight);
    // 3.4：直线画终点
    ctx2.lineTo(this.x[i],canheight-this.len[i]);
    // 3.5：描边
    ctx2.stroke();
  }  
  // 3.6：恢复画笔状态
  ctx2.restore();
}
// 4：为构造函数原型添加num变量
aneObj.prototype.num = 50;
// 5：将ane.js添加到index.js文件中

// 6：在main.js中创建aneObj对象并且调用相关方法
