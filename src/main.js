import Vue from 'vue'
import App from './App.vue'
import router from './router' // 引入路由配置

// 引入全局样式 (确保我们在第一步中创建的样式被应用)
import '@/assets/styles/_reset.scss' 

Vue.config.productionTip = false

new Vue({
  router, // <--- 关键点：必须把 router 注入到这里
  render: h => h(App)
}).$mount('#app')