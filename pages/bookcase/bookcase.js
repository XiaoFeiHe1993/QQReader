//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    bookList: [
      {
        "name": "长尾理论",
        "status": "读到1章",
        "author": "克里斯`安德森",
        "time": "1分钟前"
      },
      {
        "name": "金字塔原理",
        "status": "读到102章",
        "author": "芭芭拉·明托",
        "time": "1个月前"
      },
      {
        "name": "凡人修仙传",
        "status": "读到1109章",
        "author": "忘语",
        "time": "3个月前"
      },
      {
        "name": "一念永恒",
        "status": "读到10章",
        "author": "耳根",
        "time": "3个月前"
      },
      {
        "name": "微信思维",
        "status": "读到1章",
        "author": "谢晓萍",
        "time": "4个月前"
      },
      {
        "name": "明朝那些事",
        "status": "读到19章",
        "author": "当年明月",
        "time": "4个月前"
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
