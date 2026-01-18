<template>
  <div class="contact-page">
    <TheNavbar class="force-light-nav" />
    
    <div class="contact-container">
      <div class="contact-content">
        <div class="info-section">
          <h4 class="sub-title">{{ $t('contact.subTitle') }}</h4>
          <h1 class="main-title">{{ $t('contact.title') }}</h1>
          <p class="description">{{ $t('contact.description') }}</p>
          
          <div class="contact-details">
            <div class="detail-item">
              <span class="icon">📍</span>
              <span>{{ $t('contact.location') }}</span>
            </div>
            <div class="detail-item">
              <span class="icon">✉️</span>
              <span>{{ $t('contact.email') }}</span>
            </div>
            <div class="detail-item">
              <span class="icon">📱</span>
              <span>{{ $t('contact.phone') }}</span>
            </div>
          </div>
        </div>

        <div class="form-section">
          <form @submit.prevent="submitForm" novalidate>
            <div class="form-group">
              <input 
                v-model="form.name" 
                type="text" 
                :placeholder="$t('contact.form.name') + ' *'" 
                required
                :class="{ 'input-error': errors.name }"
                @input="errors.name = false"
              >
            </div>
            
            <div class="form-group">
              <input 
                v-model="form.email" 
                type="email" 
                :placeholder="$t('contact.form.email') + ' *'" 
                required
                :class="{ 'input-error': errors.email }"
                @input="errors.email = false"
              >
              <transition name="fade">
                <span v-if="errors.email" class="error-tip">
                  {{ $t('contact.form.emailError') }}
                </span>
              </transition>
            </div>

            <div class="form-group">
              <input 
                v-model="form.subject" 
                type="text" 
                :placeholder="$t('contact.form.subject')" 
              >
            </div>
            
            <div class="form-group">
              <textarea 
                v-model="form.message" 
                :placeholder="$t('contact.form.message')" 
                rows="4"
              ></textarea>
            </div>
            
            <div class="form-privacy" :class="{ 'shake-animation': privacyShake }">
              <label class="checkbox-container">
                <input type="checkbox" v-model="form.privacyAgreed" @change="privacyError = false">
                <span class="checkmark"></span>
                <span class="privacy-text" :class="{ 'text-danger': privacyError }">
                  {{ $t('contact.form.privacy') }}
                </span>
              </label>
            </div>

            <button type="submit" class="submit-btn" :disabled="isSubmitting">
              {{ isSubmitting ? $t('contact.form.submitting') : $t('contact.form.submit') }}
            </button>
            
            <p v-if="submitStatus" :class="['status-msg', submitStatus.type]">
              {{ submitStatus.msg }}
            </p>
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
  methods: {
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
}

.contact-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center; 
  gap: 80px;
}

.info-section {
  flex: 0 0 45%; 
  
  .sub-title {
    font-size: 14px;
    color: #666;
    margin-bottom: 20px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .main-title {
    font-size: 43px; 
    line-height: 1.2;
    margin-bottom: 40px;
    white-space: pre-wrap;
    font-weight: 600;
    color: #1a1a1a;
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
    
    .icon {
      margin-right: 20px;
      font-size: 18px;
      width: 24px;
      text-align: center;
    }
  }
}

.form-section {
  flex: 1;
  max-width: 400px; 
  
  .form-group {
    margin-bottom: 20px; 
    position: relative; // 确保错误提示定位基准正确
    
    input, textarea {
      width: 100%;
      padding: 12px 16px; 
      background-color: #f9f9f9;
      border: 1px solid #e5e5e5;
      border-radius: 12px;
      font-size: 14px; 
      color: #333;
      transition: all 0.3s ease;
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
      }

      &.input-error {
        border-color: #ff4d4f;
        background-color: #fff1f0;
        &::placeholder { color: #ff7875; }
        
        // 当发生错误时，稍微增加底部间距给提示文字留空间
        margin-bottom: 5px; 
      }
    }
    
    textarea {
      resize: vertical;
      min-height: 100px; 
    }

    // --- 新增：错误提示文字样式 ---
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
    
    .checkbox-container {
      display: flex;
      align-items: center;
      cursor: pointer;
      font-size: 13px; 
      color: #666;
      line-height: 1.5;
      
      input {
        margin-right: 10px;
        width: 16px;
        height: 16px;
        accent-color: #333;
      }
      
      .privacy-text {
        transition: color 0.3s;
        &.text-danger { color: #d32f2f; font-weight: 500; }
      }
    }
  }

  .submit-btn {
    width: 100%;
    padding: 12px; 
    background-color: #222;
    color: #fff;
    border: none;
    border-radius: 12px;
    font-size: 14px; 
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    letter-spacing: 0.5px;

    &:hover {
      background-color: #000;
      transform: translateY(-2px);
      box-shadow: 0 4px 10px rgba(0,0,0,0.15);
    }
    
    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }
  }

  .status-msg {
    margin-top: 15px;
    text-align: center;
    font-size: 13px;
    padding: 8px;
    border-radius: 8px;
    
    &.success { background-color: #f6ffed; color: #52c41a; border: 1px solid #b7eb8f; }
    &.error { background-color: #fff2f0; color: #ff4d4f; border: 1px solid #ffccc7; }
  }
}

// 简单的淡入淡出动画
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
}

.shake-animation {
  animation: shake 0.4s ease-in-out;
}

@media (max-width: 768px) {
  .contact-page { 
    padding-top: 80px; 
  }
  ::v-deep .force-light-nav { padding: 15px 20px !important; }
  
  .contact-container { 
    padding: 40px 20px; 
    min-height: auto; 
  }
  
  .contact-content { 
    flex-direction: column; 
    gap: 40px; 
  }
  
  .info-section { .main-title { font-size: 32px; } } 
  .form-section { max-width: 100%; }
}
</style>