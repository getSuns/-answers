// pages/index/total.js
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
  },
  onLoad: function (option) {
    //数据库中取clothes
      db.collection('answers').get().then(res => {
        // res.data 包含该记录的数据
        this.setData({
          answerdata: res.data[0].answers
        });
    })
  },
  /**
   * 页面的初始数据
   */

  /**
   * 生命周期函数--监听页面加载
   */

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