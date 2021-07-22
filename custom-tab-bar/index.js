Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    _tabbat: 0,
    iPhoneX: false,
    urls: [
      '/pages/index/index',
      '/pages/logs/logs'
    ]
  },
  attached() {
    var self = this
    wx.getSystemInfo({
      success(res) {
        console.log(res.model)
        if (res.model.indexOf('iPhone X') >= 0) {
          self.setData({
            iPhoneX: true
          })
        }
      }
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    switchTap: function (e) {
      var self = this
      var index = e.currentTarget.dataset.index;
      var urls = self.data.urls
      var x1,y1;
      x1=e.touches[0].pageX;
      y1=e.touches[0].pageY;
      //x1>140&x1<180&(y1>10&y1<20)
      if (x1<180) {
        wx.switchTab({
          url: urls[0]
      })
      }else if (x1>=180) {
        wx.switchTab({
          url: urls[1]
        })
      }
    }
  }
})