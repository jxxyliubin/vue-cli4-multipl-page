<template>
  <div>
    <h1>父组件</h1>
    <P>fromChildMsg: {{fromChildMsg}}</P>
    <!-- 通过绑定的自定义事件toParent来接收子组件传来的数据 -->
    <child :msg="msg" @toParent="giveChildMsg"></child>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import child from '@/views/child/Child'

export default defineComponent({
  name: "Detail", 
  props: {}, 
  components: {
    child
  },
  setup(props, ctx) {
    let msg = ref('父组件 Detail.vue 里定义，传给子组件显示的数据');
    let fromChildMsg = ref("空");

    //定义一个事件接收子组件的数据
    let giveChildMsg = (msg)=>{
      console.log(msg);
      fromChildMsg.value = msg; 
    }

    return {
      msg,
      giveChildMsg,fromChildMsg
    };
  },
});
</script>
<style scoped lang="scss">
</style>