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
        <h3 class="en-title">{{ item.en }}</h3>
        <p class="cn-subtitle">{{ item.cn }}</p>
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
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      servicesList: [
        { en: 'Design Services', cn: '设计服务', bgImage: bgDesign },
        { en: 'Wallcovering & Surfaces', cn: '墙面系统与表面材料', bgImage: bgSurfaces },
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
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.2
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

.services-section {
  width: 100%;
  height: 100%; // 继承父容器高度
  display: flex;
  overflow: hidden;
}

.service-col {
  // --- 关键点 1: 基础 Flex 设置 ---
  flex: 1; // 默认大家平分宽度
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 100px;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer; // 鼠标变手型，提示可交互

  // --- 关键点 2: 动画过渡设置 ---
  // transition 包含 flex (宽度变化) 和 filter (可能的滤镜变化)
  // cubic-bezier 是一种带有回弹感的曲线，比 ease 更丝滑
  transition: flex 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.6s ease;

  // 初始入场动画状态 (保持不变)
  &.initial-state {
    transform: translateY(150px);
    opacity: 0;
  }

  &:last-child {
    border-right: none;
  }

  // --- 关键点 3: 悬浮交互 (核心) ---
  &:hover {
    // 当鼠标悬浮时，权重变为 2 (即宽度变为原来的约 2 倍)
    // 其他兄弟元素保持 flex: 1，所以会被自然挤压
    flex: 2; 
  }

  // 遮罩层 (颜色固定为 0.4，去掉 hover 变化)
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4); 
    // 这里移除了 transition 和 hover 效果
    pointer-events: none; // 确保鼠标事件穿透给父容器
  }

  .content {
    position: relative;
    z-index: 2;
    text-align: center;
    color: $text-primary;
    
    // 防止宽度压缩时文字折行太厉害，保持内容区的最小宽度
    min-width: 200px; 
    transition: opacity 0.3s;

    .en-title {
      font-size: 24px;
      font-weight: 400;
      margin-bottom: 12px;
      white-space: nowrap; // 强制不换行，保持美观
    }
    
    .cn-subtitle {
      font-size: 14px;
      color: $text-secondary;
      font-weight: 300;
    }
  }
}
</style>