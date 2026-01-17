<template>
  <section class="projects-section">
    <div 
      v-for="(item, index) in projectsList" 
      :key="index" 
      class="project-col"
      :class="{ 'active': activeIndex === index }"
      @mouseenter="activeIndex = index"
      @mouseleave="activeIndex = -1"
      ref="cols"
    >
      <div class="bg-layer" :style="{ backgroundImage: `url(${item.image})` }"></div>
      <div class="mask"></div>
      <div class="content">
        <div class="text-group">
          <h3 class="title">{{ $t(`projects.${item.key}.title`) }}</h3>
          <p class="desc">{{ $t(`projects.${item.key}.desc`) }}</p>
          <div class="meta">
            <span class="location">{{ $t(`projects.${item.key}.location`) }}</span>
            <span class="divider">|</span>
            <span class="type">{{ $t(`projects.${item.key}.type`) }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gsap from 'gsap';

const placeholderImg = 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop';

export default {
  name: 'ProjectsSection',
  props: { isActive: { type: Boolean, default: false } },
  data() {
    return {
      activeIndex: -1,
      hasAnimated: false, // 【修改】新增锁
      projectsList: [
        { key: 'residence', image: placeholderImg },
        { key: 'hotel',     image: placeholderImg },
        { key: 'showroom',  image: placeholderImg },
        { key: 'resort',    image: placeholderImg }
      ]
    };
  },
  mounted() {
    // 初始状态下沉隐藏
    gsap.set(this.$refs.cols, { y: 100, opacity: 0 });
  },
  watch: {
    isActive(newVal) {
      // 【修改】只触发一次
      if (newVal && !this.hasAnimated) {
        this.playEnterAnimation();
        this.hasAnimated = true;
      }
      // 删除了 else 分支
    }
  },
  methods: {
    playEnterAnimation() {
      gsap.to(this.$refs.cols, { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        stagger: 0.15, 
        ease: 'power3.out', 
        delay: 0.2 
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

// 样式部分保持之前的修改 (height: 100vh)
.projects-section {
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #fff; 
}

.project-col {
  position: relative;
  flex: 1;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  &:last-child { border-right: none; }
  .bg-layer {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background-size: cover; background-position: center; transition: transform 0.8s ease;
  }
  &:hover .bg-layer { transform: scale(1.05); }
  .mask {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.7) 100%); pointer-events: none;
  }
  .content {
    position: absolute; bottom: 0; left: 0; width: 100%; padding: 40px 30px 90px 30px; 
    z-index: 2; box-sizing: border-box;
  }
  .text-group {
    color: #fff;
    .title { font-size: 21px; font-weight: 500; margin-bottom: 12px; line-height: 1.2; }
    .desc { font-size: 14px; line-height: 1.6; color: rgba(255, 255, 255, 0.85); margin-bottom: 20px; max-width: 95%; font-weight: 300; }
    .meta { font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: rgba(255, 255, 255, 0.6); font-weight: 300; .divider { margin: 0 8px; color: rgba(255, 255, 255, 0.3); } }
  }
}

@media screen and (max-width: 768px) {
  .projects-section { flex-direction: column; height: auto; min-height: 100vh; }
  .project-col { width: 100%; flex: 1; border-right: none; border-bottom: 1px solid rgba(255, 255, 255, 0.1); .bg-layer { background-position: center top; } .content { padding: 20px 20px 40px 20px; } .text-group { .title { font-size: 18px; margin-bottom: 8px; } .desc { font-size: 12px; margin-bottom: 10px; font-weight: 300; } } }
}
</style>