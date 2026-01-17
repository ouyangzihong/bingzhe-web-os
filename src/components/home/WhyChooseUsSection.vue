<template>
  <section class="why-choose-us-section">
    <div class="container">
      <div class="header-area">
        <h2 class="section-title">{{ $t('whyChooseUs.title') }}</h2>
        <p class="section-subtitle">{{ $t('whyChooseUs.subtitle') }}</p>
      </div>

      <div class="pillars-grid">
        <div 
          v-for="(item, index) in $t('whyChooseUs.items')" 
          :key="index" 
          class="pillar-item"
        >
          <h3 class="pillar-title">{{ item.title }}</h3>
          <p class="pillar-desc">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WhyChooseUsSection"
};
</script>

<style lang="scss" scoped>
// 假设你有一些全局变量，如果没有，这里使用了硬编码的颜色作为回退
$dark-bg: #3f3f3f; // 深色背景，接近图片
$text-white: #ffffff;
$text-gray: #b0b0b0;

.why-choose-us-section {
  width: 100%;
  height: 100vh; // 占满全屏
  background-color: $dark-bg; 
  color: $text-white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;

  .container {
    width: 100%;
    height: 100%;
    padding: 8vh 5vw; // 上下左右留白
    display: flex;
    flex-direction: column;
    justify-content: space-between; // 关键：撑开上下空间
    max-width: 1600px;
    margin: 0 auto;
    box-sizing: border-box;
  }
}

// 顶部标题样式
.header-area {
  text-align: left;
  
  .section-title {
    font-size: 2.5rem; // 大标题
    font-weight: 500;
    margin-bottom: 0.5rem;
    letter-spacing: -1px;
  }

  .section-subtitle {
    font-size: 1.2rem;
    color: $text-gray;
    // font-weight: 300;
    letter-spacing: 1px;
    opacity: 0.8;
  }
}

// 底部四列样式
.pillars-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); // 4等分列
  gap: 40px; // 列间距
  align-items: flex-start; // 顶部对齐
  padding-bottom: 5vh; // 底部留一点余量

  .pillar-item {
    text-align: center; // 左对齐，符合现代排版

    .pillar-title {
      font-size: 1.5rem;
      font-weight: 500;
      margin-bottom: 1.2rem;
      position: relative;
      
      // 可选：加一个小装饰线条增强设计感
    //   &::after {
    //     content: '';
    //     display: block;
    //     width: 30px;
    //     height: 2px;
    //     background: rgba(255,255,255,0.3);
    //     margin-top: 15px;
    //   }
    }

    .pillar-desc {
      font-size: 0.75rem;
      color: $text-gray;
      line-height: 1.6;
      font-weight: 300;
    }
  }
}

// --- 移动端适配 (Max-width: 768px) ---
@media (max-width: 768px) {
  .why-choose-us-section {
    height: auto; // 移动端通常不需要强制 100vh，内容撑开即可
    min-height: 100vh;
    padding: 80px 0; // 增加顶部避让导航栏

    .container {
      justify-content: flex-start; // 取消两端对齐，改为自然流
      gap: 50px; // 标题和内容之间的间距
      padding: 20px;
    }
  }

  .header-area {
    .section-title {
      font-size: 2.5rem; // 手机端标题调小
    }
  }

  .pillars-grid {
    grid-template-columns: 1fr; // 变为单列
    gap: 40px; // 每个模块之间的间距
    padding-bottom: 0;

    .pillar-item {
      .pillar-title {
        font-size: 1.1rem;
        margin-bottom: 0.8rem;
      }
    }
  }
}
</style>