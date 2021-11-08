import { createStore } from 'vuex'

export default createStore({
  //定义所需要的状态
  //数据共享，包括一般组件和路由组件每个组件都能使用
  state: {
    list:[
      {
        title: "吃饭",
        complete: false,
      },
      {
        title: "睡觉",
        complete: false,
      },
      {
        title: "敲代码",
        complete: true,
      },
    ],
  },
  //同步修改stata，mutations里只能放方法，不能异步、定时操作
  //mutations的每个方法有两个参数，第1个是state，第2个是需要修改的值
  //mutations的方法使用时，state参数可以不传
  mutations: {
    //添加任务
    addTodo(state, payload){
      state.list.push(payload);
    },
    //删除任务 splice(下标, 个数)
    delTodo(state, payload){
      state.list.splice(payload, 1);
    },
    //清除已完成
    clear(state, payload){
      //payload未完成的item
      state.list = payload
    }
  },
  //异步提交mutation
  //第1个参数是store对象，第2个参数是修改的值
  //commit用来提交mutation,调用mutation的方法
  actions: {
    
  },
  // 模块化
  modules: {
  }
})
