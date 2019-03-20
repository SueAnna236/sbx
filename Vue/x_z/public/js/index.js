new Vue({ 
  el:"#main",
  data:{
    products:[
      {title:"",price:0},
      {title:"",price:0},
      {title:"",price:0}
    ]
  },
  //mounted(){ //在Vue将HTML片段替换到DOM树之后触发
  created() {//在创建Vue对象实例和data模型数据对象后触发
    //this->当前new Vue
    axios.get("http://localhost:3000/index")
    .then(res=>{//必须使用箭头函数，内外this一致
      this.products=res.data;
    })
  }
})
/*
//向http://localhost:3000/index发送请求
axios.get("http://localhost:3000/index")
*/
/*
$.ajax({
  url:"http://localhost:3000/index",
  type:"get",
  dataType:"json"//因为返回json字符串，所有希望自动转为对象
})*/
//支持promise:open(result)
/*
.then(function(res){
  var products=res.data;
  setTimeout(function(){
    new Vue({ 
      el:"#main",
      data:{
        products,
      }
        })
      },
  },500)
})*/
/*.then(function(result){
  //产品1
  var p0=result[0];
  var html=`<div class="card border-0 flex-md-row box-shadow h-md-250">
  <div class="card-body d-flex flex-column align-items-start">
    <h5 class="d-inline-block mb-2">${p0.title}</h5>
    <h6 class="mb-5">
      <a class="text-dark" href="javascript:;">${p0.details}</a>
    </h6>
    <span class="text-primary">¥${p0.price.toFixed(2)}</span>
    <a class="btn btn-primary" href="${p0.href}">查看详情</a>
  </div>
  <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="${p0.pic}" data-holder-rendered="true">
</div>`;//复制55行~66行保存在变量html中
var divMain=document.getElementById("main");
var divP1=divMain.children[1].children[0].children[1].children[0];
divP1.innerHTML=html;

//产品2
var p1=result[1];
var html=`<div class="card border-0 flex-md-row box-shadow h-md-250">
<div class="card-body d-flex flex-column align-items-start">
  <h5 class="d-inline-block mb-2">${p1.title}</h5>
  <h6 class="mb-5">
    <a class="text-dark" href="javascript:;">${p1.details}</a>
  </h6>
  <span class="text-primary">¥${p1.price.toFixed(2)}</span>
  <a class="btn btn-primary" href="${p1.href}">查看详情</a>
</div>
<img class="card-img-right flex-auto d-none d-md-block mt-5" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="${p1.pic}" data-holder-rendered="true">
</div>`;//注释并复制69~79行，保存在变量html中
divP1.nextElementSibling.innerHTML=html;

//产品3
var p2=result[2];
var html=`<div class="card border-0 flex-md-row box-shadow h-md-250">
<div class="card-body d-flex flex-column align-items-start">
  <h5 class="d-inline-block mb-3">${p2.title}</h5>
  <span class="text-primary">¥${p2.price.toFixed(2)}</span>
  <a class="btn btn-primary" href="${p2.href}">查看详情</a>
</div>
<img class="card-img-right flex-auto d-none d-md-block mt-5" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]"src="${p2.pic}" data-holder-rendered="true">
</div>`;
divP1.parentNode.nextElementSibling.children[0].innerHTML=html;

//后3个产品
var html="";
//遍历result中后三个商品
for(var p of result.slice(-3)){
  html+=`<div class="col-md-4 p-0 pl-2">         
  <div class="card border-0 text-center">
    <img class="card-img-top" src="${p.pic}" alt="Card image cap">
    <div class="card-body p-0 pr-1 pl-1">
      <span class="d-inline-block">${p.title}</span>
      <span class="text-primary small">¥${p.price.toFixed(2)}</span>
      <a class="btn btn-sm btn-primary" href="${p.href}">查看详情</a>
    </div>
  </div>                
</div>`;
}

divP1.parentNode.nextElementSibling.children[1].children[0].innerHTML=html;
})*/
