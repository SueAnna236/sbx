// pages/exam2/exam2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: "文华老师英文名",
    id: 9,
    list: [1, 3, 5, 7, 9],
    condition: true,
    list2: [{ id: 1, name: "亮亮" }, { id: 2, name: "东东" }, { id: 3, name: "文华" }],
    list3: [{ id: 1, name: "亮亮", addr: ["洛阳", "万寿路"] }, { id: 2, name: "东东", addr: ["三环", "欧洲", "印尼"] }, { id: 3, name: "kk" }]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      msg: "Lily"
    });
    var i = 10;
    var s = "东东";
    var now = Date.now();
    var reg = /^[0-9a-z]{1,3}$/;
    if (!reg.test("123")) {
      console.log("验证通过...")
    }
    // 小程序不同组件之间传递参数需要options获取
    console.log("1:onload");
    console.log(options);

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("2:onready");

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("3:onshow");

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("4:onhide");

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("5:exam--onunload");

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("--用户下拉操作--")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("==用户上拉触顶==")

  },
  onPageScroll:function(opt){
    console.log("==滑动==");
    console.log(opt.scrollTop)

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})