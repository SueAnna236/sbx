/**
 * 1. 查找触发事件的元素
 * 2. 绑定事件处理函数
 *  3. 查找要修改的元素
 *  4. 修改元素
 */
var spans=document.querySelectorAll("ul.tree>li>span")
for(var span of spans){
  span.onclick=function(){
    var span=this;
    //如果自己是开着的(别人一定没有开着)
    if(span.className=="open")
      span.className=""//将自己关上
    else{//如果自己是关着的
      //试着找其他开着的
      var openSpan=document.querySelector(
        "ul.tree>li>span.open"
      )
      if(openSpan!=null)//如果找到
        openSpan.className="";//就关闭其他
      span.className="open"//再打开自己
    }
  }
}