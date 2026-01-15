<template>
  <section class="hero-section">
    <main class="hero-content">
      <div class="text-wrapper">
        <h1 class="headline">
          <div class="line-mask">
            <span class="anim-text">Design Beyond Products</span>
          </div>
        </h1>
        <h2 class="sub-headline">
          <div class="line-mask">
            <span class="anim-text">Integrated Interior Solutions for Global Spaces</span>
          </div>
        </h2>
        <div class="cn-description">
          <div class="line-mask">
            <span class="anim-text">设计不止于产品 · 国际化整体室内解决方案</span>
          </div>
        </div>
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
      // 稍微增加一点延迟，等页面切换顺滑后再执行文字动画
      tl.to('.anim-text', {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 0.5 
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

// 样式基本照搬，但容器类名改成了 hero-section
.hero-section {
  width: 100%;
  height: 100%; // 从 100vh 改为 100% (继承父容器高度)
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  // 背景图设置 (假设你已经设置好了首页背景图)
  background-image: url('~@/assets/images/home-bg.jpg'); 
  background-size: cover;
  background-position: center;
  
  // 黑色遮罩
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
}

.hero-content {
  flex: 1;
  display: flex;
  align-items: flex-end;
  padding: 0 0 100px 60px;
  color: $text-primary;
  z-index: 2;
  position: relative;
}

.text-wrapper {
  max-width: 800px;
  
  // 遮罩容器，用于实现文字“从无到有”向上滑出的效果
  .line-mask {
    overflow: hidden; 
    margin-bottom: 10px;
  }
  
  .anim-text {
    display: block;
    transform: translateY(100%); // 初始位置在下方
    opacity: 0;
  }

  .headline {
    font-size: 32px;
    font-weight: unset; // 细体，显高级
    letter-spacing: 1px;
    // color: rgba(255,255,255,0.6); // 稍微灰一点的主标题
    margin-bottom: 10px;
  }

  .sub-headline {
    font-size: 35px;
    font-weight: unset;
    margin-bottom: 30px;
    letter-spacing: 0.5px;
  }

  .cn-description {
    font-size: 20px;
    font-weight: unset;
    color: $text-secondary;
    letter-spacing: 2px;
  }
  .line-mask { overflow: hidden; margin-bottom: 10px; }
  .anim-text { display: block; transform: translateY(100%); opacity: 0; }
  .headline { font-size: 32px; font-weight: 300; letter-spacing: 1px; color: rgba(255,255,255,0.6); margin-bottom: 10px; }
  .sub-headline { font-size: 40px; font-weight: 400; margin-bottom: 30px; letter-spacing: 0.5px; }
  .cn-description { font-size: 20px; font-weight: 300; color: $text-secondary; letter-spacing: 2px; }
}
</style>