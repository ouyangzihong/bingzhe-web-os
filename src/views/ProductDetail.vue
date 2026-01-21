<template>
  <div class="product-detail-page" v-if="product">
    <TheNavbar :is-visible="true" class="force-light-nav" />

    <div class="hero-section">
      <div class="hero-slider">
        <div class="slider-window">
          <div class="slider-track" :style="heroTrackStyle">
             <div class="slide-item"><img :src="heroLoopList[0]" /></div>
             <div class="slide-item" v-for="(img, i) in product.gallery" :key="`real-${i}`">
               <img :src="img" />
             </div>
             <div class="slide-item"><img :src="heroLoopList[heroLoopList.length-1]" /></div>
          </div>
          
          <button class="arrow prev" @click="moveHero(-1)">←</button>
          <button class="arrow next" @click="moveHero(1)">→</button>
        </div>
      </div>

      <div class="hero-info">
        <div class="info-content">
          <h2 class="collection-name">{{ currentSeriesName }}</h2>
          <h1 class="product-title">{{ productTitle }}</h1>
          <p class="price-placeholder">XXX XXX</p> <div class="desc-text">{{ productDesc }}</div>
        </div>
      </div>
    </div>

    <div v-if="isVariantTemplate" class="section-container variant-section">
      <h3 class="section-title">All available colours</h3>
      
      <div class="variant-preview">
        <img :src="selectedVariantImage" alt="Selected Variant" />
        <div class="preview-overlay">
          <span>{{ selectedVariantName }}</span>
        </div>
      </div>

      <div class="variant-thumbs">
        <div 
          v-for="(v, idx) in product.variants" 
          :key="idx"
          class="thumb-item"
          :class="{ active: currentVariantIndex === idx }"
          @click="currentVariantIndex = idx"
        >
          <img :src="v.image" />
          <span class="thumb-label">{{ v.name }}</span>
        </div>
      </div>
    </div>

    <div v-else class="section-container app-section">
      <h3 class="section-title">Product Application</h3>
      
      <div class="app-slider">
        <div class="slider-window">
          <div class="slider-track" :style="appTrackStyle">
            <div class="slide-item app-slide"><img :src="appLoopList[0]" /></div>
            <div class="slide-item app-slide" v-for="(img, i) in product.applications" :key="`app-${i}`">
              <img :src="img" />
              <div class="app-caption">Product images can be illustration references</div>
            </div>
            <div class="slide-item app-slide"><img :src="appLoopList[appLoopList.length-1]" /></div>
          </div>
          
          <button class="arrow prev big-arrow" @click="moveApp(-1)">
             <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" stroke-width="1" fill="none"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button class="arrow next big-arrow" @click="moveApp(1)">
             <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" stroke-width="1" fill="none"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>
    </div>

    <div class="section-container specs-section">
      <h3 class="section-title">Specifications</h3>
      <div class="specs-table">
        <div class="spec-row">
          <span class="label">Product Category</span>
          <span class="value">{{ getSpec('category') }}</span>
        </div>
        <div class="spec-row">
          <span class="label">Composition</span>
          <span class="value">{{ getSpec('composition') }}</span>
        </div>
        <div class="spec-row">
          <span class="label">Description</span>
          <span class="value">{{ getSpec('description') }}</span>
        </div>
        <div class="spec-row">
          <span class="label">Dimensions</span>
          <span class="value">{{ getSpec('dimensions') }}</span>
        </div>
        <div class="spec-row">
          <span class="label">Pattern repeat</span>
          <span class="value">{{ getSpec('patternRepeat') }}</span>
        </div>
      </div>
    </div>

    <div class="section-container other-patterns">
      <h3 class="section-title">Other patterns in this collection</h3>
      
      <div class="carousel-container">
        <button class="nav-btn prev" @click="moveBottom(-1)">←</button>
        
        <div class="carousel-window" @mouseenter="pauseAutoPlay" @mouseleave="startAutoPlay">
          <div class="carousel-track" :style="bottomTrackStyle">
             <div 
                v-for="(item, idx) in bottomDisplayList" 
                :key="`b-${idx}`"
                class="bottom-card"
                :style="{ flex: `0 0 ${100/itemsPerSlide}%` }"
                @click="goToDetail(item.id)"
             >
                <div class="img-wrap">
                  <img :src="item.image" />
                  <div class="hover-info">
                    <span>{{ getLocaleText(item, 'title') }}</span>
                  </div>
                </div>
             </div>
          </div>
        </div>

        <button class="nav-btn next" @click="moveBottom(1)">→</button>
      </div>
    </div>

    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from '@/components/common/TheNavbar.vue';
