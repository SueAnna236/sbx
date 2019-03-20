/**
 * 1. 查找触发事件的元素
 * 2. 绑定事件处理函数
 *  3. 查找要修改的元素
 *  4. 修改元素
 */

var chbAll=document.querySelector(
  "table>thead>tr>th:first-child>input"
);
chbAll.onclick=function(){
  var chbAll=this;
  var chbs=document.querySelectorAll(
    "table>tbody>tr>td:first-child>input"
  )
  for(var chb of chbs){
    chb.checked=chbAll.checked
  }
}

var chbs=document.querySelectorAll(
  "table>tbody>tr>td:first-child>input"
)
for(var chb of chbs){
  chb.onclick=function(){
    var chb=this;
    if(chb.checked==false)
      chbAll.checked=false;
    else{//尝试查找tbody下未选中的chb
      var unchecked=document.querySelector(
        "table>tbody>tr>td:first-child>input:not(:checked)"
      );
      if(unchecked!=null)//如果找到
        chbAll.checked=false;
      else//否则
        chbAll.checked=true
    }
  }
}