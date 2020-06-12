<template>
  <div id="app">
    <!-- <div id="nav"> <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> </div> -->
    <!-- <navHead></navHead> -->
    <router-view/>
  </div>
</template>

<style>
* { padding: 0; margin: 0;}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: "Microsoft YaHei", 微软雅黑, "MicrosoftJhengHei", 华文细黑, STHeiti, MingLiu;
  font-size: 15px;
}
body{
  width: 1920px; box-shadow: 0 0 8px 1px #DDD; margin: 0 auto;
}
span{   color: #565656;}
</style>
