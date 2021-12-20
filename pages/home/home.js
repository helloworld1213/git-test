// pages/home/home.js
Page({
  data: {
    name: '张三',
    age: 18,
    student: [
      {id: 110, name: '张敏', age: 22},
      {id: 111, name: '何晴', age: 24},
      {id: 112, name: '巩俐', age: 23},
      {id: 113, name: '李嘉欣', age: 21}
    ],
    counter: 0
  },
  addClick() {
    // console.log('111');
    //console.log(this.data);//数值确实发生了变化,但是界面上的值不会变
    //这里要想变化,要用到setData()函数
    this.setData({
      //this.data.counter++不起作用
      //这里是对象,所以前面的counter不能少
      counter: this.data.counter + 1
    })
  },
  subClick() {
    //这里要想变化,要用到setData()函数
    this.setData({
      //this.data.counter++不起作用
      //这里是对象,所以前面的counter不能少
      counter: this.data.counter - 1
    })
  }
})