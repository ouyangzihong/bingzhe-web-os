<template>
  <footer class="footer-container">
    <div class="footer-top">
      <h2 class="brand-name">LIGNE ATELIER</h2>
      <p class="slogan">{{ $t('footer.slogan') }}</p>
    </div>

    <div class="divider"></div>

    <div class="footer-main">
      <div class="col brand-intro">
        <p class="desc">
          {{ $t('footer.desc') }}
        </p>
        <button class="action-btn" @click="navigateToContact">
          {{ $t('footer.getInTouch') }}
        </button>
      </div>

      <div class="col office-info">
        <h3 class="col-title">{{ $t('footer.office') }}</h3>
        <div class="info-list">
          <p>{{ $t('footer.location') }}</p>
          <p class="placeholder">xxxxxx@xxx.com</p>
          <p class="placeholder">+86 000 0000 0000</p>
        </div>
      </div>

      <div class="col nav-links">
        <h3 class="col-title">{{ $t('footer.links') }}</h3>
        <ul>
          <li><router-link to="/">{{ $t('navbar.home') }}</router-link></li>
          <li><a href="javascript:void(0)" class="disabled-link">{{ $t('navbar.about') }}</a></li>
          <li><a href="javascript:void(0)" class="disabled-link">{{ $t('navbar.products') }}</a></li>
          <li><router-link to="/projects">{{ $t('navbar.projects') }}</router-link></li>
          <li><a href="javascript:void(0)" class="disabled-link">{{ $t('navbar.industries') }}</a></li>
          <li><router-link to="/contact">{{ $t('navbar.contact') }}</router-link></li>
        </ul>
      </div>

      <div class="col social-media">
        <h3 class="col-title">{{ $t('footer.socialTitle') }}</h3>
        <div class="social-icons">
          <div class="icon-circle" @click="handleSocialClick('Facebook')">Fb</div>
          <div class="icon-circle" @click="handleSocialClick('Pinterest')">Pt</div>
          <div class="icon-circle" @click="handleSocialClick('Instagram')">Ins</div>
          <div class="icon-circle" @click="handleSocialClick('Website')">Web</div>
          <div class="icon-circle" @click="handleSocialClick('WeChat')">We</div>
        </div>
      </div>
    </div>

    <div class="divider"></div>

    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }}. {{ $t('footer.rights') }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  methods: {
    navigateToContact() {
      // 编程式导航跳转到 Contact 页面
      this.$router.push({ name: 'Contact' }).catch(err => {});
    },
    handleSocialClick(platform) {
      // 暂时只打印日志或做简单提示
      console.log(`Clicked on ${platform}`);
    }
  }
};
</script>

<style lang="scss" scoped>
// 引入全局变量
@import "@/assets/styles/_variables.scss";

.footer-container {
  width: 100%;
  background-color: #3f3f3f; // 深灰色背景
  color: #ffffff;
  padding: 60px 80px 30px;
  box-sizing: border-box;
  font-family: $font-main;

  .divider {
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.2);
    margin: 40px 0;
  }

  // 1. 顶部
  .footer-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .brand-name {
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    .slogan {
      font-size: 23px;
      font-weight: 300;
      opacity: 0.9;
    }
  }

  // 2. 中间主要内容
  .footer-main {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;

    .col {
      flex: 1;
      .col-title {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 25px;
        opacity: 0.9;
      }
    }

    // 第一列：品牌简介
    .brand-intro {
      flex: 1.5;
      padding-right: 40px;
      
      .desc {
        font-size: 13px;
        line-height: 1.8;
        color: #cccccc;
        margin-bottom: 30px;
        max-width: 90%;
      }

      .action-btn {
        background-color: #ffffff;
        color: #333333;
        border: none;
        padding: 12px 30px;
        border-radius: 30px;
        font-weight: 600;
        font-size: 14px;
        cursor: pointer;
        transition: transform 0.2s, background-color 0.2s;

        &:hover {
          transform: translateY(-2px);
          background-color: #f0f0f0;
        }
      }
    }

    // 第二列：办公信息
    .office-info {
      .info-list p {
        font-size: 13px;
        line-height: 2.2;
        color: #cccccc;
        margin: 0;
        
        &.placeholder {
          opacity: 0.7;
        }
      }
    }

    // 第三列：导航链接
    .nav-links {
      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          margin-bottom: 12px;
          
          a {
            color: #cccccc;
            text-decoration: none;
            font-size: 13px;
            transition: color 0.3s;
            display: inline-block;

            &:hover {
              color: #ffffff;
            }

            &.disabled-link {
              cursor: default;
              &:hover { color: #cccccc; }
            }
          }
        }
      }
    }

    // 第四列：社交图标
    .social-media {
      .social-icons {
        display: flex;
        gap: 15px;
        flex-wrap: wrap;

        .icon-circle {
          width: 36px;
          height: 36px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          user-select: none;

          &:hover {
            background-color: #ffffff;
            color: #333333;
            border-color: #ffffff;
            transform: scale(1.1);
          }
          
          &:active {
            transform: scale(0.95); // 点击时的微缩效果
          }
        }
      }
    }
  }

  // 3. 底部版权
  .footer-bottom {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.4);
  }

  // --- 移动端适配 ---
  @media screen and (max-width: 768px) {
    padding: 40px 20px;

    .footer-top {
      flex-direction: column;
      align-items: flex-start;
      gap: 15px;
      
      .slogan {
        font-size: 14px;
      }
    }

    .footer-main {
      flex-direction: column;
      gap: 50px;

      .col {
        width: 100%;
        padding-right: 0;
      }

      .brand-intro .desc {
        max-width: 100%;
      }
    }
  }
}
</style>