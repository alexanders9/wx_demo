// pages/results/results.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '女生最爱的香水类型',
    content: 'hloe家最经典的一款招牌香水，俗称女神香 新晋“斩男香”，味道特别适合秋冬。微微喷点在大衣、毛衣上，给人甜蜜温暖的感受。关键是小众又特别，基本上不会撞香的味道 让人闻了就忘不了，Chloe的丝带系列有绿丝带、粉丝带、黄丝带，黄丝带这一款介于绿丝带清新自然和粉丝带少女甜美之间，可能算是最平衡的，适用年龄也比较广，少女到少妇，都妥妥的适合。',
    prize: true
  },
  bindPrize () {
    wx.navigateTo({
      url: '/pages/prize/prize',
    })
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