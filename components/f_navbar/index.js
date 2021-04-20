// components/f_navbar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  options: {
    addGlobalClass: true,
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabList: [
      { text: '开关', icon: 'icon-kaiguan' },
      { text: '定时', icon: 'icon-shizhong' },
      { text: '倒计时', icon: 'icon-daojishi' },
      { text: '用电量', icon: 'icon-yongdianzhenduan' }
    ],
    clickIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /** 点击 */
    clickTab (e) {
      var index = e.currentTarget.dataset.item
      this.setData({
        clickIndex: index
      })
      index == 3 ? this.triggerEvent('changePower', true) : this.triggerEvent('changePower', false)
    }
  }
})
