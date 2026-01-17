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
  },
  projects: {
    residence: {
      title: '现代私人住宅',
      desc: '由定制墙纸和量身定制的软装定义的宁静居住空间。',
      location: '中国 上海',
      type: '住宅'
    },
    hotel: {
      title: '豪华酒店室内设计',
      desc: '由材料驱动设计和定制家具方案塑造的酒店室内空间。',
      location: '阿联酋 迪拜',
      type: '酒店'
    },
    showroom: {
      title: '商业品牌展厅',
      desc: '通过集成墙面和家具系统来表达品牌形象的商业空间。',
      location: '中国 广州',
      type: '商业'
    },
    resort: {
      title: '度假村酒店室内设计',
      desc: '由自然纹理和定制家具方案塑造的度假村室内空间。',
      location: '印尼 巴厘岛',
      type: '酒店'
    }
  },
  whyChooseUs: {
    title: "为什么选择我们",
    subtitle: "设计驱动，全球交付",
    items: [
      {
        title: "定制化设计",
        desc: "每个项目都根据其空间条件和功能目标量身定制。拒绝模板，只提供专属解决方案。"
      },
      {
        title: "整合供应链",
        desc: "设计、制造和交付作为一个集成系统运作，确保每个阶段的高效、一致和高品质。"
      },
      {
        title: "国际标准",
        desc: "我们在全球范围内的设计开发、材料甄选和项目执行过程中，始终遵循国际标准。"
      },
      {
        title: "一站式方案",
        desc: "从设计服务、软装配饰到最终安装，我们由同一团队提供完全集成的一站式交钥匙服务。"
      }
    ]
  }
}