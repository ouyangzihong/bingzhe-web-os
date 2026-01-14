<template>
  <nav class="navbar" ref="navbar" :class="{ 'navbar-hidden': !isVisible }">
    <div class="logo-container">
      <img src="@/assets/images/logo.png" alt="PINGENE Logo" class="logo-img" />
    </div>

    <div class="menu-items">
      <div 
        v-for="(item, index) in menuList" 
        :key="index" 
        class="menu-item"
        @mouseenter="hoverItem()"
        @mouseleave="resetItem()"
      >
        <span class="en">{{ item.en }}</span>
        <span class="cn">{{ item.cn }}</span>
        <div class="underline"></div>
      </div>
    </div>

    <div class="lang-switch">
      <span>EN / CN</span>
    </div>
  </nav>
</template>

<script>
import gsap from 'gsap';

export default {
  name: 'TheNavbar',
  // 1. 接收父组件传来的控制信号
  props: {
    isVisible: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      menuList: [
        { en: 'Home', cn: '首页', path: '/' },
        { en: 'About Us', cn: '关于我们', path: '/about' },
        { en: 'Design Services', cn: '设计服务', path: '/services' },
        { en: 'Products', cn: '产品体系', path: '/products' },
        { en: 'Projects', cn: '项目案例', path: '/projects' },
        { en: 'Industries', cn: '行业应用', path: '/industries' },
        { en: 'Contact', cn: '联系我们', path: '/contact' }
      ]
    };
  },
  mounted() {
    // 2. 优化入场动画
    gsap.from(this.$refs.navbar, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.5,
      // 关键：动画结束后清除 GSAP 设置的样式，把控制权还给 CSS
      // 这样下面的 .navbar-hidden 才能生效
      onComplete: () => {
        gsap.set(this.$refs.navbar, { clearProps: 'all' });
      }
    });
  },
  methods: {
    hoverItem() {},
    resetItem() {}
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center; // 顶部对齐或居中
  padding: 40px 60px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  box-sizing: border-box;
  color: $text-primary;

  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;

  // 隐藏状态：向上位移并透明
  &.navbar-hidden {
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none; // 隐藏时禁止点击
  }

  .logo-img {
    height: 40px; // 根据实际 Logo 比例调整
    width: auto;
  }

  .menu-items {
    display: flex;
    gap: 40px;

    .menu-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      position: relative;
      font-size: 14px;
      
      .en {
        font-weight: 600;
        margin-bottom: 4px;
      }
      
      .cn {
        font-size: 12px;
        color: #ffffff;
        transition: color 0.3s;
      }

      // 动态下划线效果
      .underline {
        width: 0%;
        height: 1px;
        background-color: #fff;
        position: absolute;
        bottom: -5px;
        transition: width 0.3s ease;
      }

      &:hover {
        .cn { color: #fff; }
        .underline { width: 100%; }
      }
    }
  }

  .lang-switch {
    font-size: 14px;
    cursor: pointer;
    font-weight: bold;
    opacity: 0.8;
    &:hover { opacity: 1; }
  }
}
</style>