/*********** tabs *************/
//当js文件加载时，自动查找data-toggle=tab的父元素
/*
$(".tabs:has([data-toggle=tab])")
.on("click","[data-toggle=tab]",function(e){
  e.preventDefault()
  var $tar=$(this);
  if(!$tar.parent().is(".active")){
    $tar.parent().addClass("active")
      .siblings().removeClass("active");
    var id=$tar.attr("href");
    $(id).addClass("active")
      .siblings().removeClass("active");
  }
})
*/
jQuery.fn.tabs=function(){
  var $parent=this;
  //1.侵入
  $parent.children(":first").addClass("tabs")
  .find("a").attr("data-toggle","tab")
  .parent().first().addClass("active");
  $parent.children(":last").addClass("container")
  .children(":first").addClass("active");
  //2. 绑定行为
  $parent.children(":first").on("click","[data-toggle=tab]",function(e){
    e.preventDefault();
    var $tar=$(this);
    if(!$tar.parent().is(".active")){
      $tar.parent().addClass("active").siblings().removeClass("active");
      var id=$tar.attr("href");
      $(id).addClass("active").siblings().removeClass("active");
    }
  })
}
/*********** accordion *************/