<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="start">开始任务</button>
  </div>
</template>
<script>
import { defineComponent, onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";
import Axios from 'axios'
import axios from "axios";

export default defineComponent({
  name: "Start",
  props: {},
  components: {},
  // setup 组件创建的过程
  setup(props, ctx) {
    let router = useRouter();
    let name = ref("jack");
    let num = ref(10);
    let obj = ref({
      msg: "start",
    });
    let start = () => {
      router.push({
        name: 'Home',
        params: {
          name: name.value,
          num: num.value,
          obj: JSON.stringify(obj),
        },
      });
    };

    let getDdata = ()=>{
      axios.get('/ajax')
      .then(res=>{})
      .catch(err=>{})
    };

    //onMounted 组件挂载的过程
    //数据 dom……
    //发请求
    //数据初始化的操作
    //接收由路由传递的参数
    onMounted(()=>{
      getDdata();
      console.log('onMounted')
    });
    //onUnMounted 组件卸载
    //清除定时器 清除闭包函数……
    onUnmounted( ()=>{
      console.log('onUnmounted')
    } )


    console.log("setup");
    return {
      start,
    };
  },
});
</script>
<style scoped lang="scss">
</style>