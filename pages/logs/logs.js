// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    showPop:false,
    answer:'',
    msg:'',
    buttons:[{id:1,name:'forever'},{id:2,name:'24h'},{id:3,name:'6h'},{id:4,name:'3h'}]
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
    let go=false;
    for(let i=0;i<this.data.buttons.length;i++){
      if(this.data.buttons[i].checked==true)
        go=true;
    }
    if(content==''){
      wx.showModal({
        title:"无法发布！",
        content:"您的回答不能为空。",
        showCancel: false
      })
    }else if(go==false){
      wx.showModal({
        title:"无法发布！",
        content:"您尚未选择时间模块。",
        showCancel: false
      })
    }else{
      this.pop();
    }
  },
  radioButtonTap: function (e) {
    console.log(e)
    let id = e.currentTarget.dataset.id
    console.log(id)
    for (let i = 0; i < this.data.buttons.length; i++) {
      if (this.data.buttons[i].id == id) {
        //当前点击的位置为true即选中
        this.data.buttons[i].checked = true;
      }
      else {
        //其他的位置为false
        this.data.buttons[i].checked = false;
      }
    }
    this.setData({
      buttons: this.data.buttons,
      msg: "id:"+id
    })
  },
  checkButtonTap:function(e){
    console.log(e)
    let id = e.currentTarget.dataset.id
    console.log(id)
    for (let i = 0; i < this.data.buttons.length; i++) {
      if (this.data.buttons[i].id == id) {
        if (this.data.buttons[i].checked == true) {
          this.data.buttons[i].checked = false;
         
        } else {
          this.data.buttons[i].checked = true;
          
        }
      }
    }
   this.setData({
     buttons: this.data.buttons,
     msg: "id:"+id
    })
    
  },
  pop:function() {
    this.setData({
      showPop:true
    })
    setTimeout(() => {
      this.done_pop();
    }, 1500);
  },
  done_pop:function(){
    this.setData({
      showPop:false
    })
  }
})
