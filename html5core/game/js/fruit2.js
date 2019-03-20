// 1：创建食物构造函数 fruitObj
var fruitObj = function(){
  this.blue = new Image();  //蓝色图片
  this.orange = new Image();  //橙色图片
  this.x = [];  //食物坐标
  this.y = [];
  this.l = [];  //图片的宽度 高度
  this.spd = [];  //速度 出生速度 向上漂
  this.fruitType = [];  //图片类型 blue orange
  this.aneNo = [];  //第几个海葵
  this.alive = [];  //状态 true false
}
// 2：为构造函数原型添加数量 num= 30
fruitObj.prototype.num = 30;
// 3：为构造函数原型添加初始化方法
fruitObj.prototype.init = function(){
  for(var i=0;i<this.num;i++){
    // 状态
    this.alive[i] = false;
    this.x[i] = 0;
    this.y[i] = 0;
    this.l[i] = 0;
    this.spd[i] = Math.random()*0.17+0.02;
  }
  // 循环外部初始化两张图片 下载
  this.blue.src = "src/blue.png";
  this.orange.src = "src/fruit.png";
}
// 4：为构造函数原型添加绘制方法
fruitObj.prototype.draw = function(){
  // 1：创建循环
  for(var i=0;i<this.num;i++){
    // 2：依据食物的活动状态 true
    if(this.alive[i]){
      // 3：判断当前食物类型
      if(this.fruitType[i]  == "blue"){
        var pic = this.blue;
      }else{
        var pic = this.orange;
      }
      // 4：先由小变大  this.l+=this.spd
      if(this.l[i] <= 14){
        // 找到海葵的下标
        var no = this.aneNo[i];
        // 海葵的头部位置
        this.x[i] = ane.headx[no];
        this.y[i] = ane.heady[no];
        // 由小变大
        this.l[i] += this.spd[i];
      }else{  
        // 5：向上漂浮 
        this.y[i] -= this.spd[i]*3;  
      }
      // 6：绘制图片
      ctx2.drawImage(pic,this.x[i],this.y[i],this.l[i],this.l[i]);
      // 7：如果当前食物漂浮出画布，将当前食物状态改为false
      if(this.y[i] < 0){
        this.alive[i] = false;
        
      }
    }    
  }
}
// 5：将文件fruit.js添加到index.html中
// 6: 在main.js中创建fruitObj对象并且调用响应方法

// 8：创建全局函数，监听画布上食物活动状态量
function fruitMonitor(){
  var sum = 0;
  for(var i=0;i<fruit.num;i++){
    if(fruit.alive[i]){
      sum++;
    }
  }
  if(sum < 15){
    sendFruit();
    return;
  }
}
// 9：创建全局函数，如果不足15个活动食物
function sendFruit(){
  for(var i=0;i<fruit.num;i++){//循环
    if(false == fruit.alive[i]){//挑一个不活动的食物
      fruit.born(i);//出生
      return;
    }
  }
}
// 10：使用原型方法生出
fruitObj.prototype.born = function(i){
  var idx = Math.floor(Math.random()*ane.num);
  this.aneNo[i] = idx;
  this.l[i] = 0;
  this.alive[i] = true;
  this.fruitType[i] = Math.random() < 0.9 ? "blue" : "orange";
}
// 11：在main.js gameloop调用监听画布方法