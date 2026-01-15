<template>
  <section class="services-section">
    <div 
      v-for="(item, index) in servicesList" 
      :key="index" 
      class="service-col initial-state"
      :style="{ backgroundImage: `url(${item.bgImage})` }"
      ref="cols" 
    >
      <div class="mask"></div>
      <div class="content">
        <h3 class="en-title">{{ $t(`services.${item.key}`) }}</h3>
      </div>
    </div>
  </section>
</template>

<script>
import gsap from 'gsap';
import bgDesign from '@/assets/images/service-design.jpg';
import bgSurfaces from '@/assets/images/service-surfaces.jpg';

export default {
  name: 'ServicesSection',
  props: { isActive: { type: Boolean, default: false } },
  data() {
    return {
      servicesList: [
        { key: 'design', bgImage: bgDesign },
        { key: 'surfaces', bgImage: bgSurfaces },
      ],
      hasAnimated: false
    };
  },
  watch: {
    isActive(newVal) {
      if (newVal && !this.hasAnimated) {
        this.playEnterAnimation();
        this.hasAnimated = true;
      }
    }
  },
  methods: {
    playEnterAnimation() {
      const tl = gsap.timeline();
      tl.to(this.$refs.cols, {
        y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: 'power3.out', delay: 0.2
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

.services-section {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
}

.service-col {
  flex: 1;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 100px;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: flex 0.6s cubic-bezier(0.25, 1, 0.5, 1); // 电脑端的宽度动画

  // &.initial-state { transform: translateY(150px); opacity: 0; }
  &:last-child { border-right: none; }
  
  // 电脑端悬浮变宽
  &:hover { flex: 2; }

  .mask {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background-color: rgba(0, 0, 0, 0.1); pointer-events: none;
  }

  .content {
    position: relative; z-index: 2; text-align: center; color: $text-primary;
    min-width: 200px;
    
    .en-title {
      font-size: 24px; font-weight: 400; margin-bottom: 12px; white-space: nowrap;
    }
  }
}

/* --- 移动端适配 --- */
@media screen and (max-width: 768px) {
  .services-section {
    flex-direction: column; // 改为竖向排列
  }

  .service-col {
    width: 100%; // 宽度占满
    flex: 1; // 高度平分
    border-right: none;
    border-bottom: 1px solid rgba(255,255,255,0.1); // 改为底部边框
    padding-bottom: 40px; // 减小底部留白
    
    // 手机端取消悬浮变宽效果，保持平分，防止触摸乱跳
    &:hover { flex: 1; }
    
    .content {
      .en-title { font-size: 18px; } // 字体调小
    }
  }
}
</style>