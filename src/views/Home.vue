<template>
  <div class="home-container">
    <TheNavbar :is-visible="navVisible" />
    
    <div class="scroll-snap-container">
      <HeroSection class="snap-section" ref="firstSection" />
      
      <ServicesSection class="snap-section" />
    </div>
  </div>
</template>

<script>
import TheNavbar from '@/components/common/TheNavbar.vue';
import HeroSection from '@/components/home/HeroSection.vue';
import ServicesSection from '@/components/home/ServicesSection.vue';

export default {
  name: 'HomeView',
  components: {
    TheNavbar,
    HeroSection,
    ServicesSection
  },
  data() {
    return {
      navVisible: true, // 控制导航栏显示的状态
      observer: null    // 存放观察器实例
    };
  },
  mounted() {
    this.initObserver();
  },
  beforeDestroy() {
    // 组件销毁前，停止观察，防止内存泄漏
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    initObserver() {
      // 创建一个 IntersectionObserver (交叉观察器)
      // 它的作用是：当目标元素进入或离开视口时触发回调
      this.observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        // entry.isIntersecting 为 true 表示元素在屏幕里，false 表示出去了
        // threshold 设置为 0.5 意味着：只要第一屏超过一半可见，就显示导航栏
        this.navVisible = entry.isIntersecting;
      }, {
        threshold: 0.5 // 灵敏度：0.5 表示 50% 可见度
      });

      // 开始观察第一屏的 DOM 元素
      // $el 是 Vue 组件对应的真实 DOM 节点
      if (this.$refs.firstSection) {
        this.observer.observe(this.$refs.firstSection.$el);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

.home-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.scroll-snap-container {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  
  scrollbar-width: none; 
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
}

.snap-section {
  height: 100vh;
  scroll-snap-align: start;
  width: 100%;
}
</style>