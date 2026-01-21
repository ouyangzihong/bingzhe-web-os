import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue' 
import Projects from '../views/Projects.vue'
import ProjectDetail from '../views/ProjectDetail.vue'
import Contact from '../views/Contact.vue'
import Products from '../views/Products.vue'
import SeriesDetail from '../views/SeriesDetail.vue'

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
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  // [新增] 产品细分详情页路由
  {
    path: '/products/:id', // 动态参数，例如 /products/series-a
    name: 'SeriesDetail',
    component: SeriesDetail,
    props: true // 允许将路由参数作为 props 传递给组件
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