// pages/shoplist/shoplist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],//1：保存分页返回数据
    pageIndex: 0, //2：保存分页 的页码
    pageSize: 7, //3：保存页大小
    hasMore: true //4：是否有下一页数据

  },
  
  // 4：分页数据
  loadMore: function(){
    // 判断是否有下一页数据
    // 如果没有下一页数据，停止数据执行
    if(this.data.hasMore === false){
      return
    }
    //console.log("分页");
    // 4：显示加载动画
    wx: wx.showLoading({
      title: '正在加载数据.......',
      mask: true,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
    // 1：获取两个数值 pno ps
    var pno = this.data.pageIndex + 1;
    var ps = this.data.pageSize;
    // 2：发送请求
    wx.request({
      url: "http://127.0.0.1:3000/getShopList",
      data: {
        pno: pno,
        pageSize: ps
      },
      method: "get",
      // 3：获取返回的当前页的内容
      success: (res) => {
        // 5：收到数据 多显示1000ms后隐藏动画
        setTimeout(function () {
          wx.hideLoading();
        }, 1000)
        var rows = this.data.list.concat(res.data.data);
        var pc = res.data.pageCount;
        // 判断是否有下一页数据
        var flag = pno < pc;
        console.log(res.data);
        this.setData({
          list: rows,
          pageIndex: pno,
          hasMore: flag  //保存判断的结果
        })    
      }
    })
    
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMore();
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
    // 下拉 刷新
    console.log("用户下拉操作...刷新第一页内容");
    // 1：清空原有的页码
    this.setData({
      pageIndex: 0,
      // 2：清空原有数据列表
      list: [],
      // 3：请除原有的判断条件
      hasMore: true
    });
    this.loadMore();

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // 下一页
    this.loadMore();

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})