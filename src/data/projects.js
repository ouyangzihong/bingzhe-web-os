// src/data/projects.js

// 建议将图片按项目文件夹整理，例如 src/assets/images/project1/...
// 这里演示使用 require 引入

export const projectsData = [
  {
    id: 'residence-shanghai', // 路由ID
    // 公共属性 (列表页封面)
    coverImage: require('@/assets/images/home-bg.jpg'),

    // --- 中文数据 ---
    zh: {
      // 列表页字段
      title: '静谧居所',
      desc: '探索当代极简主义与传统居住文化的边界。',
      type: '室内设计',
      location: '中国 上海',
      
      // 详情页 - Hero区域
      intro: '由定制墙纸和精致软装定义的宁静居住空间。旨在繁杂的都市中创造一处静谧的避世之所。', // 新增的项目简介
      date: '2023年12月',
      role: '主案设计',
      area: '350 m²',

      // 详情页 - 核心画廊 (左侧：文案+氛围图)
      leftContent: [
        { type: 'text', content: '空间的设计逻辑始于对光线的捕捉。我们拆除了原本封闭的隔墙，让自然光能够深入室内的每一个角落。' },
        { type: 'image', src: require('@/assets/images/service-design.jpg'), caption: '材质灵感板' }
      ],

      // 详情页 - 核心画廊 (中间：主要大图)
      mainImages: [
        { src: require('@/assets/images/home-bg.jpg'), label: '客厅全景' },
        { src: require('@/assets/images/home-bg.jpg'), label: '主卧视角' },
        { src: require('@/assets/images/home-bg.jpg'), label: '走廊细节' }
      ],

      // 详情页 - 核心画廊 (右侧：产品/细节图)
      rightImages: [
        { spacer: true, height: '200px' }, // 错位占位符
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' }
      ]
    },

    // --- 英文数据 ---
    en: {
      title: 'Contemporary Private Residence',
      desc: 'A modern approach to traditional living.',
      type: 'Interior Design',
      location: 'Shanghai, China',
      
      intro: 'A calm residential space defined by bespoke wallcovering and tailored soft furnishings.',
      date: 'Dec 2023',
      role: 'Lead Architect',
      area: '350 m²',

      leftContent: [
        { type: 'text', content: 'The design logic begins with the capture of light. We demolished the original enclosed partitions to allow natural light to penetrate deep into every corner.' },
        { type: 'image', src: require('@/assets/images/service-design.jpg'), caption: 'Material Palette' }
      ],

      mainImages: [
        { src: require('@/assets/images/home-bg.jpg'), label: 'Living Room' },
        { src: require('@/assets/images/home-bg.jpg'), label: 'Master Bedroom' },
        { src: require('@/assets/images/home-bg.jpg'), label: 'Corridor Detail' }
      ],

      rightImages: [
        { spacer: true, height: '200px' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ]
    }
  },
  {
    id: 'residence-shanghai2', // 路由ID
    // 公共属性 (列表页封面)
    coverImage: require('@/assets/images/home-bg.jpg'),

    // --- 中文数据 ---
    zh: {
      // 列表页字段
      title: '静谧居所',
      desc: '探索当代极简主义与传统居住文化的边界。',
      type: '室内设计',
      location: '中国 上海',
      
      // 详情页 - Hero区域
      intro: '由定制墙纸和精致软装定义的宁静居住空间。旨在繁杂的都市中创造一处静谧的避世之所。', // 新增的项目简介
      date: '2023年12月',
      role: '主案设计',
      area: '350 m²',

      // 详情页 - 核心画廊 (左侧：文案+氛围图)
      leftContent: [
        { type: 'text', content: '空间的设计逻辑始于对光线的捕捉。我们拆除了原本封闭的隔墙，让自然光能够深入室内的每一个角落。' },
        { type: 'image', src: require('@/assets/images/service-design.jpg'), caption: '材质灵感板' }
      ],

      // 详情页 - 核心画廊 (中间：主要大图)
      mainImages: [
        { src: require('@/assets/images/home-bg.jpg'), label: '客厅全景' },
        { src: require('@/assets/images/home-bg.jpg'), label: '主卧视角' },
        { src: require('@/assets/images/home-bg.jpg'), label: '走廊细节' }
      ],

      // 详情页 - 核心画廊 (右侧：产品/细节图)
      rightImages: [
        { spacer: true, height: '200px' }, // 错位占位符
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' }
      ]
    },

    // --- 英文数据 ---
    en: {
      title: 'Contemporary Private Residence',
      desc: 'A modern approach to traditional living.',
      type: 'Interior Design',
      location: 'Shanghai, China',
      
      intro: 'A calm residential space defined by bespoke wallcovering and tailored soft furnishings.',
      date: 'Dec 2023',
      role: 'Lead Architect',
      area: '350 m²',

      leftContent: [
        { type: 'text', content: 'The design logic begins with the capture of light. We demolished the original enclosed partitions to allow natural light to penetrate deep into every corner.' },
        { type: 'image', src: require('@/assets/images/service-design.jpg'), caption: 'Material Palette' }
      ],

      mainImages: [
        { src: require('@/assets/images/home-bg.jpg'), label: 'Living Room' },
        { src: require('@/assets/images/home-bg.jpg'), label: 'Master Bedroom' },
        { src: require('@/assets/images/home-bg.jpg'), label: 'Corridor Detail' }
      ],

      rightImages: [
        { spacer: true, height: '200px' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ]
    }
  },
  {
    id: 'residence-shanghai3', // 路由ID
    // 公共属性 (列表页封面)
    coverImage: require('@/assets/images/home-bg.jpg'),

    // --- 中文数据 ---
    zh: {
      // 列表页字段
      title: '静谧居所',
      desc: '探索当代极简主义与传统居住文化的边界。',
      type: '室内设计',
      location: '中国 上海',
      
      // 详情页 - Hero区域
      intro: '由定制墙纸和精致软装定义的宁静居住空间。旨在繁杂的都市中创造一处静谧的避世之所。', // 新增的项目简介
      date: '2023年12月',
      role: '主案设计',
      area: '350 m²',

      // 详情页 - 核心画廊 (左侧：文案+氛围图)
      leftContent: [
        { type: 'text', content: '空间的设计逻辑始于对光线的捕捉。我们拆除了原本封闭的隔墙，让自然光能够深入室内的每一个角落。' },
        { type: 'image', src: require('@/assets/images/service-design.jpg'), caption: '材质灵感板' }
      ],

      // 详情页 - 核心画廊 (中间：主要大图)
      mainImages: [
        { src: require('@/assets/images/home-bg.jpg'), label: '客厅全景' },
        { src: require('@/assets/images/home-bg.jpg'), label: '主卧视角' },
        { src: require('@/assets/images/home-bg.jpg'), label: '走廊细节' }
      ],

      // 详情页 - 核心画廊 (右侧：产品/细节图)
      rightImages: [
        { spacer: true, height: '200px' }, // 错位占位符
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' }
      ]
    },

    // --- 英文数据 ---
    en: {
      title: 'Contemporary Private Residence',
      desc: 'A modern approach to traditional living.',
      type: 'Interior Design',
      location: 'Shanghai, China',
      
      intro: 'A calm residential space defined by bespoke wallcovering and tailored soft furnishings.',
      date: 'Dec 2023',
      role: 'Lead Architect',
      area: '350 m²',

      leftContent: [
        { type: 'text', content: 'The design logic begins with the capture of light. We demolished the original enclosed partitions to allow natural light to penetrate deep into every corner.' },
        { type: 'image', src: require('@/assets/images/service-design.jpg'), caption: 'Material Palette' }
      ],

      mainImages: [
        { src: require('@/assets/images/home-bg.jpg'), label: 'Living Room' },
        { src: require('@/assets/images/home-bg.jpg'), label: 'Master Bedroom' },
        { src: require('@/assets/images/home-bg.jpg'), label: 'Corridor Detail' }
      ],

      rightImages: [
        { spacer: true, height: '200px' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ]
    }
  }
  // 可以在这里复制添加更多项目...
];