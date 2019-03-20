// 1：创建很多全局变量 保存各种角色
// 1.1：创建两个全局变量保存画布
var can1 = null;
var can2 = null;
// 1.2：创建两个全局变量保存画笔
var ctx1 = null;
var ctx2 = null;
// 1.3：创建两个全局变量保存画笔宽度和高度
var canwidth = 0;
var canheight = 0;
// 1.4：创建一个变量保存背景图片
var bgPic = null;
// 1.5：创建一个全局变量保存海葵对象
var ane = null;
// 1.6：创建一个全局变量保存食物对象
var fruit = null;
// 1.7：创建一个全局变量保存大鱼对象
var mom = null;
// 1.8：创建两个全局变量保存鼠标的位置
var mx = canwidth * 0.5;
var my = canheight * 0.5;
// 1.9：创建两个全局变量保存时间差
var lastTime = null;
var deltaTime = null;//绘制画面所用时间差
// 1.10：创建一个全局变量保存小鱼对象
var baby = null;

// 2：创建三个函数 game 
function game(){
  init();
  lastTime = Date.now();//没有绘制内容之前时间
  deltaTime = 0;//时间差
  gameloop();
}

// 3：函数 init 初始化游戏中的所有数据
function init(){
  can1 = document.getElementById("canvas1");
  can2 = document.getElementById("canvas2");
  ctx1 = can1.getContext("2d");
  ctx2 = can2.getContext("2d");
  canwidth = can1.width;
  canheight = can1.height;
  bgPic = new Image();
  bgPic.src = "src/background.jpg";
  //console.log(canwidth+":"+canheight);
  //console.log(bgPic);
  // 3.1：创建海葵对象
  ane = new aneObj();
  // 3.2：调用海葵对象初始化方法
  ane.init();
  // 3.3：创建食物对象并且调用初始化方法
  fruit = new fruitObj();
  fruit.init();
  // 3.4：创建大鱼对象并且调用初始化方法
  mom = new momObj();
  mom.init();
  // 3.5：为画布1绑定一个鼠标移动事件
  can1.addEventListener("mousemove",onMouseMove,false);
  // 3.6：创建小鱼对象并且调用初始化的方法
  baby = new babyObj();
  baby.init();
}

// 4：函数 gameloop
function gameloop(){
  // 4.1：创建智能的定时器执行循环
  requestAnimFrame(gameloop);
  // 4.10：计算时间差
  var now = Date.now();//完成整个页面内容的时间
  deltaTime = now - lastTime;//两个时间差
  lastTime = now;
  // 4.11：监听画布
  fruitMonitor();
  // 4.12：清除画布1内容
  ctx1.clearRect(0,0,canwidth,canheight);
  // 4.13：大鱼吃食物
  momFruitsColldion();
  // 4.14：大鱼喂小鱼
  momBabyCollsion();
  // 4.2：绘制背景颜色
  drawBackground();
  // 4.3：绘制海葵
  ane.draw();
  // 4.4：绘制食物
  fruit.draw();
  // 4.5：绘制大鱼
  mom.draw();
  // 4.6：绘制小鱼
  baby.draw();
}

// 5：当页面加载成功后调用game
document.body.onload = game;

// 6：其他小任务

// 7：将mian.js添加到index.html文件中
// mian.js添加函数
function onMouseMove(e){
  // 获得鼠标在画布上的位置
  mx = e.offsetX;
  my = e.offsetY;
  //console.log(e.offsetX+":"+e.offsetY)
}