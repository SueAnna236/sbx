// 完成所有的碰撞检测
// 1：大鱼碰撞食物
function momFruitsColldion(){
  for(var i=0;i<fruit.num;i++){
    if(fruit.alive[i]){
      var l = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
      if(l < 900){
        fruit.alive[i] = false;
      }  
    }
  } 
}
// 2：大鱼碰撞小鱼
function momBabyCollsion(){
  // 2.1：计算下雨和小鱼之间的距离
  var l = calLength2(mom.x,mom.y,baby.x,baby.y);
  // 2.2：判断距离小鱼900
  if(l < 900){
    baby.babyBodyIndex = 0;
  }
}
// 3：将collsion.js添加到index.html中
// 4：并且在mian.js gameloop中调用相关的方法