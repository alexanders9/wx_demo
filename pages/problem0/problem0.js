// pages/problem/problem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '女生最爱的香水类型',
    problem: '您最喜欢的香水是？',
    options: {
      type: 'font',
      list: [
        {
          option: '祖马龙香水',
          active: false,
          url: '/pages/problem1/problem1'
        },
        {
          option: '欧珑香水',
          active: false,
          url: '/pages/problem1/problem1'
        },
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  next (e) {
    let self = this
    const app = getApp()
    self.data.options.list.forEach((option, index) => {
      if (index === e.detail.index) {
        option.active = true
        // // 保存选择的答案及选项
        // let one = {
        //   problem: self.data.problem,
        //   selected: option.option
        // }
        // let length = app.globalData.results.length
        // app.globalData.results.splice(0, length, one)
        // console.log('您的选择', app.globalData.results)
      } else {
        option.active = false
      }
    })
    self.setData({
      options: self.data.options
    })
    setTimeout(function(){
      wx.navigateTo({
        url: e.detail.url,
      })
    }, 500)
   
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