$(function(){
  var formData = new FormData();
  formData.append('photo', $('#input_file')[0].files[0]);
  //ajax请求
  $.ajax({
    type: "post",
    url:  "接口地址",
    data: formData,
    dataType: 'json',
    processData: false, // 告诉jQuery不要去处理发送的数据
    contentType: false, // 告诉jQuery不要去设置Content-Type请求头
    xhrFields:{withCredentials:true},
    async: true,    //默认是true：异步，false：同步。
    success: function (data) {
      callback(data);
    },
    error: function (data) {
      layer.msg('请求异常');
    },
  });

})