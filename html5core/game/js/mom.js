// 1：创建一个大鱼的构造函数
var momObj = function(){
  // 1：眼睛[] 身体[] 尾巴[]
  this.bigEye = [];
  this.bigBody = [];
  this.bigTail = [];
  // 2：坐标
  this.x;
  this.y;
  // 3：角度
  this.angle;  
  // 4：为了完成大鱼眼睛图片切换定义三个变量
  this.bigEyeIndex = 0; //下标
  this.bigEyeStart = 0; //开始时间
  this.bigEyeEnd = 3000;  //结束时间
  // 5：大鱼的身体的图片切换
  this.bigBodyIndex = 0;
  this.bigBodyStart = 0;
  this.bigBodyEnd = 3000;
  // 6：大鱼尾巴的图片切换
  this.bigTailIndex = 0;
  this.bigTailStart = 0;
  this.bigTailEnd = 300;
}
// 2：为大鱼构造函数添加初始化方法
momObj.prototype.init = function(){
  // 2.1：下载所有大鱼图片
  for(var i=0;i<2;i++){
    this.bigEye[i] = new Image();
    this.bigEye[i].src = "src/bigEye"+i+".png";
  }
  for(var i=0;i<8;i++){
    this.bigBody[i] = new Image();
    this.bigBody[i].src = "src/bigSwim"+i+".png";
  }
  for(var i=0;i<8;i++){
    this.bigTail[i] = new Image();
    this.bigTail[i].src = "src/bigTail"+i+".png";
  }
  // 2.2：大鱼坐标画布居中
  this.x = canwidth*0.5;
  this.y = canheight*0.5;
  // 2.3：角度为0
  this.angle = 0;
}
// 3：为大鱼构造函数添加绘制方法
momObj.prototype.draw = function(){
  // 3.01：完成大鱼眼睛的图片切换
  //累加眼睛的计时时间
  this.bigEyeStart += deltaTime; 
  // 如果计时时间超过结束时间
  if(this.bigEyeStart > this.bigEyeEnd){
    // 切换下标
    this.bigEyeIndex = (this.bigEyeIndex + 1) % 2;
    // 将开始时间清空
    this.bigEyeStart = 0;
    // 如果大鱼是睁着眼睛的 那么结束时间改为3000
    if(this.bigEyeIndex == 0){
      this.bigEyeEnd = 3000;
    }
    // 如果大鱼是闭着眼睛的 那么结束时间改为300
    if(this.bigEyeIndex == 1){
      this.bigEyeEnd = 300;
    }
  }

  // 3.02：完成大鱼身体图片切换
  this.bigBodyStart += deltaTime;
  if(this.bigBodyStart > this.bigBodyEnd){
    this.bigBodyIndex = (this.bigBodyIndex + 1) % 8;
    this.bigBodyStart = 0;
  }
  // 3.03：大鱼尾巴图片切换
  this.bigTailStart += deltaTime;
  if(this.bigTailStart > this.bigTailEnd){
    this.bigTailIndex = (this.bigTailIndex + 1) % 8;
    this.bigTailStart = 0;
  }
 
  // 3.1：保存画笔状态
  ctx1.save();
  // 3.2：平移原点 当前大鱼x，y
  // 大鱼随鼠标移动
  //this.x = mx;
  //this.y = my;
  this.x = lerpDistance(mx,this.x,0.98);
  this.y = lerpDistance(my,this.y,0.98);

  ctx1.translate(this.x,this.y);
  // 3.3：旋转角度 修改大鱼游动的角度
  // 获取大鱼与鼠标的坐标差 x y 
  var deltaX = mx - this.x;
  var deltaY = my - this.y;
  // 获取大鱼与鼠标的角度差 atan2
  var beta = Math.atan2(deltaY,deltaX) + Math.PI;
  // 计算大鱼游动的新角度
  this.angle = lerpAngle(beta,this.angle,0.93);
  ctx1.rotate(this.angle);
  // 3.4：大鱼身体 尾巴 眼睛
  ctx1.drawImage(this.bigBody[this.bigBodyIndex],-this.bigBody[this.bigBodyIndex].width*0.5,-this.bigBody[this.bigBodyIndex].height*0.5);
  ctx1.drawImage(this.bigTail[this.bigTailIndex],-this.bigTail[this.bigTailIndex].width*0.5+29,-this.bigTail[this.bigTailIndex].height*0.5);
  ctx1.drawImage(this.bigEye[this.bigEyeIndex],-this.bigEye[this.bigEyeIndex].width*0.5,-this.bigEye[this.bigEyeIndex].height*0.5);
  // 3.5：恢复画笔状态
  ctx1.restore();
}
// 4：将mom.js添加到index.html中
// 5：在mian.js中创建对象并调用响应的方法

