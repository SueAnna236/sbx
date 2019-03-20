// pages/toastexam/toastexam.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },
  // 练习：在当前组件中添加元素view，内容del 当用户点击del元素时显示模态对话框“是否删除指定数据”，如果用户选择“是”，提示：数据已经删除；如果用户选择“否”，不执行任何操作
  del: function(e){
    var name = e.target.dataset.name;
    wx.showModal({
      title: '提示',
      content: '是否删除'+name+'的数据？',
      success: (res)=>{
        if(res.confirm){
          wx.showToast({
            title: '数据已经删除',
            icon: 'success',
            duration: 1500
          });
          setTimeout(function () {
            wx.hideToast();
          }, 1500);
        }
        // 练习：在组件中删除del添加自定义属性data-name=‘tom’ 模态框中显示 是否删除tom数据
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1：获取原有的全局数据
    var name = app.globalData.loginName;
    // 2：修改全局数据
    app.globalData.loginName = 'tom';
    console.log(name);
    // 1：显示提示消息框
    /*
    wx.showToast({
      title: '操作成功',  //提示消息
      icon: 'success',  //显示图标
      duration: 1500  //延迟时间
    });
    // 2：隐藏提示消息框
    setTimeout(function(){
      wx.hideToast(); //将提示的组件卸载
    },1500)
    */
    // 显示一个模态对话框
    /*
    wx.showModal({
      title: '提示',
      content: '这是一个模态对话框',
      success: (res)=>{
        console.log(res);
      }
    });
    */
    // 3：显示操作菜单
    wx.showActionSheet({
      itemList: ['点赞','踩踩','忽略'],
      success: (res)=>{
        var idx = res.tapIndex;
        console.log(idx)
      }
    });
  },
  // 练习：创建两个组件，addExam delExam 在当前的组件创建元素<view>操作</view> 为元素绑定tap事件，显示操作菜单 “添加操作” “删除操作” ；如果用户选中“添加操作” 跳转到addExam组件 ；如果用户选中“删除操作”，跳转到delExam组件
  tap: function(){
    wx.showActionSheet({
      itemList: ['添加','删除'],  //显示的操作菜单
      success: (res)=>{
        var idx = res.tapIndex; //菜单的下标
        var page = '/pages/addExam/addExam';
        if(idx == 1){
          page = '/pages/delExam/delExam';
        }
        wx.navigateTo({
          url: page
        })
      }     
    })
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