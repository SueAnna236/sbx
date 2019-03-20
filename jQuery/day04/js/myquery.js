//jQuery.fn=jQuery.prototype
jQuery.fn.sum=function(){
  var sum=0;
  //this->指将来调用当前函数的jQuery对象
  //已经是jQuery对象，不用$(this)
  this.each((i,elem)=>{
    //elem->li
    sum+=parseInt($(elem).html())
  })
  return sum;
}//将来的调用: $("ul>li").sum()