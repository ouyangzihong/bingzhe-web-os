// src/data/projects.js

// 建议将图片按项目文件夹整理，例如 src/assets/images/project1/...
// 这里演示使用 require 引入
// imgDirection 图片方向 0-横图，1-竖图

export const projectsData = [
  {
    id: 'project01', // 路由ID
    // 公共属性 (列表页封面)
    coverImage: require('@/assets/images/projects/project1-00.jpg'),
    isSelected: true, // 是否精选展示

    // --- 中文数据 ---
    zh: {
      // 列表页字段
      title: '静谧居所',
      intro: '空间如一件柔软的织物，墙布是经线，家具是纬线，在松弛的编织中留出呼吸的缝隙。一切都透着被阳光晒过的温暖与蓬松。',
      type: '室内设计',
      location: '中国 上海',
      
      // 详情页 - Hero区域

      date: '2023年12月',
      location: '中国 中山',
      type: '室内设计',

      // 详情页 - 核心画廊 (左侧：文案+氛围图)
      leftContent: [
        { type: 'text', content: '在这里，设计摒弃了硬朗的结构，转而追求一种 织物的逻辑 。墙面系统选用了一系列拥有亲密触感与微妙光泽的柔性质地，它们彼此衔接，如同细腻的经线，铺就了空间温润的基底。这种质地邀请触摸，并温柔地吸纳声音与光线。\n与之交织的家具，则扮演了灵动纬线的角色。它们形态圆融、线条舒缓，其面料与填充物的质感与墙面形成深度呼应。搭配的核心在于 “松弛的张力”——并非严丝合缝，而是在精心的留白与交错中，让空气与光线得以自由穿行其间。当午后日光斜照，墙面的柔和光泽与织物的温暖绒毛共同作用，升腾起一种令人昏昏欲睡的、蓬松的幸福氛围，仿佛整个空间都在进行着缓慢而深长的呼吸。' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
      ],

      // 详情页 - 核心画廊 (中间：主要大图)
      mainImages: [
        { src: require('@/assets/images/projects/project1-01.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-02.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-03.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-04.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-05.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-06.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-07.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-08.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-09.jpg'),imgDirection:1},
      ],

      // 详情页 - 核心画廊 (右侧：产品/细节图)
      rightImages: [
        { spacer: true, height: '0px' }, // 错位占位符
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
      ]
    },

    // --- 英文数据 ---
    en: {
      title: 'Breath Between Textiles',
      intro: 'Space is like a soft textile: wallcoverings the warp, furnishings the weft. Loose weaving leaves room for breath, everything imbued with the warmth and loftiness of sun-drenched fabric.',

      date: 'Dec 2023',
      location: 'Zhongshan, China',
      type: 'Interior Design',

      leftContent: [
        { type: 'text', content: 'Here, design forsakes rigid structure for the logic of a textile. The wall system employs a series of soft textures with an intimate touch and subtle sheen, joining together like delicate warp threads to lay a warm, moist foundation for the space. This texture invites touch and gently absorbs sound and light.\nInterwoven with this, the furnishings act as the agile weft. Their forms are rounded, lines soothing, with fabric and upholstery textures deeply echoing the walls. The core of the pairing lies in “relaxed tension”—not a tight fit, but a deliberate use of negative space and overlap that allows air and light to pass through freely. When the afternoon sun slants in, the soft sheen of the walls and the warm nap of the textiles interact, evoking a drowsy, lofty atmosphere of happiness, as if the entire space is engaged in a slow, deep breath.' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ],

      mainImages: [
        { src: require('@/assets/images/projects/project1-01.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-02.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-03.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-04.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-05.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-06.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-07.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-08.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-09.jpg'),imgDirection:1},
      ],

      rightImages: [
        { spacer: true, height: '0px' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ]
    }
  },
  {
    id: 'project02', // 路由ID
    // 公共属性 (列表页封面)
    coverImage: require('@/assets/images/projects/project1-00.jpg'),
    isSelected: true, // 是否精选展示

    // --- 中文数据 ---
    zh: {
      // 列表页字段
      title: '静谧居所',
      intro: '空间如一件柔软的织物，墙布是经线，家具是纬线，在松弛的编织中留出呼吸的缝隙。一切都透着被阳光晒过的温暖与蓬松。',
      type: '室内设计',
      location: '中国 上海',
      
      // 详情页 - Hero区域

      date: '2023年12月',
      location: '中国 中山',
      type: '室内设计',

      // 详情页 - 核心画廊 (左侧：文案+氛围图)
      leftContent: [
        { type: 'text', content: '在这里，设计摒弃了硬朗的结构，转而追求一种 织物的逻辑 。墙面系统选用了一系列拥有亲密触感与微妙光泽的柔性质地，它们彼此衔接，如同细腻的经线，铺就了空间温润的基底。这种质地邀请触摸，并温柔地吸纳声音与光线。\n与之交织的家具，则扮演了灵动纬线的角色。它们形态圆融、线条舒缓，其面料与填充物的质感与墙面形成深度呼应。搭配的核心在于 “松弛的张力”——并非严丝合缝，而是在精心的留白与交错中，让空气与光线得以自由穿行其间。当午后日光斜照，墙面的柔和光泽与织物的温暖绒毛共同作用，升腾起一种令人昏昏欲睡的、蓬松的幸福氛围，仿佛整个空间都在进行着缓慢而深长的呼吸。' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
      ],

      // 详情页 - 核心画廊 (中间：主要大图)
      mainImages: [
        { src: require('@/assets/images/projects/project1-01.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-02.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-03.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-04.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-05.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-06.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-07.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-08.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-09.jpg'),imgDirection:1},
      ],

      // 详情页 - 核心画廊 (右侧：产品/细节图)
      rightImages: [
        { spacer: true, height: '0px' }, // 错位占位符
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
      ]
    },

    // --- 英文数据 ---
    en: {
      title: 'Breath Between Textiles',
      intro: 'Space is like a soft textile: wallcoverings the warp, furnishings the weft. Loose weaving leaves room for breath, everything imbued with the warmth and loftiness of sun-drenched fabric.',

      date: 'Dec 2023',
      location: 'Zhongshan, China',
      type: 'Interior Design',

      leftContent: [
        { type: 'text', content: 'Here, design forsakes rigid structure for the logic of a textile. The wall system employs a series of soft textures with an intimate touch and subtle sheen, joining together like delicate warp threads to lay a warm, moist foundation for the space. This texture invites touch and gently absorbs sound and light.\nInterwoven with this, the furnishings act as the agile weft. Their forms are rounded, lines soothing, with fabric and upholstery textures deeply echoing the walls. The core of the pairing lies in “relaxed tension”—not a tight fit, but a deliberate use of negative space and overlap that allows air and light to pass through freely. When the afternoon sun slants in, the soft sheen of the walls and the warm nap of the textiles interact, evoking a drowsy, lofty atmosphere of happiness, as if the entire space is engaged in a slow, deep breath.' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ],

      mainImages: [
        { src: require('@/assets/images/projects/project1-01.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-02.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-03.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-04.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-05.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-06.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-07.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-08.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-09.jpg'),imgDirection:1},
      ],

      rightImages: [
        { spacer: true, height: '0px' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ]
    }
  },
  {
    id: 'project03', // 路由ID
    // 公共属性 (列表页封面)
    coverImage: require('@/assets/images/projects/project1-00.jpg'),
    isSelected: true, // 是否精选展示

    // --- 中文数据 ---
    zh: {
      // 列表页字段
      title: '静谧居所',
      intro: '空间如一件柔软的织物，墙布是经线，家具是纬线，在松弛的编织中留出呼吸的缝隙。一切都透着被阳光晒过的温暖与蓬松。',
      type: '室内设计',
      location: '中国 上海',
      
      // 详情页 - Hero区域

      date: '2023年12月',
      location: '中国 中山',
      type: '室内设计',

      // 详情页 - 核心画廊 (左侧：文案+氛围图)
      leftContent: [
        { type: 'text', content: '在这里，设计摒弃了硬朗的结构，转而追求一种 织物的逻辑 。墙面系统选用了一系列拥有亲密触感与微妙光泽的柔性质地，它们彼此衔接，如同细腻的经线，铺就了空间温润的基底。这种质地邀请触摸，并温柔地吸纳声音与光线。\n与之交织的家具，则扮演了灵动纬线的角色。它们形态圆融、线条舒缓，其面料与填充物的质感与墙面形成深度呼应。搭配的核心在于 “松弛的张力”——并非严丝合缝，而是在精心的留白与交错中，让空气与光线得以自由穿行其间。当午后日光斜照，墙面的柔和光泽与织物的温暖绒毛共同作用，升腾起一种令人昏昏欲睡的、蓬松的幸福氛围，仿佛整个空间都在进行着缓慢而深长的呼吸。' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
      ],

      // 详情页 - 核心画廊 (中间：主要大图)
      mainImages: [
        { src: require('@/assets/images/projects/project1-01.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-02.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-03.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-04.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-05.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-06.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-07.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-08.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-09.jpg'),imgDirection:1},
      ],

      // 详情页 - 核心画廊 (右侧：产品/细节图)
      rightImages: [
        { spacer: true, height: '0px' }, // 错位占位符
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
      ]
    },

    // --- 英文数据 ---
    en: {
      title: 'Breath Between Textiles',
      intro: 'Space is like a soft textile: wallcoverings the warp, furnishings the weft. Loose weaving leaves room for breath, everything imbued with the warmth and loftiness of sun-drenched fabric.',

      date: 'Dec 2023',
      location: 'Zhongshan, China',
      type: 'Interior Design',

      leftContent: [
        { type: 'text', content: 'Here, design forsakes rigid structure for the logic of a textile. The wall system employs a series of soft textures with an intimate touch and subtle sheen, joining together like delicate warp threads to lay a warm, moist foundation for the space. This texture invites touch and gently absorbs sound and light.\nInterwoven with this, the furnishings act as the agile weft. Their forms are rounded, lines soothing, with fabric and upholstery textures deeply echoing the walls. The core of the pairing lies in “relaxed tension”—not a tight fit, but a deliberate use of negative space and overlap that allows air and light to pass through freely. When the afternoon sun slants in, the soft sheen of the walls and the warm nap of the textiles interact, evoking a drowsy, lofty atmosphere of happiness, as if the entire space is engaged in a slow, deep breath.' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ],

      mainImages: [
        { src: require('@/assets/images/projects/project1-01.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-02.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-03.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-04.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-05.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-06.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-07.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-08.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-09.jpg'),imgDirection:1},
      ],

      rightImages: [
        { spacer: true, height: '0px' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ]
    }
  },
  {
    id: 'project04', // 路由ID
    // 公共属性 (列表页封面)
    coverImage: require('@/assets/images/projects/project1-00.jpg'),
    isSelected: true, // 是否精选展示

    // --- 中文数据 ---
    zh: {
      // 列表页字段
      title: '静谧居所',
      intro: '空间如一件柔软的织物，墙布是经线，家具是纬线，在松弛的编织中留出呼吸的缝隙。一切都透着被阳光晒过的温暖与蓬松。',
      type: '室内设计',
      location: '中国 上海',
      
      // 详情页 - Hero区域

      date: '2023年12月',
      location: '中国 中山',
      type: '室内设计',

      // 详情页 - 核心画廊 (左侧：文案+氛围图)
      leftContent: [
        { type: 'text', content: '在这里，设计摒弃了硬朗的结构，转而追求一种 织物的逻辑 。墙面系统选用了一系列拥有亲密触感与微妙光泽的柔性质地，它们彼此衔接，如同细腻的经线，铺就了空间温润的基底。这种质地邀请触摸，并温柔地吸纳声音与光线。\n与之交织的家具，则扮演了灵动纬线的角色。它们形态圆融、线条舒缓，其面料与填充物的质感与墙面形成深度呼应。搭配的核心在于 “松弛的张力”——并非严丝合缝，而是在精心的留白与交错中，让空气与光线得以自由穿行其间。当午后日光斜照，墙面的柔和光泽与织物的温暖绒毛共同作用，升腾起一种令人昏昏欲睡的、蓬松的幸福氛围，仿佛整个空间都在进行着缓慢而深长的呼吸。' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
      ],

      // 详情页 - 核心画廊 (中间：主要大图)
      mainImages: [
        { src: require('@/assets/images/projects/project1-01.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-02.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-03.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-04.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-05.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-06.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-07.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-08.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-09.jpg'),imgDirection:1},
      ],

      // 详情页 - 核心画廊 (右侧：产品/细节图)
      rightImages: [
        { spacer: true, height: '0px' }, // 错位占位符
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
      ]
    },

    // --- 英文数据 ---
    en: {
      title: 'Breath Between Textiles',
      intro: 'Space is like a soft textile: wallcoverings the warp, furnishings the weft. Loose weaving leaves room for breath, everything imbued with the warmth and loftiness of sun-drenched fabric.',

      date: 'Dec 2023',
      location: 'Zhongshan, China',
      type: 'Interior Design',

      leftContent: [
        { type: 'text', content: 'Here, design forsakes rigid structure for the logic of a textile. The wall system employs a series of soft textures with an intimate touch and subtle sheen, joining together like delicate warp threads to lay a warm, moist foundation for the space. This texture invites touch and gently absorbs sound and light.\nInterwoven with this, the furnishings act as the agile weft. Their forms are rounded, lines soothing, with fabric and upholstery textures deeply echoing the walls. The core of the pairing lies in “relaxed tension”—not a tight fit, but a deliberate use of negative space and overlap that allows air and light to pass through freely. When the afternoon sun slants in, the soft sheen of the walls and the warm nap of the textiles interact, evoking a drowsy, lofty atmosphere of happiness, as if the entire space is engaged in a slow, deep breath.' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ],

      mainImages: [
        { src: require('@/assets/images/projects/project1-01.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-02.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-03.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-04.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-05.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-06.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-07.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-08.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-09.jpg'),imgDirection:1},
      ],

      rightImages: [
        { spacer: true, height: '0px' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ]
    }
  },
  {
    id: 'project05', // 路由ID
    // 公共属性 (列表页封面)
    coverImage: require('@/assets/images/projects/project1-00.jpg'),
    isSelected: true, // 是否精选展示

    // --- 中文数据 ---
    zh: {
      // 列表页字段
      title: '静谧居所',
      intro: '空间如一件柔软的织物，墙布是经线，家具是纬线，在松弛的编织中留出呼吸的缝隙。一切都透着被阳光晒过的温暖与蓬松。',
      type: '室内设计',
      location: '中国 上海',
      
      // 详情页 - Hero区域

      date: '2023年12月',
      location: '中国 中山',
      type: '室内设计',

      // 详情页 - 核心画廊 (左侧：文案+氛围图)
      leftContent: [
        { type: 'text', content: '在这里，设计摒弃了硬朗的结构，转而追求一种 织物的逻辑 。墙面系统选用了一系列拥有亲密触感与微妙光泽的柔性质地，它们彼此衔接，如同细腻的经线，铺就了空间温润的基底。这种质地邀请触摸，并温柔地吸纳声音与光线。\n与之交织的家具，则扮演了灵动纬线的角色。它们形态圆融、线条舒缓，其面料与填充物的质感与墙面形成深度呼应。搭配的核心在于 “松弛的张力”——并非严丝合缝，而是在精心的留白与交错中，让空气与光线得以自由穿行其间。当午后日光斜照，墙面的柔和光泽与织物的温暖绒毛共同作用，升腾起一种令人昏昏欲睡的、蓬松的幸福氛围，仿佛整个空间都在进行着缓慢而深长的呼吸。' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
      ],

      // 详情页 - 核心画廊 (中间：主要大图)
      mainImages: [
        { src: require('@/assets/images/projects/project1-01.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-02.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-03.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-04.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-05.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-06.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-07.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-08.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-09.jpg'),imgDirection:1},
      ],

      // 详情页 - 核心画廊 (右侧：产品/细节图)
      rightImages: [
        { spacer: true, height: '0px' }, // 错位占位符
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
      ]
    },

    // --- 英文数据 ---
    en: {
      title: 'Breath Between Textiles',
      intro: 'Space is like a soft textile: wallcoverings the warp, furnishings the weft. Loose weaving leaves room for breath, everything imbued with the warmth and loftiness of sun-drenched fabric.',

      date: 'Dec 2023',
      location: 'Zhongshan, China',
      type: 'Interior Design',

      leftContent: [
        { type: 'text', content: 'Here, design forsakes rigid structure for the logic of a textile. The wall system employs a series of soft textures with an intimate touch and subtle sheen, joining together like delicate warp threads to lay a warm, moist foundation for the space. This texture invites touch and gently absorbs sound and light.\nInterwoven with this, the furnishings act as the agile weft. Their forms are rounded, lines soothing, with fabric and upholstery textures deeply echoing the walls. The core of the pairing lies in “relaxed tension”—not a tight fit, but a deliberate use of negative space and overlap that allows air and light to pass through freely. When the afternoon sun slants in, the soft sheen of the walls and the warm nap of the textiles interact, evoking a drowsy, lofty atmosphere of happiness, as if the entire space is engaged in a slow, deep breath.' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ],

      mainImages: [
        { src: require('@/assets/images/projects/project1-01.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-02.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-03.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-04.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-05.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-06.jpg'),imgDirection:1},
        { src: require('@/assets/images/projects/project1-07.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-08.jpg'),imgDirection:0},
        { src: require('@/assets/images/projects/project1-09.jpg'),imgDirection:1},
      ],

      rightImages: [
        { spacer: true, height: '0px' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ]
    }
  },
  // 可以在这里复制添加更多项目...
];