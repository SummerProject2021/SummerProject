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
    page:0,
    urls: [
      '/pages/index/index',
      '/pages/logs/logs'
    ],
    list:[
    { text:"我的卡牌",
      pagePath:"/pages/index/index"
    },
    { text:"提问箱",
      pagePath:"/pages/logs/logs"
    }
    ,{text:"暂未使用"}
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
      var index = e.detail.current;
      this.setData({
        page:index
      })
      if (this.data.page==0) {
      wx.switchTab({
        url: this.data.urls[0]
      })
      }else if (this.data.page==1) {
        wx.switchTab({
          url: this.data.urls[1]
        })
      }
    },
    
  //监听滑块
  bindchange(e) {
    // console.log(e.detail.current)
    let index = e.detail.current;
    let app=getApp();
    app.globalData.navState=index;
    this.setData({
      page:index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      page:0
    })
  }
  },
})