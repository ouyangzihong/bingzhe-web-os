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
      
      if (!this.form.name.trim()) {
        this.errors.name = true;
        isValid = false;
      }
      if (!this.form.email.trim()) {
        this.errors.email = true;
        isValid = false;
      }

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
  // 去掉了 overflow: hidden，允许页面滚动
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
  // --- 关键布局修改 ---
  min-height: 100vh; // 1. 至少占满一屏
  display: flex;
  flex-direction: column;
  justify-content: center; // 2. 内容垂直居中
  // 注意：这里去掉了 align-items: center，不再强制水平居中，让 max-width 自然居中
  
  width: 100%;
  max-width: 1400px;
  margin: 0 auto; // 标准的水平居中方式
  padding: 0 180px;
  box-sizing: border-box;
  
  // 稍微抵消一下 Navbar 的高度视觉影响，让内容视觉上更居中
  padding-top: 60px; 
}

.contact-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  // 让左右两侧在垂直方向上对齐（例如左侧文字少，右侧表单长时，保持垂直居中对齐）
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
    font-size: 43px; // 字体保持 43px
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
  max-width: 400px; // 保持精致的宽度
  
  .form-group {
    margin-bottom: 20px; 
    
    input, textarea {
      width: 100%;
      padding: 12px 16px; // 保持较小的高度
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
      }
    }
    
    textarea {
      resize: vertical;
      min-height: 100px; 
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
    padding: 12px; // 保持较小高度
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
    min-height: auto; // 移动端取消强行全屏，避免高度不够
  }
  
  .contact-content { 
    flex-direction: column; 
    gap: 40px; 
  }
  
  .info-section { .main-title { font-size: 32px; } } 
  .form-section { max-width: 100%; }
}
</style>