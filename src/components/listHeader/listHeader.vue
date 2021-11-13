<template>
  <div id="header">
    <p>listHeader.vue:</p>
    <input
      type="text"
      placeholder="请输入任务名称"
      v-model="value"
      @keydown.enter="enter"
    />
     
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "listHeard", //组件名称 //接收父组件的数据
  props: {}, //定义子组件
  components: {},
  emits:['add'],
  setup(props, ctx) {
    let value = ref("");
    let enter = () => {
      //把输入框的内容传给父组件
      ctx.emit('add', value.value);
      //清空输入框
      value.value = "";
    };
    return {
      value,
      enter,
    };
  },
});
</script>
<style scoped lang="scss">
#header{
  padding: 10px;
  border: 1px solid #333;
  border-radius: 4px;
  margin-bottom: 20px;
}
</style>