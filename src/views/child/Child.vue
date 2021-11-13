<template>
  <div>
    <h2>子组件</h2>
    <p>{{parentMsg}}</p>
    <button @click="send">传值给父组件</button>
  </div>
</template>

<script>
  import {defineComponent, ref} from 'vue'
  export default defineComponent({
    name: "Child",
    // 接收父组件传递过来的参数
    //props接收的数据也不能直接修改
    props: {
      msg: {
        //数据类型校验
        type: String,
        //是否必传,默认false
        require: true,
        //默认值
        default:'父组件未传数据时的默认值'
      }
    },
    components:{},
    setup(props, ctx) {
      //接收到的父组件传来的数据
      let parentMsg = props.msg;

      let childMsg = ref('这是子组件里的数据');
      let send = ()=>{
        //通过emit分发事件
        //第1个参数是事件的名称，第2个参数是传递的数据。只能传两个参数，多个数据时需要用数组或对象
        console.log(111)
        ctx.emit('toParent', childMsg);
      }

      return{
        parentMsg,
        send
      }
    }
  })
</script>

<style scoped lang="scss">
</style>