// pages/components/navBar/index.js
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
    categories:[
      {name: '全部', id: '1' },
      {name: '赛事', id: '2' },
      {name: '球具', id: '3' },
      {name: '名店', id: '4' },
      {name: '技术', id: '5' },
      {name: '导购', id: '6' }
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabClick: function (e) {
      this.setData({
        activeCategoryId: e.currentTarget.id
      });
    }
  }
})
