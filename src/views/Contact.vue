<template>
  <div class="contact-page">
    <TheNavbar class="force-light-nav" />
    
    <!-- 背景装饰动画 -->
    <div class="bg-decoration">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
      <div class="circle circle-3"></div>
    </div>
    
    <div class="contact-container">
      <div class="contact-content">
        <div class="info-section" :class="{ 'animate-in': mounted }">
          <h4 class="sub-title animate-item" :style="{ transitionDelay: '0.1s' }">
            {{ $t('contact.subTitle') }}
          </h4>
          <h1 class="main-title animate-item" :style="{ transitionDelay: '0.2s' }">
            {{ $t('contact.title') }}
          </h1>
          <p class="description animate-item" :style="{ transitionDelay: '0.3s' }">
            {{ $t('contact.description') }}
          </p>
          
          <div class="contact-details">
            <div 
              class="detail-item animate-item" 
              v-for="(item, index) in contactItems" 
              :key="index"
              :style="{ transitionDelay: `${0.4 + index * 0.1}s` }"
            >
              <span class="icon">{{ item.icon }}</span>
              <span>{{ item.text }}</span>
            </div>
          </div>
        </div>

        <div class="form-section" :class="{ 'animate-in': mounted }">
          <form @submit.prevent="submitForm" novalidate>
            <div class="form-group animate-item" :style="{ transitionDelay: '0.5s' }">
              <input 
                v-model="form.name" 
                type="text" 
                :placeholder="$t('contact.form.name') + ' *'" 
                required
                :class="{ 'input-error': errors.name }"
                @input="errors.name = false"
                @focus="onInputFocus($event)"
                @blur="onInputBlur($event)"
              >
            </div>
            
            <div class="form-group animate-item" :style="{ transitionDelay: '0.6s' }">
              <input 
                v-model="form.email" 
                type="email" 
                :placeholder="$t('contact.form.email') + ' *'" 
                required
                :class="{ 'input-error': errors.email }"
                @input="errors.email = false"
                @focus="onInputFocus($event)"
                @blur="onInputBlur($event)"
              >
              <transition name="slide-fade">
                <span v-if="errors.email" class="error-tip">
                  {{ $t('contact.form.emailError') }}
                </span>
              </transition>
            </div>

            <div class="form-group animate-item" :style="{ transitionDelay: '0.7s' }">
              <input 
                v-model="form.subject" 
                type="text" 
                :placeholder="$t('contact.form.subject')" 
                @focus="onInputFocus($event)"
                @blur="onInputBlur($event)"
              >
            </div>
            
            <div class="form-group animate-item" :style="{ transitionDelay: '0.8s' }">
              <textarea 
                v-model="form.message" 
                :placeholder="$t('contact.form.message')" 
                rows="4"
                @focus="onInputFocus($event)"
                @blur="onInputBlur($event)"
              ></textarea>
            </div>
            
            <div class="form-privacy animate-item" :class="{ 'shake-animation': privacyShake }" :style="{ transitionDelay: '0.9s' }">
              <label class="checkbox-container">
                <input type="checkbox" v-model="form.privacyAgreed" @change="privacyError = false">
                <span class="checkmark"></span>
                <span class="privacy-text" :class="{ 'text-danger': privacyError }">
                  {{ $t('contact.form.privacy') }}
                </span>
              </label>
            </div>

            <button 
              type="submit" 
              class="submit-btn animate-item" 
              :class="{ 'submitting': isSubmitting }"
              :disabled="isSubmitting"
              :style="{ transitionDelay: '1s' }"
            >
              <span class="btn-text">
                {{ isSubmitting ? $t('contact.form.submitting') : $t('contact.form.submit') }}
              </span>
              <span class="btn-icon">→</span>
            </button>
            
            <transition name="bounce-in">
              <p v-if="submitStatus" :class="['status-msg', submitStatus.type]">
                {{ submitStatus.msg }}
              </p>
            </transition>
          </form>
        </div>
      </div>
    </div>

    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from '@/components/common/TheNavbar.vue'
