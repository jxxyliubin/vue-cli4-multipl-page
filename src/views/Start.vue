<template>
  <div>
    <button @click="start">开始任务</button>
  </div>
</template>
<script>
import { defineComponent, onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";

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

    //onMounted 组件挂载的过程
    onMounted(()=>{
      //数据 dom……
      //发请求
      //数据初始化的操作
      //接收由路由传递的参数
      console.log('onMounted')
    });
    //onUnMounted 组件卸载
    onUnmounted( ()=>{
      //清除定时器 清除闭包函数……
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