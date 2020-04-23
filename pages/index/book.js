//index.js
//获取应用实例
let app = getApp()
//初始化
wx.cloud.init({
  env: 'ldd233-ddb286',
  traceUser: true
})
const db = wx.cloud.database()
const _ = db.command;

Page({
  data: {
    answerdata:{},//答案数据
    answertext:"你所有的问题我都能替你解答",//答案区文字
    index:0,//点击次数
    animation:"",
  },
  onLoad: function (option) {
    //数据库中取clothes
      db.collection('answers').get().then(res => {
        // res.data 包含该记录的数据
        this.setData({
          answerdata: res.data[0].answers
        });
    })
  
    //顶部loading
    wx.showNavigationBarLoading();
    setTimeout(function () {
      wx.hideNavigationBarLoading();
    }, 300);
    wx.setTopBarText({
      text: '你很棒 开心点~'
    })
    wx.showShareMenu({
      withShareTicket: true
    })
    wx.updateShareMenu({
      withShareTicket: true,
      success() { }
    })

  },

  getanswer:function(e){

    let index = this.data.index;
    let data = this.data.answerdata;
    if(data){
      let rannum = Math.floor(Math.random() * data.length)
        this.setData({
          animation:""
        });
        this.setData({
          answertext: data[rannum].name,
          index: index + 1,
          animation:"answershow 2s",
        });
      let tiptext="";
      let showtoast=false;
      console.log(index);
      switch (index){
        case 10:
          tiptext = "有问题的人生更有活力~"
          showtoast=true;
        break;
        case 30:
          tiptext = "还是没想好吗"
          showtoast=true;
        break;
        case 50:
          tiptext = "休息一下吧，人生那么长别害怕~"
          showtoast=true;
        break;
        case 80:
          tiptext = "休息一下吧，人生那么长别害怕~"
          showtoast=true;
        break;
       
        }
        if(showtoast){
          wx.showToast({
            title: tiptext,
            icon: 'none',
            duration: 2000
          })
        }
    }
  },
  onPullDownRefresh: function () {
    this.onLoad();
  }

})
let Util = require('../../utils/util');