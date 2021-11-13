<template>
  <div>
    <list-header @add="add"></list-header>
    <list-main :list="list" @del="del"></list-main>
    <list-footer :list="list" @clear="clear"></list-footer>  
  </div>
</template>
<script>
// @符号表示 src 目录
import listHeader from "@/components/listHeader/listHeader";
import listMain from "@/components/listMain/listMain";
import listFooter from "@/components/listFooter/listFooter";
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
    listHeader: listHeader,
    listMain,
    listFooter,
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
      //将子组件listHeader传来的任务添加到list
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