import TheFooter from '@/components/common/TheFooter.vue';
import { productsData } from '@/data/products.js';

export default {
  name: 'ProductDetail',
  components: { TheNavbar, TheFooter },
  props: ['seriesId', 'itemId'],
  data() {
    return {
      product: null,
      seriesData: null,
      
      // Hero Slider State
      heroIndex: 1, // 初始指向真实第1张 (索引1，因为0是克隆)
      isHeroAnimating: false,
      isHeroResetting: false,

      // Variant State
      currentVariantIndex: 0,

      // Application Slider State
      appIndex: 1,
      isAppAnimating: false,
      isAppResetting: false,

      // Bottom Slider State
      bottomItemsRaw: [], // 随机选出的5个
      bottomIndex: 3, // 初始位置 = itemsPerSlide (3)
      itemsPerSlide: 3,
      isBottomAnimating: false,
      isBottomResetting: false,
      autoplayTimer: null
    };
  },
  computed: {
    locale() { return this.$i18n.locale; },
    
    // 判断是否为 A/B/C 系列 (Variant Template)
    isVariantTemplate() {
      return this.seriesData && this.seriesData.templateType === 'variant';
    },

    // 基础信息获取
    currentSeriesName() {
      return this.seriesData ? this.seriesData[this.locale].seriesName : '';
    },
    productTitle() {
      return this.product ? this.product[this.locale].title : '';
    },
    productDesc() {
      return this.product ? this.product[this.locale].desc : '';
    },

    // Variant 逻辑
    selectedVariantImage() {
      if (!this.product || !this.product.variants.length) return '';
      return this.product.variants[this.currentVariantIndex].image;
    },
    selectedVariantName() {
      if (!this.product || !this.product.variants.length) return '';
      return this.product.variants[this.currentVariantIndex].name;
    },

    // --- 轮播逻辑构建 ---

    // 1. Hero 轮播列表构造: [Last, ...All, First]
    heroLoopList() {
      if (!this.product || !this.product.gallery) return [];
      const list = this.product.gallery;
      return [list[list.length-1], ...list, list[0]];
    },
    heroTrackStyle() {
      return {
        transform: `translateX(-${this.heroIndex * 100}%)`,
        transition: this.isHeroResetting ? 'none' : 'transform 0.5s ease'
      };
    },

    // 2. App 轮播列表构造: 同上
    appLoopList() {
      if (!this.product || !this.product.applications) return [];
      const list = this.product.applications;
      return [list[list.length-1], ...list, list[0]];
    },
    appTrackStyle() {
      return {
        transform: `translateX(-${this.appIndex * 100}%)`,
        transition: this.isAppResetting ? 'none' : 'transform 0.6s ease'
      };
    },

    // 3. 底部轮播列表构造: [CloneEnd(3), ...Real(5), CloneStart(3)]
    bottomDisplayList() {
      if (!this.bottomItemsRaw.length) return [];
      const list = this.bottomItemsRaw;
      const cloneEnd = list.slice(0, this.itemsPerSlide); // 头部3个放到尾部
      const cloneStart = list.slice(-this.itemsPerSlide); // 尾部3个放到头部
      return [...cloneStart, ...list, ...cloneEnd];
    },
    bottomTrackStyle() {
      const pct = 100 / this.itemsPerSlide;
      return {
        transform: `translateX(-${this.bottomIndex * pct}%)`,
        transition: this.isBottomResetting ? 'none' : 'transform 0.6s ease'
      };
    }
  },
  watch: {
    '$route.params': {
      immediate: true,
      handler() {
        this.loadData();
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    this.startAutoPlay();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
    this.pauseAutoPlay();
  },
  methods: {
    loadData() {
      const { seriesId, itemId } = this.props || this.$route.params;
      this.seriesData = productsData.find(s => s.id === seriesId);
      
      if (this.seriesData) {
        this.product = this.seriesData.items.find(i => i.id === itemId);
        console.log(this.product,"aaa");
        
        // 准备底部推荐数据：同系列随机5个
        const others = this.seriesData.items.filter(i => i.id !== itemId);
        // 简单洗牌
        this.bottomItemsRaw = others.sort(() => 0.5 - Math.random()).slice(0, 5);
      }
      
      // 重置轮播状态
      this.heroIndex = 1;
      this.appIndex = 1;
      this.bottomIndex = 3; // 对应 itemsPerSlide
      window.scrollTo(0, 0);
    },

    getSpec(key) {
      if (!this.product || !this.product.specs) return '-';
      // 0: zh, 1: en
      const idx = this.locale === 'zh' ? 0 : 1;
      return this.product.specs[key][idx] || '-';
    },
    getLocaleText(item, key) {
      return item[this.locale][key];
    },

    // --- 通用轮播逻辑 (Manual) ---
    // type: 'hero' | 'app'
    // direction: -1 | 1
    moveSlide(type, direction, maxRealCount) {
      const isAnimatingKey = `is${type}Animating`;
      const isResettingKey = `is${type}Resetting`;
      const indexKey = `${type.toLowerCase()}Index`;
      
      if (this[isAnimatingKey]) return;
      this[isAnimatingKey] = true;
      this[indexKey] += direction;

      // 动画结束后检查边界
      setTimeout(() => {
        const currentIdx = this[indexKey];
        // 这里的边界是：0 (cloneLast) 和 maxRealCount + 1 (cloneFirst)
        
        if (currentIdx === 0) {
          // 跳到真实最后一张 (index = maxRealCount)
          this[isResettingKey] = true;
          this[indexKey] = maxRealCount;
          setTimeout(() => this[isResettingKey] = false, 50);
        } else if (currentIdx === maxRealCount + 1) {
          // 跳到真实第一张 (index = 1)
          this[isResettingKey] = true;
          this[indexKey] = 1;
          setTimeout(() => this[isResettingKey] = false, 50);
        }
        
        this[isAnimatingKey] = false;
      }, type === 'App' ? 600 : 500); // App 动画稍慢
    },

    moveHero(dir) {
      const count = this.product.gallery.length;
      this.moveSlide('Hero', dir, count);
    },
    moveApp(dir) {
      const count = this.product.applications.length;
      this.moveSlide('App', dir, count);
    },

    // --- 底部轮播逻辑 (Multiple Items) ---
    moveBottom(dir) {
      if (this.isBottomAnimating) return;
      this.isBottomAnimating = true;
      this.bottomIndex += dir;

      const realCount = this.bottomItemsRaw.length;
      
      setTimeout(() => {
        // 边界处理
        // 结构: [CloneStart(3), Real(5), CloneEnd(3)]
        // RealFirst index = 3. RealLast index = 3 + 5 - 1 = 7.
        // Left Limit: index = 0 (CloneStart[0]) -> Jump to RealLast (7) ? 
        // 实际上 0 显示的是 CloneStart[0] (即 RealLast)。所以我们要跳到 RealLast 的位置。
        // RealLast 的位置索引 = itemsPerSlide + realCount - 1? 
        // 让我们重新梳理:
        // List: [8,9,10(CloneEnd), 1,2,3,4,5(Real), 1,2,3(CloneStart)] -> 不对
        // Correct List Logic in Computed: [...CloneStart(Tail), ...Real, ...CloneEnd(Head)]
        // List: [3,4,5, 1,2,3,4,5, 1,2,3] (assuming 5 items, 3 per slide)
        // Indices: 0,1,2 | 3,4,5,6,7 | 8,9,10
        // Real Range: 3 to 7.
        
        // Case: Click Prev from 3 -> 2. 2 is CloneStart[last] aka Real[last] aka 5.
        // We want to jump to Real[last] position which is 7.
        // So if index < 3, jump to index + realCount. (2 -> 7)
        
        // Case: Click Next from 7 -> 8. 8 is CloneEnd[0] aka Real[0] aka 1.
        // We want to jump to Real[0] position which is 3.
        // So if index >= 3 + realCount, jump to index - realCount. (8 -> 3)

        if (this.bottomIndex < this.itemsPerSlide) {
            this.isBottomResetting = true;
            this.bottomIndex += realCount;
            setTimeout(() => this.isBottomResetting = false, 50);
        } else if (this.bottomIndex >= this.itemsPerSlide + realCount) {
            this.isBottomResetting = true;
            this.bottomIndex -= realCount;
            setTimeout(() => this.isBottomResetting = false, 50);
        }
        
        this.isBottomAnimating = false;
      }, 600);
    },
    
    startAutoPlay() {
      if (this.autoplayTimer) clearInterval(this.autoplayTimer);
      this.autoplayTimer = setInterval(() => this.moveBottom(1), 3000);
    },
    pauseAutoPlay() {
      clearInterval(this.autoplayTimer);
    },
    handleResize() {
      this.itemsPerSlide = window.innerWidth < 768 ? 1 : 3;
    },
    goToDetail(itemId) {
      // 切换同系列不同产品
      this.$router.push({
        name: 'ProductDetail',
        params: { seriesId: this.seriesData.id, itemId }
      });
      // 强制刷新数据 (虽然 watch 会处理，但为了保险)
      // window.location.reload() 不推荐，依赖 watch 即可
    }
  }
};
</script>

<style lang="scss" scoped>
// 全局样式重置
* { box-sizing: border-box; }
.product-detail-page {
  padding-top: 100px;
  background: #fff;
  color: #333;
}

// 导航栏复用样式
::v-deep .force-light-nav {
  background-color: #ffffff !important;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  padding: 20px 60px !important;
  color: #333 !important;
  .logo-img { filter: invert(1) brightness(0.2); }
  .underline { background-color: #333 !important; }
  .lang-switch { border-color: #ccc !important; color: #333 !important; }
  @media(max-width:768px){ padding: 15px 20px !important; }
}

.section-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 60px;
  text-align: center;
}
.section-title {
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 60px;
  font-weight: 500;
}

// === 1. Hero Section ===
.hero-section {
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 60px 80px;
  gap: 80px;
  align-items: center;

  .hero-slider {
    flex: 1.2;
    position: relative;
    
    .slider-window {
      width: 100%;
      aspect-ratio: 4/3;
      overflow: hidden;
      position: relative;
      background: #f4f4f4;
    }
    .slider-track {
      display: flex;
      height: 100%;
      width: 100%;
    }
    .slide-item {
      flex: 0 0 100%;
      img { width: 100%; height: 100%; object-fit: cover; }
    }
  }

  .hero-info {
    flex: 0.8;
    text-align: left;
    
    .collection-name { font-size: 14px; color: #999; margin-bottom: 10px; text-transform: uppercase; }
    .product-title { font-size: 32px; font-weight: 400; margin-bottom: 20px; }
    .price-placeholder { font-size: 16px; margin-bottom: 40px; font-family: monospace; }
    .desc-text { font-size: 14px; line-height: 1.8; color: #666; }
  }
}

// 通用箭头样式
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  z-index: 2;
  padding: 10px;
  text-shadow: 0 0 5px rgba(0,0,0,0.5);
  &.prev { left: 10px; }
  &.next { right: 10px; }
  &:hover { opacity: 0.7; }
}

// === 2A. Variant Section ===
.variant-section {
  background: #f9f9f9; // 稍微区分背景
  
  .variant-preview {
    width: 100%;
    max-width: 800px; // 限制最大宽度
    margin: 0 auto 40px;
    aspect-ratio: 16/9;
    background: #eee;
    position: relative;
    
    img { width: 100%; height: 100%; object-fit: cover; }
    
    .preview-overlay {
      position: absolute;
      top: 50%; left: 50%; transform: translate(-50%, -50%);
      color: #fff;
      font-size: 20px;
      letter-spacing: 2px;
      text-transform: uppercase;
      text-shadow: 0 2px 10px rgba(0,0,0,0.3);
    }
  }

  .variant-thumbs {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;

    .thumb-item {
      width: 80px;
      cursor: pointer;
      opacity: 0.6;
      transition: all 0.3s;
      
      img { width: 100%; aspect-ratio: 1; object-fit: cover; margin-bottom: 8px; }
      .thumb-label { font-size: 12px; color: #666; }

      &.active, &:hover { opacity: 1; transform: translateY(-5px); }
    }
  }
}

// === 2B. Application Section ===
.app-section {
  padding: 40px 0; // [修改] 缩小区域上下内边距 (原 80px)

  // [新增] 单独针对此模块缩小标题下边距
  .section-title {
    margin-bottom: 30px; // (原 60px)
  }

  .app-slider {
    width: 100%;
    position: relative;
    padding: 0 200px; // [新增] 左右留出间距 (数值可按需调整，如 24px 或 60px)

    .slider-window {
      width: 100%;
      height: auto;      // [修改] 移除固定高度 60vh
      aspect-ratio: 2/1; // [新增] 锁定长宽比为 2:1
      overflow: hidden;
      position: relative;
      background-color: #f4f4f4;
    }
    .slider-track { display: flex; height: 100%; }
    
    .app-slide {
      flex: 0 0 100%; 
      width: 100%;
      position: relative;
      img { width: 100%; height: 100%; object-fit: cover; }
      
      .app-caption {
        position: absolute;
        bottom: 40px; width: 100%; text-align: center;
        color: rgba(255,255,255,0.8);
        font-size: 12px; letter-spacing: 1px;
        text-transform: uppercase;
        text-shadow: 0 1px 3px rgba(0,0,0,0.5);
      }
    }
    
    .big-arrow {
      font-size: 40px;
      color: rgba(255,255,255,0.6);
      padding: 20px;
      &:hover { color: #fff; background: rgba(0,0,0,0.1); }
    }
  }
}
/* 核心场景图区域 */
.scene-wrapper {
  /* 1. 左右留出间距：这里设为 24px，您可以根据需要调整 */
  padding: 0 24px; 
  
  /* 这里的 margin-bottom 可以控制场景图和下方内容的距离 */
  margin-bottom: 20px; 
}

.scene-image {
  width: 100%;
  
  /* 2. 锁定长宽比为 3:2 */
  aspect-ratio: 3 / 2;
  
  /* 确保图片填满容器且不被拉伸变形 (关键) */
  object-fit: cover; 
  
  /* 可选：加上圆角让视觉更柔和 */
  border-radius: 8px; 
  display: block;
}

/* Product Application 区域 */
.product-application {
  /* 3. 缩小上下间距 */
  /* 假设之前是 margin: 40px 0; 现在改小一点 */
  margin-top: 20px; 
  margin-bottom: 20px;
}
// === 3. Specifications ===
.specs-table {
  max-width: 800px;
  margin: 0 auto;
  border-top: 1px solid #eee;

  .spec-row {
    display: flex;
    padding: 20px 0;
    border-bottom: 1px solid #eee;
    text-align: left;
    
    .label { width: 30%; font-weight: 600; font-size: 14px; }
    .value { width: 70%; font-size: 14px; color: #666; }
  }
}

// === 4. Bottom Carousel ===
.other-patterns {
  .carousel-container {
    display: flex;
    align-items: center;
    gap: 20px;
    
    .nav-btn {
      background: none; border: 1px solid #ddd;
      width: 40px; height: 40px; border-radius: 50%;
      cursor: pointer; flex-shrink: 0;
      &:hover { background: #333; color: #fff; border-color: #333; }
    }

    .carousel-window {
      overflow: hidden;
      width: 100%;
    }
    .carousel-track { display: flex; }
    
    .bottom-card {
      padding: 0 10px;
      cursor: pointer;
      
      .img-wrap {
        position: relative;
        aspect-ratio: 3/4;
        background: #f4f4f4;
        overflow: hidden;
        
        img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
        
        .hover-info {
          position: absolute; top:0; left:0; width:100%; height:100%;
          background: rgba(0,0,0,0.3);
          display: flex; align-items: center; justify-content: center;
          color: #fff; opacity: 0; transition: 0.3s;
          font-size: 14px; letter-spacing: 1px;
        }
      }
      
      &:hover {
        .img-wrap img { transform: scale(1.05); }
        .hover-info { opacity: 1; }
      }
    }
  }
}

// === Mobile Responsive ===
@media screen and (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    padding: 20px;
    gap: 30px;
    
    .hero-slider .slider-window { aspect-ratio: 1; }
  }
  
  .section-container { padding: 40px 20px; }
  
  .specs-table .spec-row {
    flex-direction: column;
    gap: 5px;
    .label { width: 100%; }
    .value { width: 100%; }
  }
  
 .app-section .app-slider {
    padding: 0 20px; // 移动端左右间距可以稍微小一点
    
    .slider-window { 
      height: auto; 
      aspect-ratio: 3/2; 
    }
  }
}
</style>