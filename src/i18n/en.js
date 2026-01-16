// src/i18n/en.js
export default {
  navbar: {
    home: 'Home',
    about: 'About Us',
    services: 'Design Services',
    products: 'Products',
    projects: 'Projects',
    industries: 'Industries',
    contact: 'Contact'
  },
  hero: {
    title: 'Design Beyond Products',
    subtitle: 'Integrated Interior Solutions for Global Spaces',
    desc: 'Creating immersive environments that redefine spatial experiences.'
  },
  services: {
    design: 'Design Services',
    surfaces: 'Wallcovering & Surfaces',
    furniture: 'Soft Furnishing & Furniture'
  },
  // --- 修改部分开始 ---
  process: {
    stats: [
      { num: '150+', title: 'COMPLETED PROJECTS', desc: 'From private residences to public and commercial spaces.' },
      { num: '80%', title: 'CLIENT REFERRALS', desc: 'Built on long-term trust and collaboration.' },
      { num: '20+', title: 'CORE EXPERTS', desc: 'Design, material, and technical specialists.' },
      { num: '10+', title: 'YEARS OF EXPERIENCE', desc: 'Design-led integrated interior solutions.' }
    ],
    timeline: [
      { step: 'Design Development', sub: '' }, // 移除重复的副标题，保持简洁
      { step: 'Material Selection', sub: '' },
      { step: 'Specification', sub: '' },
      { step: 'Custom Production', sub: '' },
      { step: 'Quality Control', sub: '' },
      { step: 'Delivery', sub: '' }
    ]
  }
  // --- 修改部分结束 ---
}