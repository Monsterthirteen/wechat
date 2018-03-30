// pages/goods/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeCategoryId: 0,
    scrollTop: "0",
    loadingMoreHidden: true,
    categories:[
      { name: '分类一', id: '1' },
      { name: '分类二', id: '2' },
      { name: '分类三', id: '3' },
      { name: '分类四', id: '4' },
      { name: '分类五', id: '5' },
      { name: '分类六', id: '6' },
      { name: '分类七', id: '7' },
    ],
    goods:[
      { id: '1', name: '商品一', minPrice: '199', pic: '../images/bmw.jpg' },
      { id: '2', name: '商品二', minPrice: '119', pic: '../images/bmw.jpg' },
      { id: '3', name: '商品三', minPrice: '169', pic: '../images/bmw.jpg' },
      { id: '4', name: '商品四', minPrice: '149', pic: '../images/bmw.jpg' },
      { id: '5', name: '商品五', minPrice: '139', pic: '../images/bmw.jpg' },
      { id: '6', name: '商品六', minPrice: '239', pic: '../images/bmw.jpg' },
      { id: '7', name: '商品七', minPrice: '659', pic: '../images/bmw.jpg' },
      { id: '8', name: '商品八', minPrice: '139', pic: '../images/bmw.jpg' },
      { id: '9', name: '商品九', minPrice: '239', pic: '../images/bmw.jpg' },
      { id: '10', name: '商品十', minPrice: '69', pic: '../images/bmw.jpg' },
      { id: '11', name: '商品十一', minPrice: '19', pic: '../images/bmw.jpg' },
      { id: '12', name: '商品十二', minPrice: '1099', pic: '../images/bmw.jpg' },      
    ]
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
  
  },

  // tab
  tabClick: function (e) {
    this.setData({
      activeCategoryId: e.currentTarget.id
    });
  },

  // 跳转详情
  toDetailsTap:function(){
    wx.navigateTo({
      url: '../goodsDetails/index',
      fail:function(){
        console.log('404')
      },
    })
  }
})