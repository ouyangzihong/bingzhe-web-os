<template>
  <footer class="footer-container">
    <div class="footer-content">
      <div class="footer-left">
        <h2 class="footer-logo">LIGNE ATELIER</h2>
        <div class="contact-info">
          <p>Email: <a href="mailto:info@ligne-atelier.com">info@ligne-atelier.com</a></p>
          <p>Tel: <a href="tel:+8600000000000">+86 000 0000 0000</a></p>
        </div>
      </div>

      <div class="footer-right">
        <div class="social-icons">
          <span class="icon">Fb</span>
          <span class="icon">In</span>
          <span class="icon">Pt</span>
          <span class="icon">We</span>
        </div>
      </div>
    </div>
    
    <div class="copyright">
      &copy; {{ new Date().getFullYear() }} LIGNE ATELIER. All Rights Reserved.
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
};
</script>

<style lang="scss" scoped>
.footer-container {
  width: 100%;
  background-color: #333333; // 深灰色背景
  color: #ffffff;
  padding: 80px 60px 40px;
  box-sizing: border-box;

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 60px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .footer-left {
    .footer-logo {
      font-size: 24px;
      font-weight: 700;
      margin: 0 0 30px 0;
      letter-spacing: 1px;
    }
    .contact-info {
      p {
        font-size: 14px;
        line-height: 1.8;
        opacity: 0.7;
        margin: 5px 0;
        a {
          color: inherit;
          transition: opacity 0.3s;
          &:hover { opacity: 1; }
        }
      }
    }
  }

  .footer-right {
    .social-icons {
      display: flex;
      gap: 20px;
      .icon {
        width: 30px;
        height: 30px;
        border: 1px solid rgba(255,255,255,0.3);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
          background: #fff;
          color: #333;
        }
      }
    }
  }

  .copyright {
    margin-top: 30px;
    font-size: 12px;
    opacity: 0.4;
    text-align: left;
  }

  // 移动端适配
  @media screen and (max-width: 768px) {
    padding: 60px 20px 30px;
    
    .footer-content {
      flex-direction: column;
      gap: 40px;
    }
    
    .footer-right {
      width: 100%;
      .social-icons {
        justify-content: flex-start;
      }
    }
  }
}
</style>