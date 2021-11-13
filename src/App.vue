<template>
  <p>App.vue 所有页面共有</p>
  
    <div id="list">
    <router-link to="/">首页</router-link> |
    <router-link to="/home">Home</router-link> |
    <router-link to="/detail">Detail</router-link>
  </div> 
  <router-view />
</template>

<style lang="scss" scoped>
#list{
  background-color: #eee;
  margin-bottom: 20px;
  padding:5px;
}
</style>
