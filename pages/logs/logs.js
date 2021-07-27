// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    answer:'',
    id:''
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  },
  onShow: function () {
    this.getTabBar().setData({
      _tabbat: 0
    })
  },
  inputAnswer:function(e){
    this.setData({
      answer: e.detail.value
    })
    console.log(this.data.answer)
  }
  ,
  delete:function () {
    wx.showModal({
      content: '确认删除该问题吗？',
      cancelColor:'#810000',
      success: function (res) {
        if (res.confirm) {//这里是点击了确定以后
          console.log('用户点击确定')
        } else {//这里是点击了取消以后
          console.log('用户点击取消')
        }
      }
    })
  }
  ,
  submit:function () {
    let content=this.data.answer
    if(content==''){
      wx.showModal({
        title:"无法发布！",
        content:"您的回答不能为空。",
        showCancel: false
      })
    }
  },
  setTime:function(){
    let num=this.data.id;
    if(num==0){
      wx.showToast({
        title: 'setTime',
      })
    }
  }
})
