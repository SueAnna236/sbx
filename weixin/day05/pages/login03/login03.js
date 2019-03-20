// pages/login03/login03.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
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
  },
  checkForm: function(e){
    // 1：获取用户输入的 用户名和密码
    var name = e.detail.value.uname;
    var upwd = e.detail.value.upwd;
    // 2：将用户名保存到全局变量中
    app.globalData.loginName = name;
    // 3：跳转成功到 success04组件中
    wx.navigateTo({
      url: '/pages/success04/success04',
    })
  }
})