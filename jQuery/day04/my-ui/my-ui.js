/************* accordion ************/
/*
jQuery.fn.accordion=function(){
  var $parent=this;//this->$("#my-accordion")
  //1. 侵入class和自定义扩展属性
  $parent
  .addClass("accordion")
  .children(":nth-child(odd)")//奇数位置的div
  .addClass("title") //return 所有title
  .next() //每个title的下一个兄弟div
  .addClass("content fade")//return 所有content
  .first() //第一个content
  .addClass("in")
  //2. 事件绑定
  $parent.on("click",".title",function(){
    $(this)//->当前title
    .next()//当前title旁边的content
    .toggleClass("in")
    .siblings(".content")
    .removeClass("in")
  });
}//$("#my-accordion").accordion()
*/
//练习
jQuery.fn.accordion=function(){
  var $parent=this;
  $parent.addClass("accordion").children(":nth-child(odd)").addClass("title").next().addClass("content fade").first().addClass("in");
  $parent.on("click",".title",function(){
    $(this).next().toggleClass("in").siblings(".content").removeClass("in");
  });
}
/************** tabs **************/
