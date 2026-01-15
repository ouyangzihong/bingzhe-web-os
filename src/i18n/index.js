import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en'
import zh from './zh'

Vue.use(VueI18n)

// 1. 获取浏览器缓存，如果没有就默认英文 'en'
const savedLang = localStorage.getItem('app-language') || 'en'

const i18n = new VueI18n({
  locale: savedLang, // 设置当前语言
  fallbackLocale: 'en', // 如果找不到翻译，回退到英文
  messages: {
    en,
    zh
  }
})

export default i18n