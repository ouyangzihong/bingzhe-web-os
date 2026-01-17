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
            <div class="sub-text" v-if="item.sub">{{ item.sub }}</div>
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
      // 移除 hasAnimated 锁，允许重复播放
    };
  },
  watch: {
    isActive(val) {
      if (val) {
        this.playEnterAnimation();
      } else {
        this.resetAnimation();
      }
    }
  },
  mounted() {
    // 初始状态必须强制重置一次，确保 GSAP 状态与 CSS 一致
    this.resetAnimation();
  },
  methods: {
    // 进场动画：从 CSS 的隐藏状态 -> 变为可见
    playEnterAnimation() {
      const tl = gsap.timeline();
      
      // 1. 数据部分：上浮 + 变显
      tl.to('.stat-item', {
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.1, 
        ease: 'power3.out'
      });

      // 2. 时间轴整体淡入
      tl.to('.timeline-row', {
        opacity: 1, 
        duration: 1
      }, "-=0.4");

      // 3. 圆点：放大弹出
      tl.to('.timeline-item .dot', {
        scale: 1, 
        duration: 0.5, 
        stagger: 0.1, 
        ease: 'back.out(1.7)'
      }, "-=0.8");
      
      // 4. 文字：上浮 + 变显
      tl.to('.timeline-item .text-group', {
        y: 0, 
        opacity: 1, 
        duration: 0.5, 
        stagger: 0.1
      }, "-=0.6");
    },

    // 离场重置：瞬间变回 CSS 定义的初始隐藏状态
    resetAnimation() {
      // 这里的设置必须和 CSS 里的初始状态完全一致
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

.process-section {
  width: 100%;
  height: 100%;
  background-color: #3f3f3f;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5%;
}

.content-wrapper {
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: space-evenly;
}

/* --- 1. 数据统计区域 --- */
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
  
  // [关键修改] CSS 初始状态：隐藏且下沉
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

/* --- 2. 时间轴区域 --- */
.timeline-row {
  position: relative;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4vh;
  
  // [关键修改] CSS 初始状态：隐藏
  opacity: 0;

  .timeline-line {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background: #fff;
    z-index: 0;
  }
}

.timeline-item {
  position: relative;
  z-index: 1;
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .dot {
    width: 16px;
    height: 16px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    
    // 注意：这里不能直接写 transform: translate(-50%, -50%) scale(0)
    // 因为这会覆盖居中的 transform。
    // 我们用 margin 负值居中更稳妥，或者在动画里小心处理。
    // 这里为了配合 GSAP，我们保持 transform 居中，用 scale(0) 隐藏
    transform: translate(-50%, -50%) scale(0); 

    // box-shadow: 0 0 0 4px #3f3f3f;
  }

  .text-group {
    position: absolute;
    width: 100%;
    padding: 0 10px;
    
    // [关键修改] CSS 初始状态：隐藏且下沉
    opacity: 0;
    transform: translateY(20px);
  }

  .main-text { font-size: 1rem; font-weight: 600; margin-bottom: 4px; }
  .sub-text { font-size: 0.75rem; color: rgba(255,255,255,0.5); font-family: sans-serif; }
  
  &.up .text-group { bottom: 50%; margin-bottom: 25px; }
  &.down .text-group { top: 50%; margin-top: 25px; }
}

@media screen and (max-width: 768px) {
  .content-wrapper {
    height: auto;
    justify-content: flex-start;
    padding: 80px 0 40px;
    overflow-y: auto;
  }
  .stats-row {
    flex-wrap: wrap;
    border-bottom: none;
    padding-bottom: 20px;
  }
  .stat-item {
    flex: 0 0 50%;
    border-right: none;
    margin-bottom: 30px;
    padding: 0 10px;
    
    // 移动端保持初始隐藏逻辑，无需重写 opacity
    
    .stat-num { font-size: 2.5rem; margin-bottom: 0.5rem; }
    .stat-desc { font-size: 0.75rem; max-width: 100%; }
  }
  .timeline-row {
    flex-direction: column;
    height: auto;
    align-items: flex-start;
    padding-left: 20px;
    margin-top: 20px;
    .timeline-line {
      width: 1px;
      height: 100%;
      top: 0;
      left: 27px;
      background: rgba(255,255,255,0.2);
    }
  }
  .timeline-item {
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 30px;
    text-align: left;
    position: static;
    .dot {
      position: static;
      // 移动端 dot 的初始状态
      transform: scale(0); 
      
      width: 14px;
      height: 14px;
      margin-right: 20px;
      margin-top: 5px;
      flex-shrink: 0;
    }
    .text-group {
      position: static;
      margin: 0 !important;
      text-align: left;
      
      // 移动端保持初始隐藏逻辑
      // 注意：移动端不需要 translateY(20px) 绝对定位，但可以用 translate 做动效
      // CSS 类 .text-group 已经有了 translateY(20px)，这里会生效为位移
    }
    .main-text { font-size: 1.1rem; }
    .sub-text { font-size: 0.8rem; }
  }
}
</style>