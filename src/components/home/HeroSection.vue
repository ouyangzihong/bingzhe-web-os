<template>
  <section class="hero-section">
    <main class="hero-content">
      <div class="text-wrapper">
        <h1 class="headline">
          <div class="line-mask">
            <span class="anim-text">{{ $t('hero.title') }}</span>
          </div>
        </h1>
        <h2 class="sub-headline">
          <div class="line-mask">
            <span class="anim-text">{{ $t('hero.subtitle') }}</span>
          </div>
        </h2>
      </div>
    </main>
  </section>
</template>

<script>
import gsap from 'gsap';

export default {
  name: 'HeroSection',
  mounted() {
    this.initAnimation();
  },
  methods: {
    initAnimation() {
      const tl = gsap.timeline();
      tl.to('.anim-text', {
        y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: 'power4.out', delay: 0.5
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

.hero-section {
  width: 100%;
  height: 100%; // 继承父容器高度 (Home.vue控制)
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-image: url('~@/assets/images/home-bg.jpg'); 
  background-size: cover;
  background-position: center;
  
  &::before {
    content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background-color: rgba(0, 0, 0, 0.3); z-index: 1;
  }
}

.hero-content {
  flex: 1; display: flex; align-items: flex-end; padding: 0 0 100px 60px;
  color: $text-primary; z-index: 2; position: relative;
}

.text-wrapper {
  max-width: 800px;
  .line-mask { overflow: hidden; margin-bottom: 10px; }
  .anim-text { display: block; transform: translateY(100%); opacity: 0; }
  
  .headline { font-size: 30px; font-weight: 300; letter-spacing: 1px; color: rgba(255,255,255,0.6); margin-bottom: 10px; }
  .sub-headline { font-size: 36px; font-weight: 400; margin-bottom: 30px; letter-spacing: 0.5px; line-height: 1.2;}
  .cn-description { font-size: 20px; font-weight: 300; color: $text-secondary; letter-spacing: 2px; }
}

/* --- 移动端适配 --- */
@media screen and (max-width: 768px) {
  .hero-content {
    padding: 0 20px 80px 20px; // 左右边距减小
  }
  
  .text-wrapper {
    .headline { font-size: 18px; margin-bottom: 5px; } // 小标题变小
    .sub-headline { font-size: 24px; margin-bottom: 20px; } // 主标题变小
    .cn-description { font-size: 14px; line-height: 1.6; } // 描述文字变小
  }
}
</style>