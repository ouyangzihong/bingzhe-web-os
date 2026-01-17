<template>
  <div class="project-detail-page" v-if="currentProject">
    <TheNavbar :is-visible="true" class="fixed-top-nav" />

    <header class="hero-section">
      <div class="hero-content-wrapper">
        
        <h1 class="hero-title">{{ currentProject.title }}</h1>
        
        <div class="hero-intro-box">
          <p class="intro-text">{{ currentProject.intro }}</p>
        </div>

        <div class="hero-meta">
          <div class="meta-group">
            <span class="label">Location</span>
            <span class="value">{{ currentProject.location }}</span>
          </div>
          <div class="meta-group">
            <span class="label">Date</span>
            <span class="value">{{ currentProject.date }}</span>
          </div>
          <div class="meta-group">
            <span class="label">Type</span>
            <span class="value">{{ currentProject.type }}</span>
          </div>
        </div>

      </div>
      
      <div class="scroll-arrow">↓</div>
    </header>

    <div class="content-container">
      <div class="gallery-grid">
        
        <aside class="grid-col col-left sticky-col">
          <div class="content-wrapper">
            <div v-for="(item, i) in currentProject.leftContent" :key="i" class="left-item">
              <p v-if="item.type === 'text'" class="text-para">{{ item.content }}</p>
              <div v-else-if="item.type === 'image'" class="img-box small-square">
                <img :src="item.src" alt="Context" />
                <span class="caption" v-if="item.caption">{{ item.caption }}</span>
              </div>
            </div>
          </div>
        </aside>

        <main class="grid-col col-center">
          <div 
            v-for="(img, idx) in currentProject.mainImages" 
            :key="`m-${idx}`" 
            class="img-box portrait-large"
          >
            <img :src="img.src" alt="Main View" />
            <div class="image-label" v-if="img.label">{{ img.label }}</div>
          </div>
        </main>

        <aside class="grid-col col-right sticky-col">
          <div class="content-wrapper">
            <div v-for="(img, idx) in currentProject.rightImages" :key="`r-${idx}`">
              <div v-if="img.spacer" :style="{ height: img.height }"></div>
              <div v-else class="img-box detail-card">
                <img :src="img.src" alt="Detail" />
                <div class="detail-info">
                  <span class="img-name">{{ img.name }}</span>
                  <span class="img-meta">{{ img.meta }}</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

      </div>

      <div class="footer-nav">
        <router-link to="/projects" class="back-link">Back to Projects</router-link>
      </div>
    </div>

    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from '@/components/common/TheNavbar.vue';
import TheFooter from '@/components/common/TheFooter.vue';
import { projectsData } from '@/data/projects.js';
import gsap from 'gsap';

export default {
  name: 'ProjectDetail',
  components: { TheNavbar, TheFooter },
  data() {
    return {
      rawProject: null
    };
  },
  computed: {
    currentProject() {
      if (!this.rawProject) return null;
      const locale = this.$i18n.locale;
      const content = this.rawProject[locale];
      return {
        id: this.rawProject.id,
        coverImage: this.rawProject.coverImage,
        ...content
      };
    }
  },
  created() {
    const id = this.$route.params.id;
    this.rawProject = projectsData.find(p => p.id === id);
    if (!this.rawProject && projectsData.length > 0) {
      this.rawProject = projectsData[0];
    }
  },
  mounted() {
    gsap.from('.hero-content-wrapper', {
      y: 50, opacity: 0, duration: 1.2, ease: 'power3.out', delay: 0.2
    });
  }
};
</script>

<style lang="scss" scoped>
// 基础设置
.project-detail-page {
  background-color: #ffffff;
  color: #1a1a1a;
  min-height: 100vh;
}

// 导航栏固定定位
// 修改点 2: 删除了之前强制修改颜色的样式，只保留定位
.fixed-top-nav {
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  // 此时没有背景色，背景透明，文字默认白色，正好显示在 #3f3f3f 上
}

// === Hero Section ===
.hero-section {
  height: 100vh;
  width: 100%;
  padding: 120px 60px 80px; 
  box-sizing: border-box;
  
  // 修改点 3: 背景色改为深灰，文字改为白色
  background-color: #3f3f3f; 
  color: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: flex-end; // 垂直到底
  align-items: flex-start;   // 水平到左
  text-align: left;
  position: relative;
}

.hero-content-wrapper {
  max-width: 600px;
}

.hero-title {
  font-size: 40px;
  font-weight: 300;
  margin-bottom: 30px;
  line-height: 1.1;
  letter-spacing: -1px;
}

.hero-intro-box {
  margin-bottom: 50px;
  .intro-text {
    font-size: 18px;
    line-height: 1.6;
    // 修改点 4: 辅助文字颜色变浅，确保对比度
    color: #e0e0e0; 
    font-weight: 400;
  }
}

.hero-meta {
  display: flex;
  justify-content: flex-start;
  gap: 60px;
  // 修改点 5: 边框线改为半透明白，适配深底
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 20px;
  width: 100%;

  .meta-group {
    display: flex;
    flex-direction: column;
    gap: 5px;
    
    .label {
      font-size: 10px;
      text-transform: uppercase;
      // 修改点 6: 标签颜色变浅灰
      color: #aaaaaa;
      letter-spacing: 1px;
    }
    .value {
      font-size: 13px;
      font-weight: 500;
    }
  }
}

.scroll-arrow {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  // 修改点 7: 箭头颜色变浅
  color: rgba(255, 255, 255, 0.4);
  animation: bounce 2s infinite;
}

// === 核心内容区 (保持原样) ===
.content-container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 60px 150px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: 1fr 2.2fr 1fr;
  gap: 60px;
  align-items: start;
}

.sticky-col {
  position: sticky;
  top: 140px;
  height: fit-content;
  transition: top 0.3s;
}

.grid-col {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.img-box {
  width: 100%;
  img { width: 100%; height: auto; display: block; }
}

.text-para {
  font-size: 15px;
  line-height: 1.8;
  color: #333; // 正文还是深色，因为背景是白色
  margin-bottom: 10px;
  text-align: justify;
}

.detail-card .detail-info {
  margin-top: 12px;
  text-align: left;
  .img-name { display: block; font-size: 13px; font-weight: 600; margin-bottom: 4px; }
  .img-meta { font-size: 12px; color: #888; }
}

.footer-nav {
  margin-top: 120px;
  text-align: center;
  border-top: 1px solid #f0f0f0;
  padding-top: 60px;
  .back-link {
    font-size: 14px;
    color: #000;
    text-decoration: none;
    border-bottom: 1px solid #000;
    padding-bottom: 4px;
    &:hover { opacity: 0.6; }
  }
}

@keyframes bounce {
  0%, 100% { transform: translate(-50%, 0); }
  50% { transform: translate(-50%, 10px); }
}

// === 移动端适配 ===
@media screen and (max-width: 1024px) {
  .gallery-grid { grid-template-columns: 1fr 1fr; }
  .col-right { display: none; }
}

@media screen and (max-width: 768px) {
  .hero-section {
    padding: 100px 20px 40px;
    align-items: flex-start;
    justify-content: center;
  }
  
  .hero-content-wrapper { max-width: 100%; }
  .hero-title { font-size: 36px; }
  
  .content-container { padding: 0 20px 80px; }
  
  .gallery-grid {
    display: flex;
    flex-direction: column;
  }
  
  .sticky-col { position: static; }
  
  .col-left { order: 1; }
  .col-center { order: 2; }
  .col-right { order: 3; display: flex; }
}
</style>