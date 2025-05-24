import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Import translation files
import enCommon from './translations/en/common.json'
import enHome from './translations/en/home.json'
import enContact from './translations/en/contact.json'
import enResearch from './translations/en/research.json'
import enBlog from './translations/en/blog.json'
import enCV from './translations/en/cv.json'
import enPublications from './translations/en/publications.json'

import zhCommon from './translations/zh/common.json'
import zhHome from './translations/zh/home.json'
import zhContact from './translations/zh/contact.json'
import zhResearch from './translations/zh/research.json'
import zhBlog from './translations/zh/blog.json'
import zhCV from './translations/zh/cv.json'
import zhPublications from './translations/zh/publications.json'

const resources = {
  en: {
    translation: {
      navigation: enCommon.navigation,
      common: enCommon.common,
      ...enHome,
      contact: enContact,
      research: enResearch,
      blog: enBlog,
      cv: enCV,
      publications: enPublications
    }
  },
  zh: {
    translation: {
      navigation: zhCommon.navigation,
      common: zhCommon.common,
      ...zhHome,
      contact: zhContact,
      research: zhResearch,
      blog: zhBlog,
      cv: zhCV,
      publications: zhPublications
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'en', // 默认设置为英文
    debug: false,
    
    interpolation: {
      escapeValue: false // React已经进行了转义
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
      checkWhitelist: true
    }
  })

export default i18n
