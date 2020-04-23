//index.js
//获取应用实例
const app = getApp()


Page({
  data: {

  },
  onLoad: function () {
  },
  tapurl:function(){
    wx.navigateTo({
      url: '/pages/index/total'
    })
  }
})
var Util = require('../../utils/util');