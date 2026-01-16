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

      <div class="section-panel" ref="section2">
        <ProcessSection :is-active="currentIndex === 2" />
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';
import Observer from 'gsap/Observer';

import TheNavbar from '@/components/common/TheNavbar.vue';
import HeroSection from '@/components/home/HeroSection.vue';
import ServicesSection from '@/components/home/ServicesSection.vue';
// 1. 引入新组件
import ProcessSection from '@/components/home/ProcessSection.vue'; 

gsap.registerPlugin(Observer);

export default {
  name: 'HomeView',
  // 2. 注册新组件
  components: { TheNavbar, HeroSection, ServicesSection, ProcessSection },
  data() {
    return {
      currentIndex: 0,
      isAnimating: false,
      totalSections: 3 // 3. 修改总屏数为 3
    };
  },
  mounted() {
    this.initLayout();
    this.initObserver();
  },
  beforeDestroy() {
    Observer.getAll().forEach(o => o.kill());
  },
  methods: {
    initLayout() {
      // 4. 将 section2 加入数组
      const sections = [this.$refs.section0, this.$refs.section1, this.$refs.section2];
      
      gsap.set(sections, { 
        zIndex: (i) => i, 
        yPercent: (i) => i === 0 ? 0 : 100,
        scale: 1, 
        filter: "brightness(1)" 
      });
    },

    // 观察器代码保持不变，因为它逻辑是通用的，只依赖 totalSections
    initObserver() {
      Observer.create({
        target: window,
        type: "wheel,touch,pointer",
        wheelSpeed: 1,
        tolerance: 5,         // <--- 修改点：从 10 改为 1，极其灵敏，一动就触发
        preventDefault: true,
        
        onUp: () => {
          if (!this.isAnimating && this.currentIndex > 0) {
            this.gotoSection(this.currentIndex - 1, -1);
          }
        },
        onDown: () => {
          if (!this.isAnimating && this.currentIndex < this.totalSections - 1) {
            this.gotoSection(this.currentIndex + 1, 1);
          }
        }
      });
    },

    gotoSection(index, direction) {
      this.isAnimating = true;
      
      const sections = [this.$refs.section0, this.$refs.section1, this.$refs.section2];
      const fromSection = sections[this.currentIndex];
      const toSection = sections[index];

      const tl = gsap.timeline({
        onComplete: () => {
          this.isAnimating = false;
          this.currentIndex = index;
        }
      });

      // 建议时长改为 0.8 或 1.0 (原为 1.2)
      const animDuration = 1.0; 

      if (direction === 1) {
        tl.fromTo(toSection, 
          { yPercent: 100 }, 
          { yPercent: 0, duration: animDuration, ease: "power4.inOut" } // <--- 修改时长
        )
        .to(fromSection, { 
          scale: 0.95, 
          filter: "brightness(0.5)", 
          duration: animDuration, // <--- 修改时长
          ease: "power4.inOut" 
        }, "<");

      } else {
        tl.to(fromSection, { 
          yPercent: 100, 
          duration: animDuration, // <--- 修改时长
          ease: "power4.inOut" 
        })
        .fromTo(toSection, 
          { scale: 0.95, filter: "brightness(0.5)" },
          { scale: 1, filter: "brightness(1)", duration: animDuration, ease: "power4.inOut" }, // <--- 修改时长
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