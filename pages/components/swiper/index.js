// components/component.js
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
    // swiper轮播
    imgUrls: [
      '../../images/1.jpg',
      '../../images/2.jpg'
    ],
    indicatorDots: true,
    indicatorColor: '#fff',
    indivatorActiveColor: 'rgba(0,0,0,0.3)',
    autoplay: true,
    interval: 5000,
    duration: 500,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    test:function(){
      console.log(111)
    }
  }
})
