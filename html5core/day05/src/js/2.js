// 1：接收UI线程数值
onmessage = function(e){
  var n = parseInt(e.data)
  // 2：计算累加和
  var sum = 0;
  for(var i=1;i<=n;i++){
    sum += i;
  }
  // 3：将计算结果返回UI
  postMessage(sum)
}