<template>
  <nav 
    class="navbar" 
    ref="navbar" 
    :class="{ 
      'nav-scrolled': isScrolled,
      'navbar-hidden': !isVisible 
    }"
  >
    <div class="logo-container" @click="handleNavClick('/')" style="cursor: pointer;">
      <img src="@/assets/images/logo.png" alt="PINGENE Logo" class="logo-img" />
    </div>

    <div class="menu-items">
      <div 
        v-for="(item, index) in menuKeys" 
        :key="index" 
        class="menu-item"
        @mouseenter="hoverItem()"
        @mouseleave="resetItem()"
        @click="handleNavClick(item.path)" 
      >
        <span class="menu-text">{{ $t(`navbar.${item.key}`) }}</span>
        <div class="underline"></div>
      </div>
    </div>

    <div class="lang-switch" @click="toggleLanguage">
      <span>{{ currentLangLabel }}</span>
    </div>
  </nav>
</template>

<script>
import gsap from 'gsap';

export default {
  name: 'TheNavbar',
  props: {
    isVisible: { type: Boolean, default: true }
  },
  data() {
    return {
      isScrolled: false,
      menuKeys: [
        { key: 'home', path: '/' },
        { key: 'about', path: '/about' },
        { key: 'products', path: '/products' },
        { key: 'projects', path: '/projects' },
        { key: 'industries', path: '/industries' },
        { key: 'contact', path: '/contact' }
      ]
    };
  },
  computed: {
    currentLangLabel() {
      return this.$i18n.locale === 'en' ? 'EN' : 'CN';
    }
  },
  mounted() {
    gsap.from(this.$refs.navbar, {
      y: -100, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.2,
      onComplete: () => { gsap.set(this.$refs.navbar, { clearProps: 'transform,opacity' }); }
    });
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    toggleLanguage() {
      const newLang = this.$i18n.locale === 'en' ? 'zh' : 'en';
      this.$i18n.locale = newLang;
      localStorage.setItem('app-language', newLang);
    },
    // --- 新增：处理导航跳转 ---
    handleNavClick(path) {
      // 如果当前就在这个路径，就不跳转，避免报错
      if (this.$route.path === path) return;
      
      this.$router.push(path).catch(err => {
        // 捕获重复导航的错误（Vue Router 常见的小问题）
        if (err.name !== 'NavigationDuplicated') {
          console.error(err);
        }
      });
    },
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
  align-items: center;
  padding: 40px 60px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  box-sizing: border-box;
  
  // --- 默认状态 (透明底，白字) ---
  background-color: transparent; 
  color: #ffffff; 

  // --- 关键：添加过渡动画 ---
  // all 0.4s ease 表示所有属性变化都在 0.4秒内完成平滑过渡
  transition: background-color 0.4s ease, padding 0.4s ease, box-shadow 0.4s ease, color 0.4s ease;

  // 隐藏时的样式 (保留逻辑)
  &.navbar-hidden {
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
  }

  // --- 滚动后的状态 (白底，黑字) ---
  &.nav-scrolled {
    background-color: #ffffff; // 变白底
    padding: 20px 60px; // 高度稍微收缩，显得更精致
    box-shadow: 0 4px 20px rgba(0,0,0,0.08); // 添加淡阴影
    color: #333333; // 变黑字

    // 1. 处理 Logo 颜色
    // 如果原图是纯白色，用 invert(1) 反转成黑色
    // 如果原图是彩色，请根据实际情况去掉 filter 或更换 img src
    .logo-container .logo-img {
      filter: invert(1) brightness(0.2); 
    }

    // 2. 处理菜单下划线
    .menu-items .menu-item .underline {
      background-color: #333333;
    }

    // 3. 处理语言切换按钮边框和背景
    .lang-switch {
      border-color: #999;
      color: #333;
      &:hover {
        background: rgba(0,0,0,0.05);
      }
    }
  }

  .logo-container {
    .logo-img { 
      height: 30px; 
      width: auto; 
      transition: filter 0.4s ease; // Logo 颜色反转也要过渡
    }
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
      
      .menu-text { 
        font-size: 14px; 
        font-weight: 500; 
        margin-bottom: 4px; 
        text-transform: uppercase; 
        transition: color 0.4s ease; // 文字颜色过渡
      }
      
      .underline { 
        width: 0%; 
        height: 1px; 
        background-color: #ffffff; // 默认白色
        position: absolute; 
        bottom: -5px; 
        transition: width 0.3s ease, background-color 0.4s ease; // 颜色也需要过渡
      }
      
      &:hover .underline { 
        width: 100%; 
      }
    }
  }

  .lang-switch {
    font-size: 14px; 
    cursor: pointer; 
    font-weight: bold; 
    opacity: 0.8;
    border: 1px solid rgba(255,255,255,0.3); 
    padding: 4px 10px; 
    border-radius: 20px;
    transition: all 0.4s ease; // 边框颜色过渡

    &:hover { 
      opacity: 1; 
      background: rgba(255,255,255,0.1); 
    }
  }

  /* --- 移动端适配 (小于768px) --- */
  @media screen and (max-width: 768px) {
    padding: 20px;
    
    // 移动端滚动后的样式调整
    &.nav-scrolled {
      padding: 15px 20px;
    }

    .logo-container {
      order: 1;
      flex: 1;
    }

    .lang-switch {
      order: 2;
    }

    .menu-items {
      order: 3;
      width: 100%;
      margin-top: 15px;
      gap: 20px;
      overflow-x: auto;
      padding-bottom: 10px;
      justify-content: flex-start;
      
      &::-webkit-scrollbar { display: none; }
      
      .menu-item .menu-text {
        font-size: 12px;
        white-space: nowrap;
      }
    }
  }
}
</style>