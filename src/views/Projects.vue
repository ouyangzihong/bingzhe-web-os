<template>
  <div class="projects-page">
    <TheNavbar :is-visible="true" class="force-light-nav" />

    <div class="projects-container">
      <div class="grid-wrapper">
        <div 
          v-for="(project, index) in projects" 
          :key="project.id" 
          class="project-card"
          :class="{ 'wide-card': isWide(index) }"
          @click="goToDetail(project.id)"
        >
          <div class="image-wrapper">
            <img :src="project.coverImage" class="real-img" />
            <div class="overlay"></div>
          </div>
          
          <div class="text-content">
            <h3 class="title">{{ project.title }}</h3>
            <p class="desc">{{ project.intro }}</p>
            <div class="meta">
              <span>{{ project.location }}</span>
              <span class="divider">|</span>
              <span>{{ project.type }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from '@/components/common/TheNavbar.vue';
import TheFooter from '@/components/common/TheFooter.vue';
import gsap from 'gsap';
import { projectsData } from '@/data/projects.js';

export default {
  name: 'ProjectsView',
  components: { TheNavbar, TheFooter },
  computed: {
// 构造显示用的列表数据，根据当前语言自动切换
    projects() {
      const locale = this.$i18n.locale; // 获取当前语言 'zh' 或 'en'
      
      return projectsData.map(item => {
        // 取出对应语言的数据包
        const content = item[locale]; 
        return {
          id: item.id,
          coverImage: item.coverImage, // 公共图片
          ...content // 展开标题、描述等
        };
      });
    }
  },
//   data() {
//     return {
//       // 2. 赋值给本地变量
//       projects: projectsData
//     };
//   },
  methods: {
    // 判断是否是大图模式（每三个里的第三个，索引为 2, 5, 8...）
    isWide(index) {
      return (index + 1) % 3 === 0;
    },
    goToDetail(id) {
        this.$router.push({ name: 'ProjectDetail', params: { id: id } });
    }
  },
  mounted() {
    // GSAP 入场动画
    // 让卡片从下往上浮动出现，带有交错效果
    gsap.from(this.$refs.projectCards, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2, // 每个卡片间隔 0.2秒
      ease: 'power3.out',
      delay: 0.2
    });
  }
};
</script>

<style lang="scss" scoped>
.projects-page {
  background-color: #ffffff; // 页面白底
  min-height: 100vh;
  padding-top: 120px; // 给固定的 Navbar 留出空间
}

// 强制导航栏在白底页面上的样式 (覆盖 Navbar 默认透明样式)
// 也可以直接在 TheNavbar 里加一个 prop 控制 theme="light"
::v-deep .force-light-nav {
  background-color: #ffffff !important;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  padding: 20px 60px !important;
  color: #333333 !important;

  .logo-img { filter: invert(1) brightness(0.2); }
  .underline { background-color: #333333 !important; }
  .lang-switch { border-color: #ccc !important; color: #333 !important; }
}

.projects-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 60px 100px; // 下方留白
}

.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 默认两列
  gap: 60px 40px; // 行间距 60px，列间距 40px
}

.project-card {
  display: flex;
  flex-direction: column;

  // 关键：如果判定为宽卡片，跨越两列
  &.wide-card {
    grid-column: span 2;
    
    // 大图模式下，可以控制图片高度更高一点
    .image-wrapper {
      padding-bottom: 45%; // 更宽的比例
    }
  }

  .image-wrapper {
    width: 100%;
    position: relative;
    padding-bottom: 65%; // 默认 3:2 比例
    background-color: #e5e5e5; // 灰色占位背景
    overflow: hidden;
    margin-bottom: 24px;
    cursor: pointer;

    .placeholder-img {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #999;
      font-size: 14px;
      letter-spacing: 1px;
      background-color: #444; // 图片占位深灰色
      color: rgba(255,255,255,0.5);
      transition: transform 0.6s ease;
    }

    &:hover .placeholder-img {
      transform: scale(1.05); // 悬停轻微放大
    }
    .real-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0; left: 0;
        transition: transform 0.6s ease;
    }
  }

  .text-content {
    text-align: center; // 文字居中，符合设计图
    
    .title {
      font-size: 18px;
      font-weight: 500;
      margin: 0 0 10px;
      color: #333;
    }

    .desc {
      font-size: 14px;
      color: #666;
      line-height: 1.6;
      margin: 0 auto 15px;
      max-width: 80%; // 限制文字宽度
    }

    .meta {
      font-size: 12px;
      color: #999;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      
      .divider {
        margin: 0 8px;
      }
    }
  }
}

// 移动端适配
@media screen and (max-width: 768px) {
  .projects-page {
    padding-top: 80px;
  }
  
  ::v-deep .force-light-nav {
    padding: 15px 20px !important;
  }

  .projects-container {
    padding: 0 20px 60px;
  }

  .grid-wrapper {
    grid-template-columns: 1fr; // 强制单列
    gap: 40px;
  }

  .project-card.wide-card {
    grid-column: span 1; // 移动端取消跨列
    .image-wrapper { padding-bottom: 65%; }
  }
}
</style>