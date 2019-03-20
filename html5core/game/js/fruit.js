// 1：创建食物构造函数 fruitObj
var fruitObj = function(){
  this.blue = new Image();  //蓝色图片
  this.orange = new Image();  //橙色图片
  this.x = [];  //食物坐标
  this.y = [];
  this.l = [];  //图片的宽度 高度
  this.spd = [];  //速度 出生速度 向上漂
  this.fruitType = [];  //图片类型 blue orange
}
// 2：为构造函数原型添加数量 num= 30
fruitObj.prototype.num = 30;
// 3：为构造函数原型添加初始化方法
fruitObj.prototype.init = function(){
  for(var i=0;i<this.num;i++){
    // 1：坐标
    this.x[i] = Math.random()*canwidth;
    this.y[i] = Math.random()*canheight;
    // 2：宽度
    this.l[i] = 0;
    // 3：速度
    this.spd[i] = Math.random()*0.17+0.02;
    // 4：类型
    this.fruitType[i] = Math.random() < 0.9 ? "blue" : "orange";
  }
  // 5：循环外部初始化两张图片 下载
  this.blue.src = "src/blue.png";
  this.orange.src = "src/fruit.png";
}
// 4：为构造函数原型添加绘制方法
fruitObj.prototype.draw = function(){
  // 1：创建循环
  for(var i=0;i<this.num;i++){
    // 2：依据食物类型判断那张图片
    if(this.fruitType[i]  == "blue"){
      var pic = this.blue;
    }else{
      var pic = this.orange;
    }
    // 3：先由小变大  this.l+=this.spd
    if(this.l[i] <= 14){
      this.l[i] += this.spd[i];
    }else{
      // 4：向上漂浮  -y
      this.y[i] -= this.spd[i]*10;
    }
    // 5：绘制图片
    ctx2
    .drawImage(pic,this.x[i],this.y[i],this.l[i],this.l[i])
  }
}
// 5：将文件fruit.js添加到index.html中
// 在main.js中创建fruitObj对象并且调用响应方法