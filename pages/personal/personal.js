//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    phoneNumber: '',
    address: '',
    avatarUrl: '',
    qrcode: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569044230984&di=4932e48cf337354d6e697cb67f6e21db&imgtype=0&src=http%3A%2F%2Fbbswater-fd.zol-img.com.cn%2Ft_s800x5000%2Fg5%2FM00%2F07%2F09%2FChMkJ1Z4F52IAW42AACeE47phQQAAGdjwNjXxEAAJ4r204.png']
  },
  onLoad: function () {
  },
  bindToEvaluation() {
    wx.navigateTo({
      url: '../evaluation/evaluation',
      success: function (res) {
      }
    })
  },
  bindPreviewImage() {
    wx.previewImage({
      current: this.data.qrcode[0], // 当前显示图片的http链接   
      urls: this.data.qrcode // 需要预览的图片http链接列表   
    })
  },
  bindGetUserInfo (e) {
    //此处授权得到userInfo
    console.log(e.detail);
    this.setData({
      avatarUrl: e.detail.userInfo.avatarUrl
    })
    console.log('avatarUrl', this.data.avatarUrl)
  },
  bindGetPhone (e) {
    let self = this
    let cloudID = e.detail.cloudID
    wx.cloud.init()
    wx.cloud.callFunction({
      name: 'getPhoneNumber',
      data: {
        data: wx.cloud.CloudID(cloudID),
      },
      success: function (res) {
        console.log(res.result)
        if (res.result.data.data) {
          self.setData({
            phoneNumber: res.result.data.data.phoneNumber
          })
        } else {
          //弹出手动输入 TODO
        }
        console.log('phoneNumber', self.data.phoneNumber)
      },
      fail: function (res) {
        console.log('fail', res)
      },
    })
  },
  bindGetAddress () {
    let self = this
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.address']) {
          wx.chooseAddress({
            success(res) {
              self.setData({
                address: res.provinceName + res.cityName + res.countyName + res.detailInfo
              })
              console.log('address', self.data.address)
            }
          })
        }
      }
    })
  }
})
