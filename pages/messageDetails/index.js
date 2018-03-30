// pages/details/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details:[
      {
        title:'姗姗来迟 标致5008五座精英版已到店 尝鲜试驾',
        classify:'赛事新闻',
        author:'刘淑芬',
        time:'2018-03-19'
      }
    ],

    text:[
      {
        paragraph_one:'我们这次主要体验车辆的ESC以及ABS功能，主要通过定圆、双向变 道、绕桩、冰面制动等项目来体验车辆在开启和关闭ESC情况下的状态表现。新款东南DX7升级了ESC和ABS控制单元，搭载了来自万都(mando)的全新MGH-100产品，与原搭载的MGH-80相比，其噪音控制更合理，频率和响应速度也要更快。',
        paragraph_two: '我们这次主要体验车辆的ESC以及ABS功能，主要通过定圆、双向变 道、绕桩、冰面制动等项目来体验车辆在开启和关闭ESC情况下的状态表现。新款东南DX7升级了ESC和ABS控制单元，搭载了来自万都(mando)的全新MGH-100产品，与原搭载的MGH-80相比，其噪音控制更合理，频率和响应速度也要更快。',
        imgUrl:[
          '../images/bmw.jpg',
          '../images/toyota.jpg',
        ]
      }
    ],

    imgList:[
      {
        url:'../images/collection.png',
        hoverUrl:'../images/collection_c.png'
      }
    ],
    curIdx: false,

    commentDetails:[
      {
        avatarUrl:'../images/bmw.jpg',
        user:'刘桂兰',
        content:'苟利国家生死以，岂因祸福避趋之',
        time:'2分钟前'
      },
      {
        avatarUrl:'../images/bmw.jpg',
        user:'李淑芬',
        content:'稻花香里说丰年，听取长者经验',
        time:'6分钟前'
      }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // let that = this;
    // wx.request({
    //   url: 'https://tanpopo.cc/blog/allBlog',
    //   data:{},
    //   method:'GET',
    //   success(res){
    //     console.log(res.data),
    //     that.setData(
    //       {commentDetails:res.data.BackData.rows}
    //     )
    //   }
    // })
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

  toReply:function(){
    wx.navigateTo({
      url: '../reply/index',
      fail:function(){
        console.log('404')
      }
    })
  },

  chooseThis() {
    this.setData({
      curIdx: !this.data.curIdx
    })
  }
})