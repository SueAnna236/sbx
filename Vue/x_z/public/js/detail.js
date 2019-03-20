window.onload=function(){
  var lid=location.search.split("=")[1];
  axios.get("http://localhost:3000/details",{
    params:{lid}
  })
  /*$.ajax({
    url:"http://localhost:3000/details",
    type:"get",
    data:{lid},//"lid="+lid
    dataType:"json"
  })*/
  //open(output)
  //.then((output)=>{
  .then((res)=>{
    var output=res.data;
    var {product,specs,pics}=output;
    new Vue({
      el:"#details",
      data:{
        lid,
        product,
        specs
      }
    });
    
/*    //console.log(output);
    var {product,specs,pics}=output;
    var details=document.getElementById("details");
    details.children[0].innerHTML=product.title;

    details.children[1].children[0].innerHTML=product.subtitle;

    details.children[2].children[0].children[1].innerHTML=`￥${product.price.toFixed(2)}`;

    details.children[2].children[1].children[1].innerHTML=product.promise;

    var html="";
    for(var sp of specs){
      html+=`<a class="btn btn-sm btn-outline-secondary ${sp.lid==lid?`active`:''}" href="product_details.html?lid=${sp.lid}">${sp.spec}</a>`;
      details.children[4].children[1].innerHTML=html;
    }
    */

    var html="";
    //遍历商品图片列表中每张图片
    for(var p of pics){
      //复制36~38行到此
      html+=`<li class="float-left p-1">
      <img src="${p.sm}" data-md="${p.md}" data-lg="${p.lg}">
    </li>`
    }
    var $ulImgs=$("#preview>div>div:last ul");
    $ulImgs.html(html).css("width",62*pics.length);

    var $mImg=$("#preview>div>img");
    $mImg.attr("src",pics[0].md);

    var $lgDiv=$("#div-lg");
    $lgDiv.css("background",`url(${pics[0].lg})`);

    var moved=0;
    var $btnLeft=$lgDiv.next().children(":first");
    var $btnRight=$lgDiv.next().children(":last");

    //图片少于4张，不允许向右移动
    if(pics.length<=4){
      $btnRight.addClass("disabled");
    }
    $btnRight.click(function(){
      //如果右侧按钮 不是.disabled
      if(!$(this).is(".disabled")){
        moved++;
        $ulImgs.css("margin-left",-62*moved);
        $btnLeft.removeClass("disabled");
        //如果图片个数-4与moved相等，就给右侧的按钮加disabled
        if(moved==pics.length-4){
          $(this).addClass("disabled");
        }
      }
      
    });
    $btnLeft.click(function(){
      if(!$(this).is(".disabled")){
        moved--;
        $ulImgs.css("margin-left",-62*moved);
        $btnRight.removeClass("disabled");
        //如果moved=0，就给左侧的按钮加disabled
        if(moved==0){
          $(this).addClass("disabled");
        }
      }
    });

    //鼠标进入到小图，中图和大图跟着改变
    $ulImgs.on("mouseenter","img",function(){
      var $img=$(this);
      $mImg.attr("src",$img.attr("data-md"));
      $lgDiv.css("background-image",`url(${$img.attr("data-lg")})`);
    })

    //鼠标进出中图时，放大镜效果
    var $mask=$("#mask");
    var $sMask=$("#super-mask").hover(function(){
      $mask.toggleClass("d-none");
      $lgDiv.toggleClass("d-none");
    })
    .mousemove(function(e){
      var top=e.offsetY-87.5;
      var left=e.offsetX-87.5;
      if(top<0){
        top=0;
      }else if(top>175){
        top=175;
      }
      if(left<0){
        left=0;
      }else if(left>175){
        left=175;
      }
      $mask.css({top,left});
      $lgDiv.css("background-position",`-${left*16/7}px -${top*16/7}px`)
    })

  })
}

//SELECT * FROM xz_laptop WHERE lid=2; 查询商品详情
//SELECT lid, spec FROM xz_laptop WHERE family_id=5; 查看同系列下有几种规格
//SELECT * FROM xz_laptop_pic WHERE laptop_id=5; 查看当前商品共有几张图片