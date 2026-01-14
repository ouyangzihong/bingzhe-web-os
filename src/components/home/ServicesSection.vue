<template>
  <section class="services-section">
    <div 
      v-for="(item, index) in servicesList" 
      :key="index" 
      class="service-col"
      :style="{ backgroundImage: `url(${item.bgImage})` }"
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
// 引入图片资源
import bgDesign from '@/assets/images/service-design.jpg';
import bgSurfaces from '@/assets/images/service-surfaces.jpg';

export default {
  name: 'ServicesSection',
  data() {
    return {
      // 数据来源于参考图 image_2.png
      servicesList: [
        { 
          en: 'Design Services', 
          cn: '设计服务',
          bgImage: bgDesign
        },
        { 
          en: 'Wallcovering & Surfaces', 
          cn: '墙面系统与表面材料',
          bgImage: bgSurfaces
        },
        // { 
        //   en: 'Soft Furnishing & Furniture', 
        //   cn: '软装与家具系统',
        //   bgImage: bgFurniture
        // }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

.services-section {
  width: 100%;
  height: 100vh; // 占满一屏
  display: flex; // Flex 布局实现三列并排
}

.service-col {
  flex: 1; // 三列平分宽度 (33.33%)
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end; // 内容底部对齐
  padding-bottom: 100px; // 底部留白距离
  border-right: 1px solid rgba(255, 255, 255, 0.2); // 列之间的分割线

  &:last-child {
    border-right: none;
  }

  // 独立的遮罩层，确保背景不影响文字
  .mask {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background-color: rgba(0, 0, 0, 0.4); // 比首页稍微亮一点的遮罩
    transition: background-color 0.3s ease; // 添加一个简单的交互效果
  }

  // 鼠标悬停时，遮罩变暗，突出显示
  &:hover .mask {
    background-color: rgba(0, 0, 0, 0.6);
  }

  .content {
    position: relative;
    z-index: 2; // 在遮罩之上
    text-align: center;
    color: $text-primary;

    .en-title {
      font-size: 24px;
      font-weight: 400;
      margin-bottom: 12px;
      letter-spacing: 0.5px;
    }
    
    .cn-subtitle {
      font-size: 14px;
      color: $text-secondary;
      font-weight: 300;
      letter-spacing: 1px;
    }
  }
}
</style>