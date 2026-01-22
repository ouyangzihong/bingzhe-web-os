<template>
  <div class="about-page">
    <TheNavbar :is-visible="true" class="force-light-nav" />

    <div class="about-container">
      <section class="section-header fade-in">
        <h1 class="main-title">{{ $t('about.title') }}</h1>
        <div class="intro-box">
          <p class="intro-text">{{ $t('about.intro') }}</p>
        </div>
      </section>

      <section class="section-hero-image fade-in">
        <div class="image-wrapper">
          <img src="@/assets/images/home-bg.jpg" alt="About Hero" />
        </div>
        <p class="caption">The essence of space lies in its atmosphere.</p>
      </section>

      <section class="section-center-text fade-in">
        <div class="center-content">
          <h2 class="sub-title">{{ $t('about.philosophy.title') }}</h2>
          <p class="body-text">{{ $t('about.philosophy.content') }}</p>
        </div>
        <!-- <div class="img-col">
          <img src="@/assets/images/service-design.jpg" alt="Philosophy" />
        </div> -->
      </section>

      <section class="section-grid1 fade-in">
        <div class="grid-item large">
          <img src="@/assets/images/projects/project1-03.jpg" alt="Detail 1" />
        </div>
        <div class="grid-item small">
          <img src="@/assets/images/projects/project1-04.jpg" alt="Detail 2" />
        </div>
      </section>

      <section class="section-center-text fade-in">
        <div class="center-content">
          <h2 class="sub-title">{{ $t('about.craft.title') }}</h2>
          <p class="body-text">{{ $t('about.craft.content') }}</p>
        </div>
      </section>

      <section class="section-grid2 fade-in">
        <div class="grid-item large">
          <img src="@/assets/images/projects/project1-03.jpg" alt="Detail 1" />
        </div>
        <div class="grid-item small">
          <img src="@/assets/images/projects/project1-04.jpg" alt="Detail 2" />
        </div>
      </section>

      <section class="section-center-text fade-in">
        <div class="center-content">
          <h2 class="sub-title">{{ $t('about.craft.title') }}</h2>
          <p class="body-text">{{ $t('about.craft.content') }}</p>
        </div>
      </section>
      
      <section class="section-full-image fade-in">
         <img src="@/assets/images/projects/project1-01.jpg" alt="Craftsmanship" />
       </section>
    </div>

    
    <div class="other-projects-section">
      <h3 class="section-title">{{ $t('about.viewMore') }}</h3>
      
      <div class="carousel-container">
        <button class="nav-btn prev" @click="prevSlide" @mouseenter="pauseAutoPlay" @mouseleave="startAutoPlay">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div class="carousel-window" @mouseenter="pauseAutoPlay" @mouseleave="startAutoPlay">
          <div class="carousel-track" :style="trackStyle">
            <div 
                v-for="(p, index) in carouselList" 
                :key="`slide-${index}`" 
                class="project-slide-card"
                @click="goToDetail(p.id)"
            >
                <div class="slide-img-wrapper">
                  <img :src="p.coverImage" />
                  <div class="hover-overlay">
                      <span>VIEW</span>
                  </div>
                  <div class="slide-info">
                    <span class="slide-title">{{ getProjectTitle(p) }}</span>
                  </div>
                </div>
            </div>
          </div>
        </div>

        <button class="nav-btn next" @click="nextSlide" @mouseenter="pauseAutoPlay" @mouseleave="startAutoPlay">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
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
  name: 'About',
  components: { TheNavbar, TheFooter },
  data() {
    return {
      // 轮播图数据
      slideIndex: 0,
      itemsPerSlide: 3, // 桌面端默认3个
      autoplayTimer: null,
      isResetting: false,
      isAnimating: false,
      
      // 取前5个项目作为展示
      selectedProjects: projectsData.slice(0, 5) 
    };
  },
  computed: {
    // 构造无缝循环列表：[CloneEnd, ...Real, CloneStart]
    carouselList() {
      if (this.selectedProjects.length === 0) return [];
      const clonesStart = this.selectedProjects.slice(-this.itemsPerSlide);
      const clonesEnd = this.selectedProjects.slice(0, this.itemsPerSlide);
      return [...clonesStart, ...this.selectedProjects, ...clonesEnd];
    },
    trackStyle() {
      const percent = -(100 / this.itemsPerSlide) * this.slideIndex;
      return { 
        transform: `translateX(${percent}%)`,
        transition: this.isResetting ? 'none' : 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
      };
    }
  },
  mounted() {
    window.scrollTo(0, 0);
    this.initAnimations();
    
    // 轮播图初始化
    this.checkResponsive();
    window.addEventListener('resize', this.checkResponsive);
    this.resetCarouselPos();
    this.startAutoPlay();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkResponsive);
    this.pauseAutoPlay();
  },
  methods: {
    initAnimations() {
      // 简单的入场动画
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((el, index) => {
        gsap.from(el, {
          y: 30,
          opacity: 0,
          duration: 1,
          delay: 0.2 + (index * 0.1),
          ease: 'power3.out'
        });
      });
    },
    getProjectTitle(p) {
      const locale = this.$i18n.locale;
      return p[locale] ? p[locale].title : '';
    },
    goToDetail(id) {
      this.$router.push({ name: 'ProjectDetail', params: { id: id } });
    },
    
    // --- 轮播图核心逻辑 (与 ProjectDetail 保持一致) ---
    checkResponsive() {
      const oldItems = this.itemsPerSlide;
      if (window.innerWidth < 768) {
        this.itemsPerSlide = 1;
      } else {
        this.itemsPerSlide = 3;
      }
      if (oldItems !== this.itemsPerSlide) {
        this.resetCarouselPos();
      }
    },
    resetCarouselPos() {
       this.isResetting = true;
       this.slideIndex = this.itemsPerSlide; 
       setTimeout(() => { this.isResetting = false; }, 50);
    },
    nextSlide() {
      if (this.isAnimating) return;
      this.slideIndex++;
      this.isAnimating = true;
      const realCount = this.selectedProjects.length;
      
      if (this.slideIndex === this.itemsPerSlide + realCount) {
        setTimeout(() => {
          this.isResetting = true;
          this.slideIndex = this.itemsPerSlide;
          setTimeout(() => {
            this.isResetting = false;
            this.isAnimating = false;
          }, 50);
        }, 600);
      } else {
        setTimeout(() => { this.isAnimating = false; }, 600);
      }
    },
    prevSlide() {
      if (this.isAnimating) return;
      this.slideIndex--;
      this.isAnimating = true;
      const realCount = this.selectedProjects.length;

      if (this.slideIndex === 0) {
        setTimeout(() => {
          this.isResetting = true;
          this.slideIndex = realCount;
          setTimeout(() => {
            this.isResetting = false;
            this.isAnimating = false;
          }, 50);
        }, 600);
      } else {
        setTimeout(() => { this.isAnimating = false; }, 600);
      }
    },
    startAutoPlay() {
      if (this.autoplayTimer) clearInterval(this.autoplayTimer);
      this.autoplayTimer = setInterval(() => { this.nextSlide(); }, 4000);
    },
    pauseAutoPlay() {
      if (this.autoplayTimer) {
        clearInterval(this.autoplayTimer);
        this.autoplayTimer = null;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

.about-page {
  background-color: #ffffff;
  min-height: 100vh;
  color: #1a1a1a;
  // 修改点 2: 调整顶部 padding，因为导航栏现在变矮了 (从 160px 改为 120px)
  padding-top: 120px; 
}

// === 修改点 3: 核心导航栏样式复刻 (参考 Products.vue) ===
// 使用 ::v-deep 穿透组件样式
::v-deep .force-light-nav {
  // 1. 强制固定
  position: fixed !important; 
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;

  // 2. 强制白色背景和阴影
  background-color: #ffffff !important;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  
  // 3. 关键：强制 padding 为较小值 (20px)，覆盖默认的 40px
  // 这样无论是否滚动，它都保持这个高度，从而消除“收缩动画”
  padding: 20px 60px !important; 
  
  // 4. 强制深色文字
  color: #333333 !important;

  // 5. 强制内部元素样式
  .logo-img { filter: invert(1) brightness(0.2); } // 反转logo颜色
  .underline { background-color: #333333 !important; }
  .lang-switch { border-color: #ccc !important; color: #333 !important; }
  
  // 移动端适配
  @media screen and (max-width: 768px) {
    padding: 15px 20px !important;
  }
}
// ====================================================

.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px 100px; // 顶部 padding 移到 .about-page 上了
}



// 通用文本样式
.main-title {
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 30px;
  text-align: center;
  letter-spacing: 2px;
}

.sub-title {
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 24px;
  letter-spacing: -0.5px;
}

.intro-box {
  max-width: 700px;
  margin: 0 auto 80px;
  text-align: center;
  .intro-text {
    font-size: 18px;
    line-height: 1.8;
    color: #555;
  }
}

.body-text {
  font-size: 15px;
  line-height: 1.8;
  color: #444;
  text-align: justify;
}

// 2. Hero Image
.section-hero-image {
  margin-bottom: 100px;
  .image-wrapper {
    width: 100%;
    height: 60vh;
    overflow: hidden;
    background-color: #f0f0f0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .caption {
    margin-top: 15px;
    font-size: 12px;
    color: #999;
    text-align: right;
    font-style: italic;
  }
}

// 3. Split Section
.section-split {
  display: flex;
  align-items: center;
  gap: 80px;
  margin-bottom: 100px;

  .text-col { flex: 1; }
  .img-col { 
    flex: 1.2; 
    height: 400px;
    img { width: 100%; height: 100%; object-fit: cover; }
  }
}

// 4. Grid Section
.section-grid1 {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 30px;
  margin-bottom: 100px;
  
  .grid-item {
    img { width: 100%; height: 100%; object-fit: cover; display: block; }
  }
  .large { height: 500px; }
  .small { height: 500px;}
}
.section-grid2 {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 30px;
  margin-bottom: 100px;
  
  .grid-item {
    img { width: 100%; height: 100%; object-fit: cover; display: block; }
  }
  .large { height: 500px; }
  .small { height: 500px;}
}

// 5. Center Text
.section-center-text {
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  .center-content {
    max-width: 600px;
    text-align: center;
    .body-text { text-align: center; }
  }
}

// 6. Full Image
.section-full-image {
  width: 100%;
  height: 500px;
  margin-bottom: 50px;
  img { width: 100%; height: 100%; object-fit: cover; }
}

// --- 轮播图样式 (从 ProjectDetail 移植) ---
.other-projects-section {
  border-top: 1px solid #f0f0f0;
  padding: 100px 60px 150px;

  .section-title {
    font-size: 24px;
    font-weight: 300;
    text-align: center;
    margin-bottom: 60px;
    color: #000;
  }

  .carousel-container {
    display: flex;
    align-items: center;
    gap: 30px;
    position: relative;
    max-width: 1400px;
    margin: 0 auto;
  }

  .nav-btn {
    width: 50px; height: 50px;
    border: 1px solid #ddd;
    background: #fff;
    border-radius: 50%;
    cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: all 0.3s;
    color: #333;
    flex-shrink: 0;
    &:hover { background: #000; color: #fff; border-color: #000; }
  }

  .carousel-window {
    width: 100%;
    overflow: hidden;
  }

  .carousel-track {
    display: flex;
    width: 100%;
  }

  .project-slide-card {
    flex: 0 0 33.33%;
    padding: 0 15px;
    box-sizing: border-box;
    cursor: pointer;

    .slide-img-wrapper {
      width: 100%;
      height: 350px;
      background-color: #e0e0e0;
      position: relative;
      overflow: hidden;

      img {
        width: 100%; height: 100%; object-fit: cover;
        transition: transform 0.6s ease;
      }

      .hover-overlay {
        position: absolute; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.3);
        display: flex; align-items: center; justify-content: center;
        opacity: 0;
        transition: opacity 0.3s;
        span {
          color: #fff; border: 1px solid #fff; padding: 8px 20px; font-size: 12px; letter-spacing: 2px;
        }
      }
      
      .slide-info {
        position: absolute;
        bottom: 0; left: 0; width: 100%;
        padding: 15px;
        background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
        opacity: 0;
        transition: opacity 0.3s;
        
        .slide-title {
          color: #fff; font-size: 14px; font-weight: 500;
        }
      }
    }

    &:hover {
      .slide-img-wrapper img { transform: scale(1.05); }
      .hover-overlay, .slide-info { opacity: 1; }
    }
  }
}

// === 移动端适配 ===
@media screen and (max-width: 768px) {
    .about-page { padding-top: 90px; } // 移动端 padding 调整
  .about-container {
    padding: 100px 20px 60px;
  }

  .main-title { font-size: 32px; margin-bottom: 30px; }
  .intro-box { margin-bottom: 50px; .intro-text { font-size: 15px; } }

  .section-hero-image .image-wrapper { height: 300px; }

  // 强制改为单列
  .section-split {
    flex-direction: column;
    gap: 40px;
    .img-col { height: 300px; width: 100%; }
  }

  .section-grid1 {
    grid-template-columns: 1fr;
    gap: 20px;
    .large, .small { height: 300px; margin-top: 0; }
  }
  .section-grid2 {
    grid-template-columns: 1fr;
    gap: 20px;
    .large, .small { height: 300px; margin-top: 0; }
  }

  // 轮播图移动端
  .other-projects-section {
    padding: 60px 20px;
    .nav-btn { width: 36px; height: 36px; svg { width: 18px; height: 18px; } }
    .project-slide-card {
      flex: 0 0 100%; // 手机展示1个
      .slide-img-wrapper { height: 240px; }
    }
  }
}
</style>