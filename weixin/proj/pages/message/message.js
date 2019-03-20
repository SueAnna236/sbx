// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 1：创建变量保存消息列表
    list: [],
    // 3：页码
    pageIndex: 0,
    // 4：页大小
    pageSize: 3,
    hasMaore: true
  },
  // 2：添加方法loadMore 加载下一页
  loadMore: function(){
    // 2.1：发送请求获取下一页数据
    var pno = this.data.pageIndex + 1;
    var ps = this.data.pageSize;
    wx.request({
      url: 'http://127.0.0.1:3000/getMessage',
      // 2.2：将数据保存消息列表中
      data:{
        pno: pno,
        pageSize: ps
      },
      method: "get",
      success: (res)=>{
        var rows = this.data.list.concat(res.data.data);
        console.log(res.data);
        // 创建变量保存 是否有下一页条件
        var flag = pno < res.data.data.pageCount;
        this.setData({
          list: rows,//当前页内容
          pageIndex: pno,//页码
          hasMaore: flag//下一页条件
        });
      }
    })
    
    // 2.3：如果用户触发向师傅滑动操作 加载下一页
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})