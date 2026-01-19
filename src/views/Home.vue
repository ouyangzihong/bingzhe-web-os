<template>
  <div class="home-container">
    <TheNavbar :is-visible="true" />
    
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

      <div class="section-panel" ref="section5">
        <ContactSection :is-active="currentIndex === 5" />
      </div>
    </div>
    
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from '@/components/common/TheNavbar.vue';
import TheFooter from '@/components/common/TheFooter.vue';
import HeroSection from '@/components/home/HeroSection.vue';
import ServicesSection from '@/components/home/ServicesSection.vue';
import ProcessSection from '@/components/home/ProcessSection.vue';
import ProjectsSection from '@/components/home/ProjectsSection.vue';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection.vue';
// 引入新组件
import ContactSection from '@/components/home/ContactSection.vue';

export default {
  name: 'HomeView',
  components: { 
    TheNavbar, 
    TheFooter,
    HeroSection, 
    ServicesSection, 
    ProcessSection, 
    ProjectsSection, 
    WhyChooseUsSection,
    ContactSection
  },
  data() {
    return {
      currentIndex: 0,
      observer: null
    };
  },
  mounted() {
    this.initIntersectionObserver();
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    initIntersectionObserver() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.4 
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === this.$refs.section0) this.currentIndex = 0;
            else if (entry.target === this.$refs.section1) this.currentIndex = 1;
            else if (entry.target === this.$refs.section2) this.currentIndex = 2;
            else if (entry.target === this.$refs.section3) this.currentIndex = 3;
            else if (entry.target === this.$refs.section4) this.currentIndex = 4;
            else if (entry.target === this.$refs.section5) this.currentIndex = 5; // 新增监听
          }
        });
      }, options);

      const sections = [
        this.$refs.section0, 
        this.$refs.section1, 
        this.$refs.section2, 
        this.$refs.section3, 
        this.$refs.section4,
        this.$refs.section5 // 新增观察对象
      ];
      
      sections.forEach(section => {
        if (section) this.observer.observe(section);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

.home-container {
  position: relative; 
  width: 100%;
  min-height: 100vh;
  background-color: #000;
}

.sections-wrapper {
  position: relative;
  width: 100%;
}

.section-panel {
  position: relative;
  width: 100%;
  min-height: 100vh; 
  /* 确保每个 section 都是块级上下文，避免外边距重叠问题 */
  display: flex;
  flex-direction: column;
}
</style>