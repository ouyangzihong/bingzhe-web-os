import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue' // 引入我们在 views 里写的 Home 组件
import Projects from '../views/Projects.vue'
import ProjectDetail from '../views/ProjectDetail.vue'

// 1. 显式安装路由插件 (这一步就是为了解决 Unknown custom element 报错)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/project/:id',
    name: 'ProjectDetail',
    component: ProjectDetail
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  // 切换路由时，自动滚回到顶部
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router