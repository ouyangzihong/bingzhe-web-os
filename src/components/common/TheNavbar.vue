<template>
  <nav class="navbar" ref="navbar" :class="{ 'navbar-hidden': !isVisible }">
    <div class="logo-container">
      <img src="@/assets/images/logo.png" alt="PINGENE Logo" class="logo-img" />
    </div>

    <div class="menu-items">
      <div 
        v-for="(item, index) in menuKeys" 
        :key="index" 
        class="menu-item"
        @mouseenter="hoverItem()"
        @mouseleave="resetItem()"
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
      menuKeys: [
        { key: 'home', path: '/' },
        { key: 'about', path: '/about' },
        { key: 'services', path: '/services' },
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
      y: -100, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.5,
      onComplete: () => { gsap.set(this.$refs.navbar, { clearProps: 'all' }); }
    });
  },
  methods: {
    toggleLanguage() {
      const newLang = this.$i18n.locale === 'en' ? 'zh' : 'en';
      this.$i18n.locale = newLang;
      localStorage.setItem('app-language', newLang);
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
  color: $text-primary;
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
  background: transparent; // 确保透明

  &.navbar-hidden {
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
  }

  .logo-img { height: 40px; width: auto; }

  .menu-items {
    display: flex;
    gap: 40px;
    
    .menu-item {
      display: flex; flex-direction: column; align-items: center; cursor: pointer; position: relative;
      .menu-text { font-size: 14px; font-weight: 500; margin-bottom: 4px; text-transform: uppercase; transition: color 0.3s; }
      .underline { width: 0%; height: 1px; background-color: #fff; position: absolute; bottom: -5px; transition: width 0.3s ease; }
      &:hover .underline { width: 100%; }
    }
  }

  .lang-switch {
    font-size: 14px; cursor: pointer; font-weight: bold; opacity: 0.8;
    border: 1px solid rgba(255,255,255,0.3); padding: 4px 10px; border-radius: 20px;
    &:hover { opacity: 1; background: rgba(255,255,255,0.1); }
  }

  /* --- 移动端适配 (小于768px) --- */
  @media screen and (max-width: 768px) {
    padding: 20px; // 减小边距
    flex-wrap: wrap; // 允许换行

    .logo-container {
      order: 1;
      flex: 1; // Logo 占左边
    }

    .lang-switch {
      order: 2; // 语言切换放右边
    }

    .menu-items {
      order: 3;
      width: 100%; // 菜单占满第二行
      margin-top: 15px;
      gap: 20px;
      overflow-x: auto; // 允许横向滚动
      padding-bottom: 10px; // 滚动条留白
      justify-content: flex-start; // 左对齐

      // 隐藏滚动条
      &::-webkit-scrollbar { display: none; }
      
      .menu-item .menu-text {
        font-size: 12px; // 字体变小
        white-space: nowrap; // 防止文字换行
      }
    }
  }
}
</style>