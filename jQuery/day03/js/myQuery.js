//result=$("ul>li").sum()
jQuery.fn.sum=function(){
  var $elems=this;
  var result=0;
  $elems.each((i,elem)=>{
    result+=parseFloat($(elem).html());
  })
  return result;

}