// src/i18n/zh.js
export default {
  navbar: {
    home: '首页',
    about: '关于我们',
    services: '设计服务',
    products: '产品体系',
    projects: '项目案例',
    industries: '行业应用',
    contact: '联系我们'
  },
  hero: {
    title: '设计不止于产品',
    subtitle: '国际化整体室内解决方案',
    desc: '我们致力于创造沉浸式的环境，重新定义空间体验。'
  },
  services: {
    design: '设计服务',
    surfaces: '墙面系统与表面材料',
    furniture: '软装与家具系统'
  },
  // --- 修改部分开始 ---
  process: {
    stats: [
      { num: '150+', title: '累计完工项目', desc: '涵盖高端住宅、公共及商业空间' },
      { num: '80%', title: '客户持续回访', desc: '基于长期信任与持续合作' },
      { num: '20+', title: '核心专家团队', desc: '设计、材料与技术专家团队' },
      { num: '10+', title: '行业经验沉淀', desc: '以设计为核心的一体化室内解决方案' }
    ],
    timeline: [
      { step: '设计深化', sub: '' }, // sub 留空，实现“纯中文”不带英文翻译
      { step: '材料选型', sub: '' },
      { step: '技术标准', sub: '' },
      { step: '定制生产', sub: '' },
      { step: '品质管控', sub: '' },
      { step: '交付落地', sub: '' }
    ]
  }
  // --- 修改部分结束 ---
}