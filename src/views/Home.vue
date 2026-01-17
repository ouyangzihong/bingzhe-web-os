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

      <div class="section-panel" ref="section3">
        <ProjectsSection :is-active="currentIndex === 3" />
      </div>
      <div class="section-panel" ref="section4">
        <WhyChooseUsSection :is-active="currentIndex === 4" />
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
import ProcessSection from '@/components/home/ProcessSection.vue';
// 2. 引入新组件
import ProjectsSection from '@/components/home/ProjectsSection.vue';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection.vue';

gsap.registerPlugin(Observer);

export default {
  name: 'HomeView',
  // 3. 注册组件
  components: { TheNavbar, HeroSection, ServicesSection, ProcessSection, ProjectsSection,WhyChooseUsSection},
  data() {
    return {
      currentIndex: 0,
      isAnimating: false,
      totalSections: 5
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
      // 5. 将 section3 加入数组
      const sections = [this.$refs.section0, this.$refs.section1, this.$refs.section2, this.$refs.section3,this.$refs.section4];
      
      gsap.set(sections, { 
        zIndex: (i) => i, 
        yPercent: (i) => i === 0 ? 0 : 100, // 除了第一屏，其他都藏在下面
        scale: 1, 
        filter: "brightness(1)" 
      });
    },

    initObserver() {
      Observer.create({
        target: window,
        type: "wheel,touch,pointer",
        wheelSpeed: 1,
        tolerance: 5,
        preventDefault: true,
        
        onUp: () => {
          if (!this.isAnimating && this.currentIndex > 0) {
            this.gotoSection(this.currentIndex - 1, -1);
          }
        },
        onDown: () => {
          // 6. 确保不超过 totalSections - 1
          if (!this.isAnimating && this.currentIndex < this.totalSections - 1) {
            this.gotoSection(this.currentIndex + 1, 1);
          }
        }
      });
    },

    gotoSection(index, direction) {
      this.isAnimating = true;
      
      // 7. 更新引用数组，包含所有 4 个 section
      const sections = [this.$refs.section0, this.$refs.section1, this.$refs.section2, this.$refs.section3, this.$refs.section4];
      const fromSection = sections[this.currentIndex];
      const toSection = sections[index];

      const tl = gsap.timeline({
        onComplete: () => {
          this.isAnimating = false;
          this.currentIndex = index;
        }
      });

      const animDuration = 1.0; 

      if (direction === 1) {
        // 向下滚动 (进入下一屏)
        tl.fromTo(toSection, 
          { yPercent: 100 }, 
          { yPercent: 0, duration: animDuration, ease: "power4.inOut" }
        )
        .to(fromSection, { 
          scale: 0.95, 
          filter: "brightness(0.5)", 
          duration: animDuration, 
          ease: "power4.inOut" 
        }, "<");

      } else {
        // 向上滚动 (返回上一屏)
        tl.to(fromSection, { 
          yPercent: 100, 
          duration: animDuration, 
          ease: "power4.inOut" 
        })
        .fromTo(toSection, 
          { scale: 0.95, filter: "brightness(0.5)" },
          { scale: 1, filter: "brightness(1)", duration: animDuration, ease: "power4.inOut" }, 
          "<"
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

// 样式部分保持原样即可，因为新增的 section-panel 共享相同的类名定义
.home-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #000;
}

.sections-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.section-panel {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transform: translateZ(0); 
  backface-visibility: hidden; 
  will-change: transform, filter;
}
</style>