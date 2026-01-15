<template>
  <div class="home-container">
    <TheNavbar :is-visible="currentIndex === 0" />
    
    <div class="sections-wrapper">
      <div class="section-panel" ref="section0">
        <HeroSection />
      </div>

      <div class="section-panel" ref="section1">
        <ServicesSection :is-active="currentIndex === 1" />
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';
import Observer from 'gsap/Observer'; // 引入 Observer 插件

import TheNavbar from '@/components/common/TheNavbar.vue';
import HeroSection from '@/components/home/HeroSection.vue';
import ServicesSection from '@/components/home/ServicesSection.vue';

// 注册插件
gsap.registerPlugin(Observer);

export default {
  name: 'HomeView',
  components: { TheNavbar, HeroSection, ServicesSection },
  data() {
    return {
      currentIndex: 0, // 当前在第几屏
      isAnimating: false, // 动画锁，防止用户狂滚鼠标导致乱闪
      totalSections: 2 // 总共多少屏，如果你加了新页面，记得改这个数字
    };
  },
  mounted() {
    this.initLayout();
    this.initObserver();
  },
  beforeDestroy() {
    // 销毁时清理所有观察器，防止内存泄漏
    Observer.getAll().forEach(o => o.kill());
  },
  methods: {
    // 1. 初始化布局：除了第一屏，其他都扔到屏幕下方
    initLayout() {
      const sections = [this.$refs.section0, this.$refs.section1];
      
      // 设置初始状态
      gsap.set(sections, { 
        zIndex: (i) => i, 
        yPercent: (i) => i === 0 ? 0 : 100,
        
        // --- 新增以下两行 ---
        // 显式初始化 scale 和 filter，防止第一次动画时属性突变导致的闪烁
        scale: 1, 
        filter: "brightness(1)" 
      });
    },

    // 2. 初始化滚动监听
    initObserver() {
      Observer.create({
        target: window,         
        type: "wheel,touch,pointer", 
        wheelSpeed: 1,          // <--- 关键修改：从 -1 改为 1 (恢复正常方向)
        tolerance: 10,          
        preventDefault: true,   
        
        onUp: () => {
          // [onUp 触发]：现在对应“手指下滑”或“滚轮向上滚” -> 去上一页
          // 逻辑：如果不在第一页，就减 1
          if (!this.isAnimating && this.currentIndex > 0) {
            this.gotoSection(this.currentIndex - 1, -1);
          }
        },
        onDown: () => {
          // [onDown 触发]：现在对应“手指上滑”或“滚轮向下滚” -> 去下一页
          // 逻辑：如果不在最后一页，就加 1
          if (!this.isAnimating && this.currentIndex < this.totalSections - 1) {
            this.gotoSection(this.currentIndex + 1, 1);
          }
        }
      });
    },

    // 3. 核心切换动画 (direction: 1 是向下翻，-1 是向上翻)
    gotoSection(index, direction) {
      this.isAnimating = true;
      
      const sections = [this.$refs.section0, this.$refs.section1];
      const fromSection = sections[this.currentIndex];
      const toSection = sections[index];

      // --- 炫酷的运镜逻辑 ---
      const tl = gsap.timeline({
        onComplete: () => {
          this.isAnimating = false;
          this.currentIndex = index; // 动画结束后更新索引
        }
      });

      if (direction === 1) {
        // [向下翻]：新页面从底部升起，覆盖旧页面
        // 同时让旧页面稍微变暗 + 缩小，制造景深感
        tl.fromTo(toSection, 
          { yPercent: 100 }, 
          { yPercent: 0, duration: 1.2, ease: "power4.inOut" } // 极慢-极快-极慢
        )
        // 并行执行：旧页面微动
        .to(fromSection, { 
          scale: 0.95, // 稍微缩小
          filter: "brightness(0.5)", // 变暗
          duration: 1.2, 
          ease: "power4.inOut" 
        }, "<"); // "<" 表示和上一个动画同时开始

      } else {
        // [向上翻]：当前页面滑下去，露出下面的页面
        // 下面的页面（即我们要去的页面）从缩小变暗的状态恢复
        tl.to(fromSection, { 
          yPercent: 100, 
          duration: 1.2, 
          ease: "power4.inOut" 
        })
        .fromTo(toSection, 
          { scale: 0.95, filter: "brightness(0.5)" },
          { scale: 1, filter: "brightness(1)", duration: 1.2, ease: "power4.inOut" }, 
          "<"
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

.home-container {
  position: fixed; // 锁死窗口，禁止任何原生滚动
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #000; // 底色设为黑，防止动画间隙漏光
}

.sections-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.section-panel {
  position: absolute; // 绝对定位，让它们重叠
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  // 1. 强制开启 GPU 硬件加速
  transform: translateZ(0); 
  
  // 2. 防止 3D 变换（缩放）时的背面闪烁
  backface-visibility: hidden; 
  -webkit-backface-visibility: hidden;
  
  // 3. 明确告诉浏览器哪些属性会变，提前优化
  will-change: transform, filter;
}
</style>