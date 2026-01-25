<template>
  <section class="process-section">
    <div class="content-wrapper">
      <div class="stats-row" ref="statsRow">
        <div 
          class="stat-item" 
          v-for="(item, index) in $t('process.stats')" 
          :key="'stat-'+index"
        >
          <div class="stat-num">{{ item.num }}</div>
          <div class="stat-info">
            <h4 class="stat-title">{{ item.title }}</h4> 
            <p class="stat-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>

      <div class="timeline-row" ref="timelineRow">
        <div class="timeline-line"></div>
        <div 
          class="timeline-item" 
          v-for="(item, index) in $t('process.timeline')" 
          :key="'time-'+index"
          :class="{ 'up': index % 2 === 0, 'down': index % 2 !== 0 }"
        >
          <div class="dot"></div>
          <div class="text-group">
            <div class="main-text">{{ item.step }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gsap from 'gsap';

export default {
  name: 'ProcessSection',
  props: { isActive: { type: Boolean, default: false } },
  data() {
    return {
      hasAnimated: false // 【修改】新增：记录是否已经播放过动画
    };
  },
  watch: {
    isActive(val) {
      // 【修改】只在变为 true 且从未播放过时执行
      if (val && !this.hasAnimated) {
        this.playEnterAnimation();
        this.hasAnimated = true; // 标记已播放
      }
      // 注意：删除了 else { resetAnimation() }，这样离开时保持原样
    }
  },
  mounted() {
    // 依然需要在最开始重置一次，保证初始状态是隐藏的
    this.resetAnimation();
  },
  methods: {
    playEnterAnimation() {
      const tl = gsap.timeline();
      
      tl.to('.stat-item', {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out'
      });

      tl.to('.timeline-row', { opacity: 1, duration: 1 }, "-=0.4");

      tl.to('.timeline-item .dot', {
        scale: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)'
      }, "-=0.8");
      
      tl.to('.timeline-item .text-group', {
        y: 0, opacity: 1, duration: 0.5, stagger: 0.1
      }, "-=0.6");
    },

    resetAnimation() {
      gsap.set('.stat-item', { y: 50, opacity: 0 });
      gsap.set('.timeline-row', { opacity: 0 });
      gsap.set('.timeline-item .dot', { scale: 0 });
      gsap.set('.timeline-item .text-group', { y: 20, opacity: 0 });
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

// 样式部分保持我们之前修改过的 min-height: 100vh
.process-section {
  width: 100%;
  min-height: 100vh;
  background-color: #3f3f3f;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 5%;
  background-image: url('~@/assets/images/home/Home003.webp'); 
  background-size: cover;
  background-position: center;
    &::before {
    content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background-color: rgba(0, 0, 0, 0.2); z-index: 1;
  }
}

.content-wrapper {
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: space-evenly;
  z-index: 2
}

// ... 保持原有的 stat-item 和 timeline-row 样式不变 ...
// 注意：CSS 中的 opacity: 0; transform: ... 初始样式要保留，供 resetAnimation 使用
.stats-row {
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  padding-bottom: 4vh;
}

.stat-item {
  flex: 1;
  padding: 0 20px;
  text-align: center;
  border-right: 1px solid rgba(255,255,255,0.2);
  opacity: 0; 
  transform: translateY(50px); 
  &:last-child { border-right: none; }
  .stat-num {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(to bottom, #fff, #999);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .stat-title {
    font-size: 0.9rem;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    font-weight: 600;
  }
  .stat-desc {
    font-size: 0.8rem;
    color: rgba(255,255,255,0.6);
    line-height: 1.4;
    max-width: 80%;
    margin: 0 auto;
  }
}

.timeline-row {
  position: relative;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4vh;
  opacity: 0;

  .timeline-line {
    position: absolute; top: 50%; left: 0; width: 100%; height: 1px;
    background: #fff; z-index: 0;
  }
}

.timeline-item {
  position: relative; z-index: 1; flex: 1; text-align: center;
  display: flex; flex-direction: column; align-items: center; justify-content: center;

  .dot {
    width: 16px; height: 16px; background: #fff; border-radius: 50%;
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%, -50%) scale(0); 
  }

  .text-group {
    position: absolute; width: 100%; padding: 0 10px;
    opacity: 0; transform: translateY(20px);
  }

  .main-text { font-size: 1rem; font-weight: 600; margin-bottom: 4px; }
  .sub-text { font-size: 0.75rem; color: rgba(255,255,255,0.5); font-family: sans-serif; }
  
  &.up .text-group { bottom: 50%; margin-bottom: 25px; }
  &.down .text-group { top: 50%; margin-top: 25px; }
}

@media screen and (max-width: 768px) {
  // ... 保持原有移动端样式 ...
  .content-wrapper { height: auto; justify-content: flex-start; padding: 80px 0 40px; overflow-y: auto; }
  .stats-row { flex-wrap: wrap; border-bottom: none; padding-bottom: 20px; }
  .stat-item { flex: 0 0 50%; border-right: none; margin-bottom: 30px; padding: 0 10px; .stat-num { font-size: 2.5rem; } }
  .timeline-row { flex-direction: column; height: auto; align-items: flex-start; padding-left: 20px; margin-top: 20px; .timeline-line { width: 1px; height: 100%; top: 0; left: 27px; } }
  .timeline-item { width: 100%; flex-direction: row; justify-content: flex-start; align-items: flex-start; margin-bottom: 30px; text-align: left; position: static; .dot { position: static; transform: scale(0); width: 14px; height: 14px; margin-right: 20px; margin-top: 5px; flex-shrink: 0; } .text-group { position: static; margin: 0 !important; text-align: left; } }
}
</style>