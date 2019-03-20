//index.js
//获取应用实例
Page({
  handleTap1: function(){
    // 跳转到下一个组件
    wx.redirectTo({ url: '/pages/logs/logs' });
  },
  handleTap2: function(){
    // 保留跳转
    wx.navigateTo({
      url: '/pages/logs/logs',
    })
  },
  handleTap3: function(e){
    // 1：获取模板中自定义属性age
    var age = e.target.dataset.age;
    // 2：通过编程转换logs组件
    wx.navigateTo({
      url: '/pages/logs/logs?age='+age,
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    list: []
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1：轮播图列表
    var url = "http://127.0.0.1:3000/getImages";
    wx.request({
      url: url,
      method: "get",
      success: (res)=>{
        //console.log(res.data);
        this.setData({
          list: res.data
        })
      },
      fail: (res)=>{
        console.log("fail:");
        console.log(res);
      }
    });
    // 2：发送请求并加载数据id count
    var url2 = "http://127.0.0.1:3000/updateCart";
    wx.request({
      url: url2,
      data: {
        id:1,
        count: 5
      },
      success: (res)=>{
        //{code: 1,msg:"更新成功"}
        console.log(res.data)
      }
    })
  },
  // 练习1：获取图片列表显示模板 id img_url 
  // （1）将返回数据保存data属性
  // （2）创建循环显示id图片列表 <view> image
  // 练习2：删除指定用户
  // 创建服务器程序
  // 小程序发送请求

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
