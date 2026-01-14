<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/_variables.scss';

body {
  margin: 0;
  padding: 0;
  font-family: $font-main;
  background-color: $bg-color;
  -webkit-font-smoothing: antialiased; // 字体抗锯齿，Mac上更清晰
  -moz-osx-font-smoothing: grayscale;
}

/* 去除默认的链接样式 */
a {
  text-decoration: none;
  color: inherit;
}
</style>