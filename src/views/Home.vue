<template>
  <div>
    <nav-header @add="add"></nav-header>
    <nav-main :list="list" @del="del"></nav-main>
    <nav-footer :list="list" @clear="clear"></nav-footer>  
  </div>
</template>
<script>
// @符号表示 src 目录
import NavHeader from "@/components/navHeader/NavHeader";
import NavMain from "@/components/navMain/NavMain";
import NavFooter from "@/components/navFooter/NavFooter";
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  //组件名称
  name: "Home",
  //接收父组件的数据
  props: {}, 
  //定义子组件
  //键和值相等可以只写键
  components: {
    NavHeader: NavHeader,
    NavMain,
    NavFooter,
  },
  emits:['add'],
  setup(props, ctx) {
    let value = ref('');
    let store = useStore();
    //在setup函数中使用计算属性来使用vuex
    let list  = computed(()=>{
      return store.state.list
    })
    let add = (val)=>{
      value.value = val;
      //将子组件NavHeader传来的任务添加到list
      //判断任务是否已存在
      let flag = true;
      list.value.map(item => {
        if(item.title==value.value){
          flag = false;
          alert("该任务已存在")
        }
      })
      //调用Mutation
      if(flag){
        store.commit('addTodo',{
          title: value.value,
          complate: false
        });
      }
      
    }
    let del=(ind)=>{
      console.log(ind);
      //调用删除的mutation
      store.commit('delTodo', ind)
    }
    let clear = (val)=>{
      store.commit('clear', val)
    }
    return {
      add,
      value,
      list,
      del,
      clear,
    };
  },
});
</script>
<style scoped lang="scss">
</style>