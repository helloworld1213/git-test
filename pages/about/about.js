// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: 'hello world'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //这里可以查看从home页面传递过来的数据
    // console.log(options);
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
    // console.log('about页面关闭');
    //1.获取首页的页面对象
    //1.1获取所有活动页面
    const pages = getCurrentPages();
    // console.log(pages);
    //1.2.拿到首页 pages.length - 1是最后一项,我们要的是前一项
    const home = pages[pages.length - 2];

    //2.利用home页面的方法更改title
    home.setData({
      //这里的this指向的是当前about页面,所以数据也是about里面的数据
      // title: this.data.title
      //当然,也可以直接修改
      title: 'hello 小程序'
    })

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