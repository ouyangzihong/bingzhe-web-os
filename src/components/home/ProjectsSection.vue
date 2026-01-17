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

// 占位图：请替换为你实际的项目图片路径
const placeholderImg = 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop';

export default {
  name: 'ProjectsSection',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeIndex: -1,
      projectsList: [
        { key: 'residence', image: placeholderImg },
        { key: 'hotel',     image: placeholderImg },
        { key: 'showroom',  image: placeholderImg },
        { key: 'resort',    image: placeholderImg }
      ]
      // 移除 hasAnimated，确保每次进入都能看到动画
    };
  },
  mounted() {
    // 【关键修改 1】初始化时立即隐藏所有栏目，防止“闪烁”
    // y: 100 表示下沉 100px，opacity: 0 表示完全透明
    gsap.set(this.$refs.cols, { y: 100, opacity: 0 });
  },
  watch: {
    isActive(newVal) {
      if (newVal) {
        // 当进入该屏时：播放进场动画
        this.playEnterAnimation();
      } else {
        // 【关键修改 2】当离开该屏时：重置为隐藏状态
        // 这样下次回来时，又能看到漂亮的进场动画了
        // 同时也保证了滑动过程中看到的是纯白背景
        gsap.set(this.$refs.cols, { y: 100, opacity: 0 });
      }
    }
  },
  methods: {
    playEnterAnimation() {
      // 使用 .to 从当前状态(隐藏)过渡到显示状态
      gsap.to(this.$refs.cols, { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        stagger: 0.15, // 间隔 0.15秒依次出现
        ease: 'power3.out', 
        delay: 0.2 
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

.projects-section {
  width: 100%;
  height: 100%;
  display: flex;
  // 【关键修改 3】背景色改为纯白
  // 当栏目还没出来时，用户会看到干净的白色背景
  background-color: #fff; 
}

.project-col {
  position: relative;
  flex: 1;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  border-right: 1px solid rgba(255, 255, 255, 0.1);

  // 这里的 opacity 不需要设置，因为 JS mounted 会接管，
  // 但为了双重保险避免极慢网络下的闪烁，可以加上 opacity: 0; 
  // 不过通常 gsap.set 足够快。

  &:last-child {
    border-right: none;
  }

  .bg-layer {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background-size: cover;
    background-position: center;
    transition: transform 0.8s ease;
  }

  &:hover .bg-layer {
    transform: scale(1.05);
  }

  .mask {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.7) 100%);
    pointer-events: none;
  }

  .content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 40px 30px 90px 30px; 
    z-index: 2;
    box-sizing: border-box;
  }

  .text-group {
    color: #fff;
    
    .title {
      font-size: 21px; 
      font-weight: 500; 
      margin-bottom: 12px;
      line-height: 1.2;
    }

    .desc {
      font-size: 14px;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.85);
      margin-bottom: 20px;
      max-width: 95%;
      font-weight: 300; 
    }

    .meta {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: rgba(255, 255, 255, 0.6);
      font-weight: 300;
      
      .divider {
        margin: 0 8px;
        color: rgba(255, 255, 255, 0.3);
      }
    }
  }
}

/* --- 移动端适配 --- */
@media screen and (max-width: 768px) {
  .projects-section {
    flex-direction: column;
  }

  .project-col {
    width: 100%;
    flex: 1;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    .bg-layer {
      background-position: center top;
    }

    .content {
      padding: 20px 20px 40px 20px; 
    }

    .text-group {
      .title { font-size: 18px; margin-bottom: 8px; }
      .desc { 
        font-size: 12px; 
        margin-bottom: 10px; 
        font-weight: 300;
      }
    }
  }
}
</style>