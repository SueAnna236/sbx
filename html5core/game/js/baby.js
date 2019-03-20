// 完成小鱼操作
// 1：创建一个小鱼的构造方法
var babyObj = function(){
  // 1：眼睛[] 身体[] 尾巴[]
  this.babyEye = [];
  this.babyBody = [];
  this.babyTail = [];
  // 2：坐标
  this.x;
  this.y;
  // 3：角度
  this.angle;
  // 4：为了完成小鱼眼睛图片切换定义三个变量
  this.babyEyeIndex = 0; //下标
  this.babyEyeStart = 0; //开始时间
  this.babyEyeEnd = 3000;  //结束时间
  // 5：小鱼的身体的图片切换
  this.babyBodyIndex = 0;
  this.babyBodyStart = 0;
  this.babyBodyEnd = 3000;
  // 6：小鱼尾巴的图片切换
  this.babyTailIndex = 0;
  this.babyTailStart = 0;
  this.babyTailEnd = 300;
}
// 2：为小鱼的构造方法添加一个初始化的方法
babyObj.prototype.init = function(){
  // 2.1：下载所有小鱼图片
  for(var i=0;i<2;i++){
    this.babyEye[i] = new Image();
    this.babyEye[i].src = "src/babyEye"+i+".png";
  }
  for(var i=0;i<20;i++){
    this.babyBody[i] = new Image();
    this.babyBody[i].src = "src/babyFade"+i+".png";
  }
  for(var i=0;i<8;i++){
    this.babyTail[i] = new Image();
    this.babyTail[i].src = "src/babyTail"+i+".png";
  }
  // 2.2：小鱼坐标画布居中
  this.x = canwidth*0.5;
  this.y = canheight*0.5;
  // 2.3：角度为0
  this.angle = 0;
}
// 3：为小鱼的构造方法添加一个绘制方法
babyObj.prototype.draw = function(){
  // 1：重新计算小鱼的下标 眼睛 身体 尾巴
  // 3.01：完成小鱼眼睛的图片切换
  //累加眼睛的计时时间
  this.babyEyeStart += deltaTime; 
  // 如果计时时间超过结束时间
  if(this.babyEyeStart > this.babyEyeEnd){
    // 切换下标
    this.babyEyeIndex = (this.babyEyeIndex + 1) % 2;
    // 将开始时间清空
    this.babyEyeStart = 0;
    // 如果小鱼是睁着眼睛的 那么结束时间改为3000
    if(this.babyEyeIndex == 0){
      this.babyEyeEnd = 3000;
    }
    // 如果小鱼是闭着眼睛的 那么结束时间改为300
    if(this.babyEyeIndex == 1){
      this.babyEyeEnd = 300;
    }
  }
  // 3.02：完成小鱼身体图片切换
  this.babyBodyStart += deltaTime;
  if(this.babyBodyStart > this.babyBodyEnd){
    this.babyBodyIndex = (this.babyBodyIndex + 1) % 20;
    this.babyBodyStart = 0;
  }
  // 3.03：小鱼尾巴图片切换
  this.babyTailStart += deltaTime;
  if(this.babyTailStart > this.babyTailEnd){
    this.babyTailIndex = (this.babyTailIndex + 1) % 8;
    this.babyTailStart = 0;
  }
  // 2：重新计算小鱼的位置 小鱼跟着大鱼游动
  // 平移原点 当前小鱼x，y
  this.x = lerpDistance(mom.x,this.x,0.98);
  this.y = lerpDistance(mom.y,this.y,0.99);
  // 3：重新计算小鱼的角度
  // 计算小鱼与大鱼的坐标差
  var deltaX = mom.x - this.x;
  var deltaY = mom.y - this.y;
  // 计算小鱼与大鱼角度差
  var beta = Math.atan2(deltaY,deltaX) + Math.PI;
  // 计算新角度
  this.angle = lerpAngle(beta,this.angle,0.92);
  // 4：绘制图形
  // 保存画笔状态
  ctx1.save();
  ctx1.translate(this.x,this.y);  
  ctx1.rotate(this.angle);
  // 小鱼身体 尾巴 眼睛
  ctx1.drawImage(this.babyBody[this.babyBodyIndex],-this.babyBody[this.babyBodyIndex].width*0.5,-this.babyBody[this.babyBodyIndex].height*0.5);
  ctx1.drawImage(this.babyTail[this.babyTailIndex],-this.babyTail[this.babyTailIndex].width*0.5+25,this.babyTail[this.babyTailIndex].height*0.5-37);
  ctx1.drawImage(this.babyEye[this.babyEyeIndex],-this.babyEye[this.babyEyeIndex].width*0.5,-this.babyEye[this.babyEyeIndex].height*0.5);
  ctx1.restore();
}
// 4：将baby.js添加到index.html中
// 5：在main.js中创建小鱼对象且调用响应方法