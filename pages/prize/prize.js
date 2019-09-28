// pages/prize/prize.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bg: false,
    showModel: false,
    name:'',
    description:'',
    status: '发放中',
    gifts: [
      {
        imgUrl:'/static/images/f2.jpg',
        name: '香水风铃系列100ML',
        description: '满100元可用',
        prize: true
      },
      {
        imgUrl: '/static/images/f2.jpg',
        name: '香水风铃系列200ML',
        description: '满200元可用',
        prize: true
      },
      {
        imgUrl: '/static/images/f2.jpg',
        name: '香水风铃系列300ML',
        description: '满300元可用',
        prize: true
      },
      {
        imgUrl: '/static/images/f2.jpg',
        name: '香水风铃系列400ML',
        description: '400元可用',
        prize: true
      }
    ]
  },
  showModel (e) {
    let dataset = e.target.dataset
    this.setData({
      showModel:true,
      bg: true,
      name: dataset.name,
      description: dataset.description
    })
    setTimeout(function () {
      wx.navigateTo({
        url: '/pages/personal/personal',
      })
    }, 2200)
  },
  close () {
    this.setData({
      showModel: false,
      bg: false,
      name: '',
      description: ''
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