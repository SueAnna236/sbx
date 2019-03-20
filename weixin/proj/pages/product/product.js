// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    pn: "",
    pr: ""
  },
  checkForm: function(e){
    //console.log("---提交表单---")
    //console.log(e)
    // 1：通过事件对象获取用户输入的数据 pname price
    var pname = e.detail.value.pname;
    var price = e.detail.value.price;
    // 2：创建正则表达式对数据验证
    var reg = /^[0-9]{1,}(\.[0-9]{1,2})?$/;
    // 3：如果验证不成功 提示错误消息
    if(!reg.test(price)){
      wx.showToast({title: "商品的价格格式不正确"});
      return;
    }
    // 4：发送ajax请求将pname price发送到服务器
    wx.request({
      url: 'http://127.0.0.1:3000/checkForm', //请求程序地址 服务器端的
      data: {
        pname: pname,
        price: price
      }, //发送请求的参数
      method: "get",
      success: (res)=>{ //接收服务器返回的数据
        if(res.data.code == 1){
          wx.showToast({
            title: '添加成功',
          });
          setTimeout(function(){
            wx.hideToast();
          },1500);
        }
        this.setData({
          pn: "",
          pr: ""
        })
      }
    })
    // 5：如果发送成功清空原有价格和数据 

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})