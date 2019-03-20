$(function(){
  function loadPage(pno=0){
    var kwords=decodeURI(location.search.split("=")[1]);
    $.ajax({
      url:"http://localhost:3000/products",
      type:"get",
      data:{kwords,pno},
      dataType:"json",
      success: function(output) {
        var {products,pageCount}=output;
        var html="";
        for(var p of products){
          var {lid,md,price,title}=p;
          html+=`<div class="col-md-4 p-1">
          <div class="card mb-4 box-shadow pr-2 pl-2">
            <a href="product_details.html?lid=${lid}">
              <img class="card-img-top" src="${md}">
            </a>
            <div class="card-body p-0">
              <h5 class="text-primary">￥${price.toFixed(2)}</h5>
              <p class="card-text">
                <a href="product_details.html?lid=${lid}" class="text-muted small">${title}</a>
              </p>
              <div class="d-flex justify-content-between align-items-center p-2 pt-0">
                <button class="btn btn-outline-secondary p-0 border-0" type="button">-</button>
                <input type="text" class="form-control p-1" value="10">
                <button class="btn btn-outline-secondary p-0 border-0" type="button">+</button>
                <a class="btn btn-primary float-right ml-1 pl-1 pr-1" href="cart.html">加入购物车</a>
              </div>
            </div>
          </div>
        </div>`
        }
        $("#plist").html(html);

        var html="";
        html+=`<li class="page-item  disabled"><a class="page-link bg-transparent" href="#">上一页</a></li>`;

        for(var i=0;i<pageCount;i++){
          html+=i!=pno?`<li class="page-item"><a class="page-link bg-transparent" href="#">${i+1}</a></li>`:`<li class="page-item active"><a class="page-link border" href="#">${i+1}</a></li>`
        }

        html+=`<li class="page-item"><a class="page-link bg-transparent" href="#">下一页</a></li>`

        $("#plist+h6 ul").html(html);

        if(pno==0){
          $("#plist+h6 ul>li:first").addClass("disabled");
        }
        if(pno==pageCount-1){
          $("#plist+h6 ul>li:last").addClass("disabled");
        }

      }
    })
  }
  loadPage();
  $("#plist+h6 ul").on("click","a",function(e){
    e.preventDefault();
    var pno;
    if($(this).html()=="上一页"){
      //找到现在处于active的li下的a的内容数字
      var i=parseInt($("#plist+h6 ul>li.active>a").html());
      pno=i-2;//内容数字本就比当前pno大1，所以前一页需要-2
    }
    if($(this).html()=="下一页"){
      var i=parseInt($("#plist+h6 ul>li.active>a").html());
      pno=i;
    }

    pno=$(this).html()-1;
    loadPage(pno);

  })
})