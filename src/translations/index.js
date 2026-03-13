// 导入所有翻译文件
import commonEn from './en/common.json'
import homeEn from './en/home.json'
import contactEn from './en/contact.json'
import researchEn from './en/research.json'
import cvEn from './en/cv.json'
import publicationsEn from './en/publications.json'

import commonZh from './zh/common.json'
import homeZh from './zh/home.json'
import contactZh from './zh/contact.json'
import researchZh from './zh/research.json'
import cvZh from './zh/cv.json'
import publicationsZh from './zh/publications.json'

// 合并翻译资源
export const resources = {
  en: {
    translation: {
      ...commonEn.navigation,
      ...commonEn.common,
      hero: homeEn,
      contact: contactEn,
      research: researchEn,
      cv: cvEn,
      publications: publicationsEn
    }
  },
  zh: {
    translation: {
      ...commonZh.navigation,
      ...commonZh.common,
      hero: homeZh,
      contact: contactZh,
      research: researchZh,
      cv: cvZh,
      publications: publicationsZh
    }
  }
}
