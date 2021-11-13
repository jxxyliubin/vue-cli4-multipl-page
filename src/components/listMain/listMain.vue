<template>
  <div v-if="list.length > 0" id="main">
    <p>listMain.vue: </p>
    <div v-for="(item, index) in list" :key="index">
      <div class="item">
        <input type="checkbox" v-model="item.complete" />
        {{ item.title }}
        <button class="del" @click="del(item, index)">删除</button>
      </div>
    </div>
  </div>
  <div v-else>
    暂无任务
  </div>
</template>
<script>
import { defineComponent, ref, } from "vue";

export default defineComponent({
  name: "listMain", //组件名称 
  //接收父组件的数据
  props: {
    list: {
      type: Array,
      required: true
    }
  }, 
  //定义子组件
  components: {},
  emits:['del'],
  setup(props, ctx) {
    let del = (item, index) => {
      ctx.emit('del', index)
    };
    return {
      del
    };
  },
});
</script>
<style scoped lang="scss">
#main{
  background-color: #ededed;
  margin-bottom: 15px;
}
.item {
  height: 35px;
  line-height: 35px;
  width: 160px;
  position: relative;
  cursor: pointer;
  button {
    position: absolute;
    right: 20px;
    top: 6px;
    display: none;
  }
}
.item:hover {
  background-color: #ddd;
  button {
    display: block;
  }
}
</style>