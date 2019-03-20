document.getElementById("content1").style.zIndex=10
/**
 * 1. 查找触发事件的元素
 * 2. 绑定事件处理函数
 *  3. 查找要修改的元素
 *  4. 修改元素
 */
var tabs=document.querySelectorAll("[data-toggle=tab]")
for(var tab of tabs){
  tab.onclick=function(){
    var tab=this;
    //查找id为container下所有div
    var divs=
      document.getElementById("container").children;
    //遍历并清除所有div的zIndex属性
    for(var div of divs){
      div.style.zIndex=""
    }
    var id=tab.getAttribute("data-target");//#xxxx
         //tab.dataset.target//#xxxx
    var div=document.querySelector(id)
    div.style.zIndex=10
  }
}