import TheFooter from '@/components/common/TheFooter.vue'
import { supabase } from '@/utils/supabase'

export default {
  name: 'Contact',
  components: {
    TheNavbar,
    TheFooter
  },
  data() {
    return {
      mounted: false,
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
        privacyAgreed: false
      },
      errors: {
        name: false,
        email: false
      },
      isSubmitting: false,
      privacyError: false,
      privacyShake: false,
      submitStatus: null
    }
  },
  computed: {
    contactItems() {
      return [
        { icon: '📍', text: this.$t('contact.location') },
        { icon: '✉️', text: this.$t('contact.email') },
        { icon: '📱', text: this.$t('contact.phone') }
      ]
    }
  },
  mounted() {
    // 触发入场动画
    setTimeout(() => {
      this.mounted = true
    }, 100)
    
    // 添加视差效果
    this.initParallax()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleParallax)
  },
  methods: {
    initParallax() {
      this.handleParallax = () => {
        const scrolled = window.pageYOffset
        const circles = document.querySelectorAll('.circle')
        circles.forEach((circle, index) => {
          const speed = 0.05 * (index + 1)
          circle.style.transform = `translateY(${scrolled * speed}px)`
        })
      }
      window.addEventListener('scroll', this.handleParallax, { passive: true })
    },
    
    onInputFocus(event) {
      event.target.parentElement.classList.add('focused')
    },
    
    onInputBlur(event) {
      event.target.parentElement.classList.remove('focused')
    },
    
    validateForm() {
      let isValid = true;
      
      // 1. 验证姓名
      if (!this.form.name.trim()) {
        this.errors.name = true;
        isValid = false;
      }

      // 2. 验证邮箱 (正则校验)
      // 规则：非空，且必须包含 @ 和域名后缀
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.form.email.trim() || !emailRegex.test(this.form.email)) {
        this.errors.email = true;
        isValid = false;
      }

      // 3. 验证隐私协议
      if (!this.form.privacyAgreed) {
        this.privacyError = true;
        this.triggerShake();
        isValid = false;
      }

      return isValid;
    },
    
    triggerShake() {
      this.privacyShake = true;
      setTimeout(() => {
        this.privacyShake = false;
      }, 500);
    },

    async submitForm() {
      this.submitStatus = null;
      
      if (!this.validateForm()) {
        return;
      }

      this.isSubmitting = true;

      try {
        const { error } = await supabase
          .from('contact_messages') 
          .insert([
            { 
              name: this.form.name,
              email: this.form.email,
              subject: this.form.subject,
              message: this.form.message,
              privacy_agreed: this.form.privacyAgreed
            }
          ])

        if (error) throw error

        this.submitStatus = { type: 'success', msg: this.$t('contact.form.success') }
        this.form = {
          name: '',
          email: '',
          subject: '',
          message: '',
          privacyAgreed: false
        }
      } catch (error) {
        console.error('Error submitting form:', error)
        this.submitStatus = { type: 'error', msg: this.$t('contact.form.error') }
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss'; 

.contact-page {
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

// ===== 背景装饰动画 =====
.bg-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
  
  .circle {
    position: absolute;
    border-radius: 50%;
    opacity: 0.03;
    will-change: transform;
    
    &.circle-1 {
      width: 600px;
      height: 600px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      top: -200px;
      right: -200px;
      animation: float 20s ease-in-out infinite;
    }
    
    &.circle-2 {
      width: 400px;
      height: 400px;
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      bottom: -100px;
      left: -100px;
      animation: float 15s ease-in-out infinite reverse;
    }
    
    &.circle-3 {
      width: 300px;
      height: 300px;
      background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: pulse 10s ease-in-out infinite;
    }
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-30px) rotate(5deg);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.03;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 0.05;
  }
}

::v-deep .force-light-nav {
  background-color: #ffffff !important;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  padding: 20px 60px !important;
  color: #333333 !important;

  .logo-img { filter: invert(1) brightness(0.2); }
  .underline { background-color: #333333 !important; }
  .lang-switch { border-color: #ccc !important; color: #333 !important; }
}

.contact-container {
  min-height: 100vh; 
  display: flex;
  flex-direction: column;
  justify-content: center; 
  
  width: 100%;
  max-width: 1400px;
  margin: 0 auto; 
  padding: 0 180px;
  box-sizing: border-box;
  padding-top: 60px;
  position: relative;
  z-index: 1;
}

.contact-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center; 
  gap: 80px;
}

// ===== 入场动画效果 =====
.info-section, .form-section {
  .animate-item {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  &.animate-in .animate-item {
    opacity: 1;
    transform: translateY(0);
  }
}

.info-section {
  flex: 0 0 45%;
  .animate-item {
    transform: translateX(-30px);
  }
  
  &.animate-in .animate-item {
    transform: translateX(0);
  } 
  
  .sub-title {
    font-size: 14px;
    color: #666;
    margin-bottom: 20px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .main-title {
    font-size: 43px; 
    line-height: 1.2;
    margin-bottom: 40px;
    white-space: pre-line;
    font-weight: 600;
    color: #1a1a1a;
    background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .description {
    font-size: 16px;
    line-height: 1.8;
    color: #555;
    margin-bottom: 60px;
    max-width: 420px;
  }

  .detail-item {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    font-size: 16px;
    color: #333;
    font-weight: 500;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    padding: 8px 12px;
    margin-left: -12px;
    border-radius: 8px;
    
    &:hover {
      background-color: rgba(0, 0, 0, 0.02);
      transform: translateX(5px);
      
      .icon {
        transform: scale(1.2);
      }
    }
    
    .icon {
      margin-right: 20px;
      font-size: 18px;
      width: 24px;
      text-align: center;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
}

.form-section {
  flex: 1;
  max-width: 400px;
  
  .animate-item {
    transform: translateX(30px);
  }
  
  &.animate-in .animate-item {
    transform: translateX(0);
  }
  
  .form-group {
    margin-bottom: 20px; 
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    // Focus状态容器动画
    &.focused {
      transform: translateY(-2px);
      
      input, textarea {
        box-shadow: 0 8px 24px rgba(0,0,0,0.08) !important;
      }
    }
    
    input, textarea {
      width: 100%;
      padding: 12px 16px; 
      background-color: #f9f9f9;
      border: 1px solid #e5e5e5;
      border-radius: 12px;
      font-size: 14px; 
      color: #333;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      font-family: inherit;
      box-sizing: border-box;

      &:focus {
        outline: none;
        border-color: #333;
        background-color: #fff;
        box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      }

      &::placeholder {
        color: #aaa;
        transition: all 0.3s ease;
      }
      
      &:focus::placeholder {
        transform: translateX(5px);
        opacity: 0.6;
      }

      &.input-error {
        border-color: #ff4d4f;
        background-color: #fff1f0;
        
        &::placeholder { 
          color: #ff7875; 
        }
        
        margin-bottom: 5px; 
      }
    }
    
    textarea {
      resize: vertical;
      min-height: 100px; 
    }

    .error-tip {
      color: #ff4d4f;
      font-size: 12px;
      margin-top: 4px;
      display: block;
      padding-left: 4px;
    }
  }

  .form-privacy {
    margin-bottom: 25px;
    transition: all 0.3s ease;
    
    .checkbox-container {
      display: flex;
      align-items: center;
      cursor: pointer;
      font-size: 13px; 
      color: #666;
      line-height: 1.5;
      padding: 8px;
      margin-left: -8px;
      border-radius: 8px;
      transition: all 0.3s ease;
      
      &:hover {
        background-color: rgba(0, 0, 0, 0.02);
      }
      
      input[type="checkbox"] {
        margin-right: 10px;
        width: 18px;
        height: 18px;
        accent-color: #333;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        
        &:checked {
          animation: checkboxPop 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      }
      
      .privacy-text {
        transition: all 0.3s ease;
        
        &.text-danger { 
          color: #d32f2f; 
        }
      }
    }
  }
  
  @keyframes checkboxPop {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }

  .submit-btn {
    width: 100%;
    min-height: 48px;
    padding: 14px 24px; 
    background-color: #222;
    color: #fff;
    border: none;
    border-radius: 12px;
    font-size: 14px; 
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    letter-spacing: 0.5px;
    position: relative;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    box-sizing: border-box;

    .btn-text {
      transition: transform 0.3s ease;
    }
    
    .btn-icon {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      display: inline-block;
      font-size: 16px;
    }

    &:hover:not(:disabled) {
      background-color: #000;
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.2);
      
      .btn-icon {
        transform: translateX(5px);
      }
    }
    
    &:active:not(:disabled) {
      transform: translateY(-1px) !important;
      box-shadow: 0 4px 10px rgba(0,0,0,0.15) !important;
      transition: all 0.1s ease !important;
    }
    
    &.submitting {
      .btn-text {
        animation: pulse-text 1.5s ease-in-out infinite;
      }
      
      .btn-icon {
        animation: rotate-loading 1s linear infinite;
      }
    }
    
    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
      
      &:hover {
        transform: none;
        .btn-icon {
          transform: none;
        }
      }
    }
  }
  
  @keyframes pulse-text {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
  }
  
  @keyframes rotate-loading {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .status-msg {
    margin-top: 15px;
    text-align: center;
    font-size: 13px;
    padding: 12px 16px;
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.3s ease;
    
    &.success { 
      background-color: #f6ffed; 
      color: #52c41a; 
      border: 1px solid #b7eb8f;
      box-shadow: 0 2px 8px rgba(82, 196, 26, 0.1);
    }
    
    &.error { 
      background-color: #fff2f0; 
      color: #ff4d4f; 
      border: 1px solid #ffccc7;
      box-shadow: 0 2px 8px rgba(255, 77, 79, 0.1);
    }
  }
}

// ===== 过渡动画效果 =====

// 淡入淡出
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

// 滑动淡入
.slide-fade-enter-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-fade-enter-from {
  transform: translateY(-10px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(-5px);
  opacity: 0;
}

// 弹跳进入
.bounce-in-enter-active {
  animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.bounce-in-leave-active {
  animation: bounce-out 0.4s ease-in;
}

@keyframes bounce-in {
  0% {
    transform: scale(0.8) translateY(-20px);
    opacity: 0;
  }
  50% {
    transform: scale(1.05) translateY(0);
  }
  100% {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

@keyframes bounce-out {
  to {
    transform: scale(0.8);
    opacity: 0;
  }
}

// 震动动画 (隐私协议未勾选时) - 柔和版本
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-3px); }
  75% { transform: translateX(3px); }
}

.shake-animation {
  animation: shake 0.3s ease-in-out;
  
  .privacy-text {
    color: #d32f2f !important;
  }
}

// ===== 响应式设计 =====
@media (max-width: 768px) {
  .bg-decoration {
    .circle {
      &.circle-1 {
        width: 400px;
        height: 400px;
        top: -150px;
        right: -150px;
      }
      
      &.circle-2 {
        width: 300px;
        height: 300px;
      }
      
      &.circle-3 {
        width: 200px;
        height: 200px;
      }
    }
  }
  
  .contact-page { 
    padding-top: 80px; 
  }
  
  ::v-deep .force-light-nav { 
    padding: 15px 20px !important; 
  }
  
  .contact-container { 
    padding: 40px 20px; 
    min-height: auto; 
  }
  
  .contact-content { 
    flex-direction: column; 
    gap: 40px; 
  }
  
  .info-section {
    flex: 1;
    
    .main-title { 
      font-size: 32px; 
    }
    
    .detail-item {
      margin-left: 0;
      padding-left: 0;
      
      &:hover {
        transform: translateX(3px);
      }
    }
  }
  
  .form-section { 
    max-width: 100%; 
    
    .form-group.focused {
      transform: translateY(-1px);
    }
  }
}
</style>