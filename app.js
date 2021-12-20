App({
  onLaunch: function() {
    console.log('初识化完成的时候会调用: onLaunch()');
    // wx.getUserInfo({
    //   success: (result) => {
    //     console.log(result);
    //   }
    // })
  },
  onShow() {
    console.log('页面加载完成的时候会调用: onShow()');
    
  },
  onHide() {
    console.log('页面隐藏的时候会调用: onHide()');
    // setTimeout(() => {
    //   let err = new Error();
    //   throw err;
    // }, 3000);
  },
  onError() {
    //错误可以出现在其他三个函数中的任意一个里面
    console.log('出现错误的时候调用: onError()');
    
  }
})