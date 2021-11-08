<template>
  <div class="container">
    <div>已完成{{ isComplate }} / 全部{{ list.length }}</div>
    <div v-if="isComplate > 0" class="btn">
      <button @click="clear">清除已完成</button>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, computed } from "vue";
export default defineComponent({
  //组件名称
  name: "navFooter", 
  //接收父组件的数据
  props: {
    list: {
      type: Array,
      required: true
    }
  },  
  //定义子组件
  components: {},
  setup(props, ctx) {
    let isComplate = computed(()=>{
      //此处不能直接用list，因为list是从props接收而来的
      let arr = props.list.filter(item=>{
        return item.complete
      })
      return arr.length
    });
    let clear = () => {
      let arr = props.list.filter(item=>{
        return item.complete ===false;
      })
      ctx.emit("clear",arr)
    };
    return {
      isComplate,
      clear,
    };
  },
});
</script>
<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  .btn {
    margin-left: 10px;
  }
}
</style>