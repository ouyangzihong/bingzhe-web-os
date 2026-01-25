// src/data/projects.js

// 建议将图片按项目文件夹整理，例如 src/assets/images/project1/...
// 这里演示使用 require 引入
// imgDirection 图片方向 0-横图，1-竖图

export const projectsData = [
  {
    id: 'project01', // 路由ID
    // 公共属性 (列表页封面)
    coverImage: require('@/assets/images/projects/P0101.webp'),
    isSelected: true, // 是否精选展示

    // --- 中文数据 ---
    zh: {
      // 列表页字段
      title: '织物间的呼吸',
      intro: '空间如一件柔软的织物，墙布是经线，家具是纬线，在松弛的编织中留出呼吸的缝隙。一切都透着被阳光晒过的温暖与蓬松。',
      
      // 详情页 - Hero区域
      date: '2023年12月',
      location: '中国 中山',
      type: '室内设计',

      // 详情页 - 核心画廊 (左侧：文案+氛围图)
      leftContent: [
        { type: 'text', content: '在这里，设计摒弃了硬朗的结构，转而追求一种 织物的逻辑 。墙面系统选用了一系列拥有亲密触感与微妙光泽的柔性质地，它们彼此衔接，如同细腻的经线，铺就了空间温润的基底。这种质地邀请触摸，并温柔地吸纳声音与光线。<br/><br/>与之交织的家具，则扮演了灵动纬线的角色。它们形态圆融、线条舒缓，其面料与填充物的质感与墙面形成深度呼应。搭配的核心在于 “松弛的张力”——并非严丝合缝，而是在精心的留白与交错中，让空气与光线得以自由穿行其间。当午后日光斜照，墙面的柔和光泽与织物的温暖绒毛共同作用，升腾起一种令人昏昏欲睡的、蓬松的幸福氛围，仿佛整个空间都在进行着缓慢而深长的呼吸。' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
      ],

      // 详情页 - 核心画廊 (中间：主要大图)
      mainImages: [
        { src: require('@/assets/images/projects/P0102.webp')},
        { src: require('@/assets/images/projects/P0103.webp')},
        { src: require('@/assets/images/projects/P0104.webp')},
        { src: require('@/assets/images/projects/P0105.webp')},
        { src: require('@/assets/images/projects/P0106.webp')},
        { src: require('@/assets/images/projects/P0107.webp')},
        { src: require('@/assets/images/projects/P0108.webp')},
        { src: require('@/assets/images/projects/P0109.webp')},
        { src: require('@/assets/images/projects/P0110.webp')},
        { src: require('@/assets/images/projects/P0111.webp')},
        { src: require('@/assets/images/projects/P0112.webp')},
        { src: require('@/assets/images/projects/P0113.webp')},
        { src: require('@/assets/images/projects/P0114.webp')},
        { src: require('@/assets/images/projects/P0115.webp')},
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
        { type: 'text', content: 'Here, design forsakes rigid structure for the logic of a textile. The wall system employs a series of soft textures with an intimate touch and subtle sheen, joining together like delicate warp threads to lay a warm, moist foundation for the space. This texture invites touch and gently absorbs sound and light.<br/><br/>Interwoven with this, the furnishings act as the agile weft. Their forms are rounded, lines soothing, with fabric and upholstery textures deeply echoing the walls. The core of the pairing lies in “relaxed tension”—not a tight fit, but a deliberate use of negative space and overlap that allows air and light to pass through freely. When the afternoon sun slants in, the soft sheen of the walls and the warm nap of the textiles interact, evoking a drowsy, lofty atmosphere of happiness, as if the entire space is engaged in a slow, deep breath.' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ],

      mainImages: [
        { src: require('@/assets/images/projects/P0102.webp')},
        { src: require('@/assets/images/projects/P0103.webp')},
        { src: require('@/assets/images/projects/P0104.webp')},
        { src: require('@/assets/images/projects/P0105.webp')},
        { src: require('@/assets/images/projects/P0106.webp')},
        { src: require('@/assets/images/projects/P0107.webp')},
        { src: require('@/assets/images/projects/P0108.webp')},
        { src: require('@/assets/images/projects/P0109.webp')},
        { src: require('@/assets/images/projects/P0110.webp')},
        { src: require('@/assets/images/projects/P0111.webp')},
        { src: require('@/assets/images/projects/P0112.webp')},
        { src: require('@/assets/images/projects/P0113.webp')},
        { src: require('@/assets/images/projects/P0114.webp')},
        { src: require('@/assets/images/projects/P0115.webp')},
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
    coverImage: require('@/assets/images/projects/P0201.webp'),
    isSelected: true, // 是否精选展示

    // --- 中文数据 ---
    zh: {
      // 列表页字段
      title: '漫游之居',
      intro: '空间以氛围引导感知，在松弛与秩序之间，形成可被体验的日常流动。',
      
      // 详情页 - Hero区域

      date: '2024年8月',
      location: '中国 上海',
      type: '室内设计',

      // 详情页 - 核心画廊 (左侧：文案+氛围图)
      leftContent: [
        { type: 'text', content: '空间被设想为一场温和而开放的邀请——邀请身体、视线与意识进入一种非目的性的流动状态。墙面以低饱和的色彩与细腻而克制的肌理展开，如雾般弥散，不强调边界，而是生成一片可被感知、被停留的氛围场域。<br/><br/>家具与器物并非陈列，而是如自然原野中自生的形态：不张扬，却始终在场。它们以温润的尺度、内敛的轮廓，与空间形成一种松散却高度默契的关系——既非刻意呼应，也非偶然堆叠，而是在留白中建立秩序，在克制中孕育亲密。<br/><br/>随着光影在一日之间缓慢迁徙，空间不断显露新的层次与节奏。它不试图被一次性读懂，而是在时间中展开，如同一位始终行走中的漫游者，持续生成静谧而不重复的生活风景。' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
      ],

      // 详情页 - 核心画廊 (中间：主要大图)
      mainImages: [
        { src: require('@/assets/images/projects/P0202.webp')},
        { src: require('@/assets/images/projects/P0203.webp')},
        { src: require('@/assets/images/projects/P0204.webp')},
        { src: require('@/assets/images/projects/P0205.webp')},
        { src: require('@/assets/images/projects/P0206.webp')},
        { src: require('@/assets/images/projects/P0207.webp')},
        { src: require('@/assets/images/projects/P0208.webp')},
        { src: require('@/assets/images/projects/P0209.webp')},
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
      title: 'The Wandering Home',
      intro: 'An atmosphere-led space where perception unfolds between ease and quiet order.',
      date: 'Aug 2024',
      location: 'Shanghai, China',
      type: 'Interior Design',

      leftContent: [
        { type: 'text', content:'The space is conceived as a gentle and open invitation—one that leads the body, the gaze, and the mind into a state of purposeless flow. Walls unfold in low-toned hues and restrained textures, diffusing like mist. Rather than defining limits, they form an atmospheric field—one that invites perception and pause.<br/><br/>Furniture and objects are not arranged as displays, but emerge like naturally occurring forms in an open landscape—quiet, grounded, and present. Through warm proportions and subdued silhouettes, they establish a relationship with the space that is loose yet deeply attuned: order born from negative space, intimacy cultivated through restraint.<br/><br/>As light and shadow migrate throughout the day, the space reveals shifting layers and rhythms. It resists instant comprehension, unfolding instead over time—like a wanderer in motion, continuously composing tranquil, never-repeating scenes of living.'          },
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ],

      mainImages: [
        { src: require('@/assets/images/projects/P0202.webp')},
        { src: require('@/assets/images/projects/P0203.webp')},
        { src: require('@/assets/images/projects/P0204.webp')},
        { src: require('@/assets/images/projects/P0205.webp')},
        { src: require('@/assets/images/projects/P0206.webp')},
        { src: require('@/assets/images/projects/P0207.webp')},
        { src: require('@/assets/images/projects/P0208.webp')},
        { src: require('@/assets/images/projects/P0209.webp')},
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
    coverImage: require('@/assets/images/projects/P0301.webp'),
    isSelected: false, // 是否精选展示

    // --- 中文数据 ---
    zh: {
      // 列表页字段
      title: '薄暮的收容所',
      intro: '在昼与夜交替的暧昧时分，空间呈现出最温柔的模样。墙面色调沉入宁静，家具的轮廓被光影柔化，共同收容一日将尽的思绪。',
      
      // 详情页 - Hero区域

      date: '2023年6月',
      location: '中国 广州',
      type: '室内设计',

      // 详情页 - 核心画廊 (左侧：文案+氛围图)
      leftContent: [
        { type: 'text', content: "本案捕捉一天中最具过渡性与沉思感的“薄暮时刻”作为空间美学的灵魂。墙布系统广泛运用了从暖灰、灰褐到雾霾蓝等“过渡色” ，它们在白日光线下沉静，在夜色降临时则愈发深邃，仿佛拥有随时间变化的情绪。<br/><br/>与此相配的家具，其形态多采用圆角、弧形与不对称的平衡设计，旨在消解直线的冷硬。在黄昏微弱的天光与室内渐次亮起的暖调灯光下，家具的边缘被模糊，与墙面深邃的背景融为一片连贯的、视觉上的柔软。这种搭配刻意弱化了物体的孤立存在感，而是强调整体氛围的营造。它创造出一个精神的避风港，在这里，目光无需焦点，思绪可以漫无目的地漂浮，被一种全然的、静谧的包容感所承托，完美地收容黄昏特有的、略带感性的悠闲。"        },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
      ],

      // 详情页 - 核心画廊 (中间：主要大图)
      mainImages: [
        { src: require('@/assets/images/projects/P0302.webp')},
        { src: require('@/assets/images/projects/P0303.webp')},
        { src: require('@/assets/images/projects/P0304.webp')},
        { src: require('@/assets/images/projects/P0305.webp')},
        { src: require('@/assets/images/projects/P0306.webp')},
        { src: require('@/assets/images/projects/P0307.webp')},
        { src: require('@/assets/images/projects/P0308.webp')},
        { src: require('@/assets/images/projects/P0309.webp')},
        { src: require('@/assets/images/projects/P0310.webp')},
        { src: require('@/assets/images/projects/P0311.webp')},
        { src: require('@/assets/images/projects/P0312.webp')},
        { src: require('@/assets/images/projects/P0313.webp')},
        { src: require('@/assets/images/projects/P0314.webp')},
        { src: require('@/assets/images/projects/P0315.webp')},
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
      title: 'Sanctuary at Dusk',
      intro: "In the ambiguous moment between day and night, the space reveals its gentlest form. Wall tones sink into tranquility, furniture outlines soften in the light, together sheltering the thoughts of a day's end.",

      date: 'Jun 2023',
      location: 'Guangzhou, China',
      type: 'Interior Design',

      leftContent: [
        { type: 'text', content:"This project captures the most transitional and meditative “dusk moment” of the day as the soul of its spatial aesthetic. The wallcovering system extensively employs transitional colors—from warm greys and taupe to haze blue. They appear serene in daylight and grow deeper as night falls, as if possessing emotions that change with time.<br/><br/>Furnishings paired with this feature forms that utilize rounded corners, arcs, and asymmetrical balance, aiming to dissolve the cold hardness of straight lines. Under the weak twilight and the gradually warming interior light, the edges of furniture blur, merging with the deep wall background into a cohesive visual softness. This pairing deliberately weakens the isolated presence of objects, emphasizing instead the creation of an overall atmosphere. It forges a spiritual haven where the gaze needs no focus, thoughts can drift aimlessly, and are held aloft by a sense of complete, silent embrace, perfectly sheltering the uniquely melancholic leisure of dusk."}, 
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ],

      mainImages: [
        { src: require('@/assets/images/projects/P0302.webp')},
        { src: require('@/assets/images/projects/P0303.webp')},
        { src: require('@/assets/images/projects/P0304.webp')},
        { src: require('@/assets/images/projects/P0305.webp')},
        { src: require('@/assets/images/projects/P0306.webp')},
        { src: require('@/assets/images/projects/P0307.webp')},
        { src: require('@/assets/images/projects/P0308.webp')},
        { src: require('@/assets/images/projects/P0309.webp')},
        { src: require('@/assets/images/projects/P0310.webp')},
        { src: require('@/assets/images/projects/P0311.webp')},
        { src: require('@/assets/images/projects/P0312.webp')},
        { src: require('@/assets/images/projects/P0313.webp')},
        { src: require('@/assets/images/projects/P0314.webp')},
        { src: require('@/assets/images/projects/P0315.webp')},
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
        { type: 'text', content: '在这里，设计摒弃了硬朗的结构，转而追求一种 织物的逻辑 。墙面系统选用了一系列拥有亲密触感与微妙光泽的柔性质地，它们彼此衔接，如同细腻的经线，铺就了空间温润的基底。这种质地邀请触摸，并温柔地吸纳声音与光线。<br/>与之交织的家具，则扮演了灵动纬线的角色。它们形态圆融、线条舒缓，其面料与填充物的质感与墙面形成深度呼应。搭配的核心在于 “松弛的张力”——并非严丝合缝，而是在精心的留白与交错中，让空气与光线得以自由穿行其间。当午后日光斜照，墙面的柔和光泽与织物的温暖绒毛共同作用，升腾起一种令人昏昏欲睡的、蓬松的幸福氛围，仿佛整个空间都在进行着缓慢而深长的呼吸。' },
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
        { type: 'text', content: 'Here, design forsakes rigid structure for the logic of a textile. The wall system employs a series of soft textures with an intimate touch and subtle sheen, joining together like delicate warp threads to lay a warm, moist foundation for the space. This texture invites touch and gently absorbs sound and light.<br/>Interwoven with this, the furnishings act as the agile weft. Their forms are rounded, lines soothing, with fabric and upholstery textures deeply echoing the walls. The core of the pairing lies in “relaxed tension”—not a tight fit, but a deliberate use of negative space and overlap that allows air and light to pass through freely. When the afternoon sun slants in, the soft sheen of the walls and the warm nap of the textiles interact, evoking a drowsy, lofty atmosphere of happiness, as if the entire space is engaged in a slow, deep breath.' },
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
    coverImage: require('@/assets/images/projects/P0501.webp'),
    isSelected: false, // 是否精选展示

    // --- 中文数据 ---
    zh: {
      // 列表页字段
      title: '密度的诗学',
      intro: '空间懂得呼吸的韵律。通过墙面色块的浓淡与家具布局的疏密，在紧凑与留白之间，谱写出一首关于呼吸与停顿的视觉之诗。',
      // 详情页 - Hero区域

      date: '2023年3月',
      location: '中国 中山',
      type: '室内设计',

      // 详情页 - 核心画廊 (左侧：文案+氛围图)
      leftContent: [
        { type: 'text', content: '设计在此探讨空间的“密度”与情感的关系。墙面并非均质涂布，而是通过深浅不一、质感各异的色块与肌理进行非对称分割，如同诗歌中的轻重音节，有的区域浓郁如低吟，有的区域疏淡如叹息。这构成了空间呼吸的底层节奏。<br/><br/>家具与物品的布局，则是对这种节奏的具象回应与强化。它们时而紧密簇拥，形成温暖亲密的“语义群”；时而孤悬于留白之中，成为一个强有力的“休止符”。搭配的核心在于精妙的视觉重量平衡：一面深色质感墙面，可能仅需一盏纤细的灯与一把单椅；而一片留白墙面，则可承载一组丰富的书架与藏画。最终，行走其中能感受到一种被精心编排的韵律感，视线与心绪随之起伏、聚散，获得充满节奏美感的沉浸体验。' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
      ],

      // 详情页 - 核心画廊 (中间：主要大图)
      mainImages: [
        { src: require('@/assets/images/projects/P0502.webp')},
        { src: require('@/assets/images/projects/P0503.webp')},
        { src: require('@/assets/images/projects/P0504.webp')},
        { src: require('@/assets/images/projects/P0505.webp')},
        { src: require('@/assets/images/projects/P0506.webp')},
        { src: require('@/assets/images/projects/P0507.webp')},
        { src: require('@/assets/images/projects/P0508.webp')},
        { src: require('@/assets/images/projects/P0509.webp')},
        { src: require('@/assets/images/projects/P0510.webp')},
        { src: require('@/assets/images/projects/P0511.webp')},
        { src: require('@/assets/images/projects/P0512.webp')},
        { src: require('@/assets/images/projects/P0513.webp')},
        { src: require('@/assets/images/projects/P0514.webp')},
        { src: require('@/assets/images/projects/P0515.webp')},
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
      title: 'The Poetics of Density',
      intro: 'The space understands the rhythm of breath. Through the depth of wall color and the spacing of furnishings, it composes a visual poem of inhalation and pause between density and void.',

      date: 'Mar 2023',
      location: 'Zhongshan, China',
      type: 'Interior Design',

      leftContent: [
        { type: 'text', content: "The design here explores the relationship between spatial “density” and emotion. Walls are not uniformly covered but asymmetrically divided by blocks of varying depth and texture, like stressed and unstressed syllables in a poem—some areas rich as a murmur, others sparse as a sigh. This forms the underlying rhythm of the space’s breath.<br/><br/>The arrangement of furniture and objects is a concrete response to and intensification of this rhythm. They sometimes cluster closely, forming warm, intimate “semantic groups”; at other times, they sit alone in negative space, becoming a powerful “rest.” The core of the pairing lies in the exquisite balance of visual weight: a deep-toned, textured wall may need only a slender lamp and a single chair, while a blank wall can support a rich bookshelf and paintings. Ultimately, moving through it offers a sense of carefully orchestrated rhythm, where the gaze and mood rise and fall, gather and disperse, resulting in an immersive experience full of rhythmic beauty."},
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ],

      mainImages: [
        { src: require('@/assets/images/projects/P0502.webp')},
        { src: require('@/assets/images/projects/P0503.webp')},
        { src: require('@/assets/images/projects/P0504.webp')},
        { src: require('@/assets/images/projects/P0505.webp')},
        { src: require('@/assets/images/projects/P0506.webp')},
        { src: require('@/assets/images/projects/P0507.webp')},
        { src: require('@/assets/images/projects/P0508.webp')},
        { src: require('@/assets/images/projects/P0509.webp')},
        { src: require('@/assets/images/projects/P0510.webp')},
        { src: require('@/assets/images/projects/P0511.webp')},
        { src: require('@/assets/images/projects/P0512.webp')},
        { src: require('@/assets/images/projects/P0513.webp')},
        { src: require('@/assets/images/projects/P0514.webp')},
        { src: require('@/assets/images/projects/P0515.webp')},
      ],

      rightImages: [
        { spacer: true, height: '0px' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ]
    }
  },
  {
    id: 'project06', // 路由ID
    // 公共属性 (列表页封面)
    coverImage: require('@/assets/images/projects/P0601.webp'),
    isSelected: true, // 是否精选展示

    // --- 中文数据 ---
    zh: {
      // 列表页字段
      title: '柔焦记忆',
      intro: '一切都像是透过一层温柔的滤镜所见。墙布的质感柔化了光的边缘，家具的轮廓也变得朦胧。空间不再尖锐，充满了回忆般的暖调与美好。',
      // 详情页 - Hero区域

      date: '2022年10月',
      location: '中国 东莞',
      type: '室内设计',

      // 详情页 - 核心画廊 (左侧：文案+氛围图)
      leftContent: [
        { type: 'text', content: '本案追求一种 “柔焦”的美学效果，让现实稍微退后，披上一层诗意与怀想的薄纱。墙布系统大面积采用了具有微妙漫反射特性的材质，如哑光丝绒、细腻的灰泥质感或带有绒毛触感的织物。它们能有效散射光线，使照射其上的光晕开，形成柔和的光影过渡。<br/><br/>为了融入这层“滤镜”，家具的选型避开了锋利直线与高反光表面，多采用圆弧形体、蒙德里安式色块拼接或包裹性强的软体设计。其面料也多选用哑光或带有蓬松感的织品。当阳光漫入，墙面、家具与光线共同作用，模糊了彼此清晰的边界，色彩相互渗透，轮廓彼此交融。整个空间仿佛一张精心处理过的宝丽来照片，或是一段被美好化的记忆现场，呈现出一种失焦的、令人安心且无限温柔的氛围，让日常沉淀为值得珍藏的瞬间。' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
      ],

      // 详情页 - 核心画廊 (中间：主要大图)
      mainImages: [
        { src: require('@/assets/images/projects/P0602.webp')},
        { src: require('@/assets/images/projects/P0603.webp')},
        { src: require('@/assets/images/projects/P0604.webp')},
        { src: require('@/assets/images/projects/P0605.webp')},
        { src: require('@/assets/images/projects/P0606.webp')},
        { src: require('@/assets/images/projects/P0607.webp')},
        { src: require('@/assets/images/projects/P0608.webp')},
        { src: require('@/assets/images/projects/P0609.webp')},
        { src: require('@/assets/images/projects/P0610.webp')},
        { src: require('@/assets/images/projects/P0611.webp')},
        { src: require('@/assets/images/projects/P0612.webp')},
        { src: require('@/assets/images/projects/P0613.webp')},
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
      title: 'Soft-Focus Memory',
      intro: 'Everything appears as if seen through a gentle filter. The texture of the walls softens the edges of light, and the outlines of furniture turn hazy. The space is no longer sharp, filled with the warm tones and beauty of memory.',

      date: 'Oct 2022',
      location: 'Dongguan, China',
      type: 'Interior Design',

      leftContent: [
        { type: 'text', content: 'This project pursues an aesthetic of “soft focus,” letting reality recede slightly, draped in a veil of poetry and reverie. The wall system extensively employs materials with subtle light-diffusing properties, such as matte velvet, fine plaster-like textures, or fabrics with a napped touch. They effectively scatter light, causing illumination to bloom softly upon them, creating gentle transitions of shadow and light.<br/><br/>To blend into this “filter,” furniture selections avoid sharp lines and highly reflective surfaces, favoring rounded forms, Mondrian-esque color block拼接, or enveloping soft designs. Their upholstery also often uses matte or lofted textiles. As sunlight filters in, walls, furniture, and light interact, blurring each other’s clear boundaries, with colors permeating and outlines merging. The entire space resembles a carefully processed Polaroid or a beautified memory scene, presenting an out-of-focus, reassuring, and infinitely tender atmosphere that allows the everyday to settle into moments worth treasuring.'},
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ],

      mainImages: [
        { src: require('@/assets/images/projects/P0602.webp')},
        { src: require('@/assets/images/projects/P0603.webp')},
        { src: require('@/assets/images/projects/P0604.webp')},
        { src: require('@/assets/images/projects/P0605.webp')},
        { src: require('@/assets/images/projects/P0606.webp')},
        { src: require('@/assets/images/projects/P0607.webp')},
        { src: require('@/assets/images/projects/P0608.webp')},
        { src: require('@/assets/images/projects/P0609.webp')},
        { src: require('@/assets/images/projects/P0610.webp')},
        { src: require('@/assets/images/projects/P0611.webp')},
        { src: require('@/assets/images/projects/P0612.webp')},
        { src: require('@/assets/images/projects/P0613.webp')}
      ],

      rightImages: [
        { spacer: true, height: '0px' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ]
    }
  },
  {
    id: 'project07', // 路由ID
    // 公共属性 (列表页封面)
    coverImage: require('@/assets/images/projects/P0701.webp'),
    isSelected: false, // 是否精选展示

    // --- 中文数据 ---
    zh: {
      // 列表页字段
      title: '悬停的暖意',
      intro: '温暖不是铺天盖地的，而是如光斑般在空间中悬停、游移。墙面的色彩与肌理捕捉它，家具的形态承载它，共同描绘出温度在地图上的诗意分布。',
      // 详情页 - Hero区域

      date: '2023年1月',
      location: '中国 上海',
      type: '室内设计',

      // 详情页 - 核心画廊 (左侧：文案+氛围图)
      leftContent: [
        { type: 'text', content: '我们探索温暖在空间中的非物质性呈现。设计通过墙布冷暖色调的微妙穿插与并置，以及局部采用的、能吸附并缓慢释放光线热感的深色或粗糙肌理，在视觉与心理上构建出温度的差异感。某些墙面像被阳光晒暖的岩石，某些则如树荫下的清凉。<br/><br/>家具如同感知这些温度变化的 “感温元件” ，并与之互动。在“暖区”，可能会出现包裹感强的单人沙发、覆盖毛绒织物的脚踏；在“凉区”，则可能是通透的玻璃边几、金属框架椅或清凉感石材台面。它们并非随机摆放，而是像根据一张无形的“等温线”地图来布置。这种搭配营造出一种生动的、具有引导性的空间体验，人的身体会不自觉地被吸引到那些视觉上显得最“温暖”舒适的角落，从而感受到一种被精心呵护的、动态的宜居感。' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
      ],

      // 详情页 - 核心画廊 (中间：主要大图)
      mainImages: [
        { src: require('@/assets/images/projects/P0702.webp')},
        { src: require('@/assets/images/projects/P0703.webp')},
        { src: require('@/assets/images/projects/P0704.webp')},
        { src: require('@/assets/images/projects/P0705.webp')},
        { src: require('@/assets/images/projects/P0706.webp')},
        { src: require('@/assets/images/projects/P0707.webp')},
        { src: require('@/assets/images/projects/P0708.webp')},
        { src: require('@/assets/images/projects/P0709.webp')},
        { src: require('@/assets/images/projects/P0710.webp')},
        { src: require('@/assets/images/projects/P0711.webp')},
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
      title: 'Suspended Warmth',
      intro: 'Warmth is not overwhelming but hovers and drifts in space like pools of light. Wall colors and textures capture it; furniture forms hold it, together mapping the poetic distribution of temperature.',
      date: 'Jan 2023',
      location: 'Shanghai, China',
      type: 'Interior Design',

      leftContent: [
        { type: 'text', content: 'We explore the immaterial manifestation of warmth within space. The design subtly interweaves and juxtaposes warm and cool tones in wall coverings, while selectively incorporating dark or coarsely textured surfaces that absorb and gradually release the thermal sensation of light—thereby constructing a perceptible sense of temperature difference both visually and psychologically. Certain walls feel like sun-warmed rocks, while others evoke the coolness beneath tree shade.<br/><br/>Furniture acts as “thermal sensors,” perceiving these temperature shifts and interacting with them. In “warm zones,” one might find enveloping armchairs and footstools upholstered in plush fabrics; in “cool zones,” transparent glass side tables, metal-framed chairs, or countertops made of refreshingly cool stone appear instead. These furnishings are not placed randomly but arranged as if guided by an invisible “isotherm map.” This intentional pairing creates a vivid, directional spatial experience—drawing occupants instinctively toward corners that visually radiate the most “warmth” and comfort, thereby evoking a dynamic, thoughtfully curated sense of livability that feels both nurturing and alive.'},
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ],

      mainImages: [
        { src: require('@/assets/images/projects/P0702.webp')},
        { src: require('@/assets/images/projects/P0703.webp')},
        { src: require('@/assets/images/projects/P0704.webp')},
        { src: require('@/assets/images/projects/P0705.webp')},
        { src: require('@/assets/images/projects/P0706.webp')},
        { src: require('@/assets/images/projects/P0707.webp')},
        { src: require('@/assets/images/projects/P0708.webp')},
        { src: require('@/assets/images/projects/P0709.webp')},
        { src: require('@/assets/images/projects/P0710.webp')},
        { src: require('@/assets/images/projects/P0711.webp')},
      ],

      rightImages: [
        { spacer: true, height: '0px' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ]
    }
  },
  {
    id: 'project08', // 路由ID
    // 公共属性 (列表页封面)
    coverImage: require('@/assets/images/projects/P0801.webp'),
    isSelected: true, // 是否精选展示

    // --- 中文数据 ---
    zh: {
      // 列表页字段
      title: '低语的穹顶',
      intro: '家是一个提供庇护的穹顶。墙布以其优异的声学质感与视觉包裹感，轻柔地吸收喧嚣；而家具则在其下低语，诉说着宁静而亲密的日常。',
      // 详情页 - Hero区域

      date: '2023年3月',
      location: '中国 成都',
      type: '室内设计',

      // 详情页 - 核心画廊 (左侧：文案+氛围图)
      leftContent: [
        { type: 'text', content: '空间被塑造为一个感官的庇护所，尤其注重对声音与视觉纷扰的过滤。墙布系统在整个方案中扮演了 “静音外壳” 的角色，大量使用具有吸音特性的软质材料、立体肌理或软包造型。它们不仅在物理上软化声波，其柔和的视觉外观也从心理上传递出安宁的信号。<br/><br/>在这个被安静包裹的“穹顶”之下，家具的陈列呈现出一种内聚的、向心的亲密感。它们多为低矮、圆润的体量，鼓励人们坐下、倚靠、聚集。其材质也多为哑光、温润、触感舒适的，避免产生不必要的视觉或听觉噪音。这里的搭配哲学是 “背景的绝对宁静”与“前景的温和活力” 之结合。墙面吸收了一切冗余，只为凸显家具与人的活动所构成的温馨场景；而家具的温和存在，又反过来让这片寂静充满人性的温度与生机，形成一个完美的、令人只想深深沉入的静谧闭环。' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
      ],

      // 详情页 - 核心画廊 (中间：主要大图)
      mainImages: [
        { src: require('@/assets/images/projects/P0802.webp')},
        { src: require('@/assets/images/projects/P0803.webp')},
        { src: require('@/assets/images/projects/P0804.webp')},
        { src: require('@/assets/images/projects/P0805.webp')},
        { src: require('@/assets/images/projects/P0806.webp')},
        { src: require('@/assets/images/projects/P0807.webp')},
        { src: require('@/assets/images/projects/P0808.webp')},
        { src: require('@/assets/images/projects/P0809.webp')},
        { src: require('@/assets/images/projects/P0810.webp')},
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
      title: 'The Whispering Dome',
      intro: 'Home is a sheltering dome. Wallcoverings, with their acoustic texture and visual embrace, gently absorb noise; beneath them, furniture whispers, narrating quiet, intimate daily life.',
      date: 'Mar 2023',
      location: 'Chengdu, China',
      type: 'Interior Design',

      leftContent: [
        { type: 'text', content: 'The space is sculpted as a sensory sanctuary, with a meticulous focus on filtering out acoustic and visual distractions. The wall covering system acts as a "silent shell" for the entire scheme, utilizing an abundance of sound-absorbing soft materials, three-dimensional textures, and upholstered panels. These elements do more than just physically dampen sound waves; their soft aesthetics also signal a psychological sense of tranquility.<br/><br/>Beneath this "dome of silence," the furniture arrangement evokes a cohesive, centripetal intimacy. Most pieces feature low-slung, rounded volumes that invite one to sit, lean, and gather. Materials are chosen for their matte finishes and tactile warmth, carefully avoiding any unnecessary visual or auditory "noise." The curation philosophy here is a marriage of "absolute background serenity" and "gentle foreground vitality." The walls absorb all redundancy to spotlight the warm scenes of human interaction, while the gentle presence of the furniture breathes life and humanity back into the silence. It is a perfect, meditative loop that beckons one to sink in and stay.'},
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ],

      mainImages: [
        { src: require('@/assets/images/projects/P0802.webp')},
        { src: require('@/assets/images/projects/P0803.webp')},
        { src: require('@/assets/images/projects/P0804.webp')},
        { src: require('@/assets/images/projects/P0805.webp')},
        { src: require('@/assets/images/projects/P0806.webp')},
        { src: require('@/assets/images/projects/P0807.webp')},
        { src: require('@/assets/images/projects/P0808.webp')},
        { src: require('@/assets/images/projects/P0809.webp')},
        { src: require('@/assets/images/projects/P0810.webp')},
      ],

      rightImages: [
        { spacer: true, height: '0px' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ]
    }
  },
  {
    id: 'project09', // 路由ID
    // 公共属性 (列表页封面)
    coverImage: require('@/assets/images/projects/P0901.webp'),
    isSelected: false, // 是否精选展示

    // --- 中文数据 ---
    zh: {
      // 列表页字段
      title: '褪色的预谋',
      intro: '这里的美，从一开始就预见了时光的参与。墙布选用那些不易察觉岁月痕迹的色调与肌理，家具也仿佛做好了优雅老去的准备，共同预约了一份从容的、充满故事感的未来。',
      
      // 详情页 - Hero区域
      date: '2023年11月',
      location: '中国 中山',
      type: '室内设计',

      // 详情页 - 核心画廊 (左侧：文案+氛围图)
      leftContent: [
        { type: 'text', content: '我们拥抱一种 “未完成”与“可持续”的时间美学。墙布的选择刻意避开了鲜亮易逝的流行色，转而投向一系列复杂的中性色、大地色与做旧感色调。它们的魅力不在于第一眼的惊艳，而在于其耐看性、随着光照变化的丰富性，以及对抗时间流逝的从容。<br/><br/>与之相匹配的家具，同样遵循 “长效设计”原则。它们拥有经典且经过时间考验的比例，材质多为实木、真皮、天然石材等会随着使用产生合理“包浆”与光泽变化的。搭配的智慧在于，从一开始就允许并欢迎微小痕迹的加入。墙布的基底如同一种智慧的预见，它不惧怕变色或黯淡，反而将其视为自身故事的一部分；家具则在这样的背景下，更显扎实与沉静。这种组合放弃了追求“永恒如新”的执念，转而追求一种 “优雅地老去”的深度魅力，让空间与居住者共同成长，在时间中沉淀出独一无二、无法复制的生命质感。' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
      ],

      // 详情页 - 核心画廊 (中间：主要大图)
      mainImages: [
        { src: require('@/assets/images/projects/P0902.webp')},
        { src: require('@/assets/images/projects/P0903.webp')},
        { src: require('@/assets/images/projects/P0904.webp')},
        { src: require('@/assets/images/projects/P0905.webp')},
        { src: require('@/assets/images/projects/P0906.webp')},
        { src: require('@/assets/images/projects/P0907.webp')},
        { src: require('@/assets/images/projects/P0908.webp')},
        { src: require('@/assets/images/projects/P0909.webp')},
        { src: require('@/assets/images/projects/P0910.webp')},
        { src: require('@/assets/images/projects/P0911.webp')},
        { src: require('@/assets/images/projects/P0912.webp')},
        { src: require('@/assets/images/projects/P0913.webp')},
        { src: require('@/assets/images/projects/P0914.webp')},
        { src: require('@/assets/images/projects/P0915.webp')},
        { src: require('@/assets/images/projects/P0916.webp')},
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
      title: 'Faded by Design',
      intro: 'The beauty here is designed with the foresight of time’s embrace. With wall coverings in subtle tones and textures that gracefully mask the passage of years, and furniture poised to age with elegance, together they promise a future of serenity and stories yet to be told.',
      date: 'Nov 2023',
      location: 'Zhongshan, China',
      type: 'Interior Design',

      leftContent: [
        { type: 'text', content: 'We embrace a temporal aesthetic defined by the "unfinished" and the "sustainable." The selection of wall coverings deliberately eschews bright, ephemeral trends, favoring instead a spectrum of nuanced neutrals, earth tones, and weathered hues. Their allure lies not in immediate visual impact, but in their enduring appeal, the richness revealed through shifting light, and a composed resilience against the passage of time.<br/><br/>Complementing this, the furniture adheres to the principle of "Long-lasting Design." Featuring classic, time-tested proportions, the pieces are crafted from solid wood, genuine leather, and natural stone—materials that develop a rich patina and luster through use. The wisdom of this curation lies in welcoming subtle traces of wear from the very beginning. The wall coverings act as a wise foundation; fearing neither discoloration nor fading, they accept these changes as part of their narrative, while the furniture appears even more grounded and serene against this backdrop. This combination abandons the obsession with "perpetual newness" in favor of the profound beauty of "aging gracefully." It allows the space to grow alongside its inhabitants, distilling a unique, irreplicable texture of life over time.'},
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ],

      mainImages: [
        { src: require('@/assets/images/projects/P0902.webp')},
        { src: require('@/assets/images/projects/P0903.webp')},
        { src: require('@/assets/images/projects/P0904.webp')},
        { src: require('@/assets/images/projects/P0905.webp')},
        { src: require('@/assets/images/projects/P0906.webp')},
        { src: require('@/assets/images/projects/P0907.webp')},
        { src: require('@/assets/images/projects/P0908.webp')},
        { src: require('@/assets/images/projects/P0909.webp')},
        { src: require('@/assets/images/projects/P0910.webp')},
        { src: require('@/assets/images/projects/P0911.webp')},
        { src: require('@/assets/images/projects/P0912.webp')},
        { src: require('@/assets/images/projects/P0913.webp')},
        { src: require('@/assets/images/projects/P0914.webp')},
        { src: require('@/assets/images/projects/P0915.webp')},
        { src: require('@/assets/images/projects/P0916.webp')},
      ],

      rightImages: [
        { spacer: true, height: '0px' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ]
    }
  },
  {
    id: 'project10', // 路由ID
    // 公共属性 (列表页封面)
    coverImage: require('@/assets/images/projects/P1001.webp'),
    isSelected: false, // 是否精选展示

    // --- 中文数据 ---
    zh: {
      // 列表页字段
      title: '隐形的秩序',
      intro: '在看似随性的松弛之下，潜藏着一套严谨的、令人心安的秩序。它由墙面的微妙分割与家具的精准对位共同定义，无形地引导着空间的呼吸与流动。',
      
      // 详情页 - Hero区域
      date: '2023年9月',
      location: '中国 北京',
      type: '室内设计',

      // 详情页 - 核心画廊 (左侧：文案+氛围图)
      leftContent: [
        { type: 'text', content: '真正的松弛，源于被完美掌控的秩序。本案的美学核心在于构建一种 “隐形的网格” 。墙布系统通过色块、材质或肌理的微妙转换来实现非对称的、富有韵律的分割，这些分割线在空间中建立起一套看不见的坐标。家具的布局，则严格而灵活地呼应着这套坐标——一组沙发与一面墙形成黄金分割般的对位，一盏吊灯精准悬停于两个材质交界线的交汇点上。<br/><br/>这种搭配的高明之处在于，它从不张扬自身的规则。居住者只会感受到一种深层的和谐、流畅与安心，却说不出缘由。墙布是秩序的“书写者”，以最温柔的方式划定疆域；家具则是秩序的“履行者”，在其间优雅落位。两者共同创造出一个既充满自由感，又具有强大精神稳定性的空间，仿佛一切本该在此，也必将在此安然停驻。' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
      ],

      // 详情页 - 核心画廊 (中间：主要大图)
      mainImages: [
        { src: require('@/assets/images/projects/P1002.webp')},
        { src: require('@/assets/images/projects/P1003.webp')},
        { src: require('@/assets/images/projects/P1004.webp')},
        { src: require('@/assets/images/projects/P1005.webp')},
        { src: require('@/assets/images/projects/P1006.webp')},
        { src: require('@/assets/images/projects/P1007.webp')},
        { src: require('@/assets/images/projects/P1008.webp')},
        { src: require('@/assets/images/projects/P1009.webp')},
        { src: require('@/assets/images/projects/P1010.webp')},
        { src: require('@/assets/images/projects/P1011.webp')},
        { src: require('@/assets/images/projects/P1012.webp')},
        { src: require('@/assets/images/projects/P1013.webp')},
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
      title: 'The Invisible Order',
      intro: 'Beneath an appearance of casual ease lies a rigorous, reassuring order. Defined by the subtle divisions of walls and the precise alignment of furniture, it invisibly guides the space’s breath and flow.',
      date: 'Sep 2023',
      location: 'Beijing, China',
      type: 'Interior Design',

      leftContent: [
        { type: 'text', content: 'True relaxation stems from perfectly mastered order. The aesthetic core of this project lies in constructing an “invisible grid.” The wall system achieves asymmetrical, rhythmic divisions through subtle shifts in color blocks, materials, or textures, establishing a set of unseen coordinates in space. Furniture布局 (layout) strictly yet flexibly responds to these coordinates—a sofa group forms a golden-ratio alignment with a wall, a pendant light hangs precisely at the intersection of two material boundaries.<br/><br/>The sophistication of this pairing is that it never flaunts its own rules. Occupants only feel a deep harmony, fluidity, and reassurance without knowing why. The wallcoverings are the “scribe” of order, delineating territory in the gentlest way; furniture is the “executor,” elegantly taking its place within it. Together, they create a space that is both full of freedom and possesses great mental stability, as if everything belongs here and is destined to rest here peacefully.'},
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ],

      mainImages: [
        { src: require('@/assets/images/projects/P1002.webp')},
        { src: require('@/assets/images/projects/P1003.webp')},
        { src: require('@/assets/images/projects/P1004.webp')},
        { src: require('@/assets/images/projects/P1005.webp')},
        { src: require('@/assets/images/projects/P1006.webp')},
        { src: require('@/assets/images/projects/P1007.webp')},
        { src: require('@/assets/images/projects/P1008.webp')},
        { src: require('@/assets/images/projects/P1009.webp')},
        { src: require('@/assets/images/projects/P1010.webp')},
        { src: require('@/assets/images/projects/P1011.webp')},
        { src: require('@/assets/images/projects/P1012.webp')},
        { src: require('@/assets/images/projects/P1013.webp')},
      ],

      rightImages: [
        { spacer: true, height: '0px' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ]
    }
  },
  {
    id: 'project11', // 路由ID
    // 公共属性 (列表页封面)
    coverImage: require('@/assets/images/projects/P1101.webp'),
    isSelected: true, // 是否精选展示

    // --- 中文数据 ---
    zh: {
      // 列表页字段
      title: '缓慢的漩涡',
      intro: '空间中心仿佛存在着一个温和的引力漩涡。墙面的色彩与肌理由外向内逐渐加深、变得浓郁，家具的布局也呈现出一种向心的、柔软的聚合感，将人 gently地拉入宁静的核心。',
      
      // 详情页 - Hero区域
      date: '2023年2月',
      location: '中国 广州',
      type: '室内设计',

      // 详情页 - 核心画廊 (左侧：文案+氛围图)
      leftContent: [
        { type: 'text', content: '家，应该是一个让人自然沉静、向内探索的场所。我们通过视觉与布局营造一种 “柔软的向心力” 。墙布系统在色彩与质感上进行了巧妙的梯度设计：从入口的浅淡、疏朗，逐渐过渡到空间核心区域的深邃、温暖与更具触感。这种变化不易察觉，却如地形般引导着情绪下沉。<br/><br/>家具的陈列完美呼应了这一引力场。它们避免僵硬的直线排列，多以弧形、成组的方式，环绕着空间的虚拟中心点进行布置。一张大地毯、一盏较低的吊灯，常常成为这个“漩涡”的视觉锚点。这种搭配策略创造了一种被包裹的安全感与亲密的聚合感。人们会不自觉地被吸引到空间中央或某个被温柔定义的角落，墙面营造的氛围如同漩涡的水流，而家具则是水中安稳的礁石，共同邀请人坐下、停留、沉浸于远离纷扰的深度静谧之中。' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
      ],

      // 详情页 - 核心画廊 (中间：主要大图)
      mainImages: [
        { src: require('@/assets/images/projects/P1102.webp')},
        { src: require('@/assets/images/projects/P1103.webp')},
        { src: require('@/assets/images/projects/P1104.webp')},
        { src: require('@/assets/images/projects/P1105.webp')},
        { src: require('@/assets/images/projects/P1106.webp')},
        { src: require('@/assets/images/projects/P1107.webp')},
        { src: require('@/assets/images/projects/P1108.webp')},
        { src: require('@/assets/images/projects/P1109.webp')},
        { src: require('@/assets/images/projects/P1110.webp')},
        { src: require('@/assets/images/projects/P1111.webp')},
        { src: require('@/assets/images/projects/P1112.webp')},
        { src: require('@/assets/images/projects/P1113.webp')},
        { src: require('@/assets/images/projects/P1114.webp')},
        { src: require('@/assets/images/projects/P1115.webp')},
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
      title: 'The Slow Vortex',
      intro: 'At the heart of the space lies a gentle gravitational vortex. From the periphery to the center, the colors and textures of the walls gradually deepen and intensify, while the furniture arrangement creates a centripetal, soft sense of cohesion—gently drawing one into a core of profound tranquility.',
      date: 'Feb 2023',
      location: 'Guangzhou, China',
      type: 'Interior Design',

      leftContent: [
        { type: 'text', content: 'Home should be a place that naturally quiets and turns one inward. We create a “soft centripetal force” through vision and layout. The wall system employs a clever gradient in color and texture: transitioning from the light, open tones at the entrance to the deep, warm, more tactile qualities in the core area. This change is subtle yet guides emotions downward like topography.<br/><br/>Furniture arrangement perfectly responds to this gravitational field. Avoiding rigid linear rows, pieces are often placed in arcs or groups, circling a virtual central point of the space. A large rug, a low-hanging pendant light often acts as the visual anchor of this “vortex.” This pairing strategy creates a sense of enveloping security and intimate gathering. People are unconsciously drawn to the center of the space or a gently defined corner. The atmosphere crafted by the walls is like the water of a vortex, and the furniture are the stable rocks within, together inviting one to sit, stay, and immerse in deep tranquility away from the noise.'},
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ],

      mainImages: [
        { src: require('@/assets/images/projects/P1102.webp')},
        { src: require('@/assets/images/projects/P1103.webp')},
        { src: require('@/assets/images/projects/P1104.webp')},
        { src: require('@/assets/images/projects/P1105.webp')},
        { src: require('@/assets/images/projects/P1106.webp')},
        { src: require('@/assets/images/projects/P1107.webp')},
        { src: require('@/assets/images/projects/P1108.webp')},
        { src: require('@/assets/images/projects/P1109.webp')},
        { src: require('@/assets/images/projects/P1110.webp')},
        { src: require('@/assets/images/projects/P1111.webp')},
        { src: require('@/assets/images/projects/P1112.webp')},
        { src: require('@/assets/images/projects/P1113.webp')},
        { src: require('@/assets/images/projects/P1114.webp')},
        { src: require('@/assets/images/projects/P1115.webp')},
      ],

      rightImages: [
        { spacer: true, height: '0px' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ]
    }
  },
  {
    id: 'project12', // 路由ID
    // 公共属性 (列表页封面)
    coverImage: require('@/assets/images/projects/P1201.webp'),
    isSelected: true, // 是否精选展示

    // --- 中文数据 ---
    zh: {
      // 列表页字段
      title: '折叠的清晨',
      intro: '空间收集了清晨最初的光线，将其温柔折叠进墙面的皱褶与织物的纹理里。一切都澄澈、新鲜，带着未被碰触的静谧。',
      
      // 详情页 - Hero区域
      date: '2024年7月',
      location: '中国 中山',
      type: '室内设计',

      // 详情页 - 核心画廊 (左侧：文案+氛围图)
      leftContent: [
        { type: 'text', content: '本案试图捕捉并凝固一天中最具希望感的时刻——清晨的初始状态。墙布系统整体呈现出一种低饱和的、近乎透明的色彩倾向，如同被晨光稀释过的空气。其表面处理刻意追求一种细腻的、不易察觉的纵向或水波纹肌理，模仿光线穿过百叶或平静水面时的形态，让静态的墙面产生了光的流动感。<br/><br/>与此相配的家具，仿佛也刚从静谧中苏醒。它们的轮廓清晰而柔和，材质表现出一种干净的哑光或温润的质感，避免任何厚重或浑浊的视觉感受。搭配的巧思在于营造 “光的容器” 效果：墙面负责捕捉和漫射大面积的环境光，而家具则在其间形成精巧的“阴影”与“实体”，在澄澈的背景上勾勒出宁静的剪影。整个空间没有强烈的情绪表达，只提供一种空旷的、充满潜能的安静，如同一天中第一张白纸，等待着生活在其上从容书写。' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
      ],

      // 详情页 - 核心画廊 (中间：主要大图)
      mainImages: [
        { src: require('@/assets/images/projects/P1202.webp')},
        { src: require('@/assets/images/projects/P1203.webp')},
        { src: require('@/assets/images/projects/P1204.webp')},
        { src: require('@/assets/images/projects/P1205.webp')},
        { src: require('@/assets/images/projects/P1206.webp')},
        { src: require('@/assets/images/projects/P1207.webp')},
        { src: require('@/assets/images/projects/P1208.webp')},
        { src: require('@/assets/images/projects/P1209.webp')},
        { src: require('@/assets/images/projects/P1210.webp')},
        { src: require('@/assets/images/projects/P1211.webp')},
        { src: require('@/assets/images/projects/P1212.webp')},
        { src: require('@/assets/images/projects/P1213.webp')},
        { src: require('@/assets/images/projects/P1214.webp')},
        { src: require('@/assets/images/projects/P1215.webp')},
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
      title: 'A Folded Morning',
      intro: 'The space gathers the first light of morning, folding it gently into the creases of walls and the weave of textiles. Everything is clear, fresh, and holds an untouched stillness.',
      date: 'Jul 2024',
      location: 'Zhongshan, China',
      type: 'Interior Design',

      leftContent: [
        { type: 'text', content: 'The project seeks to capture and solidify the most hopeful moment of the day—the primal state of early morning. The wall covering system features a low-saturation, near-transparent palette, reminiscent of air diluted by the first rays of dawn. Its surface treatment intentionally pursues delicate, subtle vertical or ripple textures, mimicking light as it filters through louvers or glides across calm water, imbuing the static walls with a sense of luminous fluidity.<br/><br/>The accompanying furniture appears as if just awakening from silence. With silhouettes both crisp and soft, the materials exhibit clean matte or warm, tactile finishes, eschewing any visual heaviness or opacity. The curation focuses on creating the effect of a "Vessel for Light": while the walls capture and diffuse ambient light across broad surfaces, the furniture forms delicate "shadows" and "solids," sketching serene silhouettes against a crystal-clear backdrop. Free from intense emotional expression, the space offers only a vast, potential-filled quiet—like the day’s first blank page, waiting for life to be composed upon it with grace.'},
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ],

      mainImages: [
        { src: require('@/assets/images/projects/P1202.webp')},
        { src: require('@/assets/images/projects/P1203.webp')},
        { src: require('@/assets/images/projects/P1204.webp')},
        { src: require('@/assets/images/projects/P1205.webp')},
        { src: require('@/assets/images/projects/P1206.webp')},
        { src: require('@/assets/images/projects/P1207.webp')},
        { src: require('@/assets/images/projects/P1208.webp')},
        { src: require('@/assets/images/projects/P1209.webp')},
        { src: require('@/assets/images/projects/P1210.webp')},
        { src: require('@/assets/images/projects/P1211.webp')},
        { src: require('@/assets/images/projects/P1212.webp')},
        { src: require('@/assets/images/projects/P1213.webp')},
        { src: require('@/assets/images/projects/P1214.webp')},
        { src: require('@/assets/images/projects/P1215.webp')},
      ],

      rightImages: [
        { spacer: true, height: '0px' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ]
    }
  },
  {
    id: 'project13', // 路由ID
    // 公共属性 (列表页封面)
    coverImage: require('@/assets/images/projects/P1301.webp'),
    isSelected: true, // 是否精选展示

    // --- 中文数据 ---
    zh: {
      // 列表页字段
      title: '触知的地形',
      intro: '空间像一幅可以触摸的地形图。墙面起伏的肌理是山丘与河谷，家具则如散布其间的定居点，邀请手指与身体去阅读、去探索。',
      
      // 详情页 - Hero区域
      date: '2023年11月',
      location: '中国 北京',
      type: '室内设计',

      // 详情页 - 核心画廊 (左侧：文案+氛围图)
      leftContent: [
        { type: 'text', content: '这里，视觉让位于触觉，空间被理解为一种 “可触知的景观” 。墙布系统大胆运用了强烈而富有表现力的立体肌理，从粗砺的手工抹痕到深邃的编织凹凸，创造出身临其境的触感体验。这些肌理不仅是装饰，更是划分空间、引导情绪的“地形要素”。<br/><br/>家具的配置，则遵循着在这片“地形”中 “因地制宜”的法则。它们的形式与放置，与墙面的“地貌”产生对话：一片平坦的墙面可能需要一组形态复杂的家具来激活；而一面已极具表现力的墙前，往往只需一件线条极简、质感与之形成对比的单品来平衡。其材质也极度强调触感的真实性——未经涂装的木材、带有天然印记的皮革、厚重的手工羊毛。这种搭配让空间超越了观看，成为一种全身心的沉浸式体验。居住者通过触摸、倚靠和穿行，与空间建立起一种私密而深刻的物理连接，家从而成为一个真正被身体所感知和记忆的场所。' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
      ],

      // 详情页 - 核心画廊 (中间：主要大图)
      mainImages: [
        { src: require('@/assets/images/projects/P1302.webp')},
        { src: require('@/assets/images/projects/P1303.webp')},
        { src: require('@/assets/images/projects/P1304.webp')},
        { src: require('@/assets/images/projects/P1305.webp')},
        { src: require('@/assets/images/projects/P1306.webp')},
        { src: require('@/assets/images/projects/P1307.webp')},
        { src: require('@/assets/images/projects/P1308.webp')},
        { src: require('@/assets/images/projects/P1309.webp')},
        { src: require('@/assets/images/projects/P1310.webp')},
        { src: require('@/assets/images/projects/P1311.webp')},
        { src: require('@/assets/images/projects/P1312.webp')},
        { src: require('@/assets/images/projects/P1313.webp')},
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
      title: 'A Tactile Topography',
      intro: 'The space is like a tactile topographic map. The undulating textures of the walls are hills and valleys, the furniture like settlements scattered throughout, inviting fingers and the body to read, to explore.',
      date: 'Nov 2023',
      location: 'Beijing, China',
      type: 'Interior Design',

      leftContent: [
        { type: 'text', content: `In this space, vision yields to touch, and the environment is reimagined as a "tangible landscape." The wall covering system boldly employs expressive, three-dimensional textures—from raw, hand-applied trowel marks to deep, woven undulations—creating an immersive tactile experience. These textures are not mere decorations but "topographical elements" that define the space and guide the emotions.<br/><br/>The furniture configuration follows the principle of "site-specific adaptation" within this terrain. Their forms and placement engage in a dialogue with the wall's "landform": a flat surface may call for a complex furniture ensemble to activate it, while an expressive wall often requires only a minimalist piece with contrasting texture to maintain balance. The materials emphasize an absolute authenticity of touch—unfinished wood, leather with natural markings, and heavy, hand-woven wool. This curation transcends mere observation, evolving into an all-encompassing immersive experience. By touching, leaning, and moving through, inhabitants establish an intimate and profound physical connection, transforming the home into a sanctuary truly perceived and remembered by the body.`},
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ],

      mainImages: [
        { src: require('@/assets/images/projects/P1302.webp')},
        { src: require('@/assets/images/projects/P1303.webp')},
        { src: require('@/assets/images/projects/P1304.webp')},
        { src: require('@/assets/images/projects/P1305.webp')},
        { src: require('@/assets/images/projects/P1306.webp')},
        { src: require('@/assets/images/projects/P1307.webp')},
        { src: require('@/assets/images/projects/P1308.webp')},
        { src: require('@/assets/images/projects/P1309.webp')},
        { src: require('@/assets/images/projects/P1310.webp')},
        { src: require('@/assets/images/projects/P1311.webp')},
        { src: require('@/assets/images/projects/P1312.webp')},
        { src: require('@/assets/images/projects/P1313.webp')},
      ],

      rightImages: [
        { spacer: true, height: '0px' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ]
    }
  },
  {
    id: 'project14', // 路由ID
    // 公共属性 (列表页封面)
    coverImage: require('@/assets/images/projects/P1401.webp'),
    isSelected: false, // 是否精选展示

    // --- 中文数据 ---
    zh: {
      // 列表页字段
      title: '阈限的暖调',
      intro: '存在于门廊与房间、清醒与睡梦之间的暧昧地带。色彩是黄昏将尽未尽时的暖灰，光线模糊了物体的边界，一切都笼罩在一层令人安心又出神的柔光里。',
      
      // 详情页 - Hero区域
      date: '2023年1月',
      location: '中国 江门',
      type: '室内设计',

      // 详情页 - 核心画廊 (左侧：文案+氛围图)
      leftContent: [
        { type: 'text', content: '我们着迷于 “阈限空间” 那种既非此亦非彼的独特氛围。设计旨在复刻这种过渡状态的感官体验。墙布色彩全部选自一系列难以名状的暖调中性色，像是记忆褪色后的余温，或是烛光映在墙壁上的颜色。其质感多为哑光且具有极细微的颗粒感，能够吸收并柔和光线，而非反射它。<br/><br/>家具的形态与布局强化了这种悬置的、恍惚的美感。它们往往轮廓柔和，体量感被视觉削弱，仿佛不是沉重的实体，而是光线投射出的暂时性剪影。搭配的核心理念是“消融”。墙布的色调与光线共同作用，主动模糊了自身与家具、以及家具与地板之间的清晰界线。物件仿佛漂浮或融化在空气中。这种处理方式剥离了空间的特定功能性暗示，创造出一个精神的缓冲区。它不催促任何行动，只提供一种包裹性的、沉思性的温暖，适合独处、漫想或亲密而沉默的共处。' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
      ],

      // 详情页 - 核心画廊 (中间：主要大图)
      mainImages: [
        { src: require('@/assets/images/projects/P1402.webp')},
        { src: require('@/assets/images/projects/P1403.webp')},
        { src: require('@/assets/images/projects/P1404.webp')},
        { src: require('@/assets/images/projects/P1405.webp')},
        { src: require('@/assets/images/projects/P1406.webp')},
        { src: require('@/assets/images/projects/P1407.webp')},
        { src: require('@/assets/images/projects/P1408.webp')},
        { src: require('@/assets/images/projects/P1409.webp')},
        { src: require('@/assets/images/projects/P1410.webp')},
        { src: require('@/assets/images/projects/P1411.webp')},
        { src: require('@/assets/images/projects/P1412.webp')},
        { src: require('@/assets/images/projects/P1413.webp')},
        { src: require('@/assets/images/projects/P1414.webp')},
        { src: require('@/assets/images/projects/P1415.webp')},
        { src: require('@/assets/images/projects/P1416.webp')},
        { src: require('@/assets/images/projects/P1417.webp')},
        { src: require('@/assets/images/projects/P1418.webp')},
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
      title: 'Liminal Warmth',
      intro: 'Existing in the ambiguous zone between porch and room, wakefulness and dream. Colors are the warm grey of lingering dusk, light blurs the edges of objects, everything is bathed in a reassuring, trance-inducing soft glow.',
      date: 'Jan 2023',
      location: 'Jiangmen, China',
      type: 'Interior Design',

      leftContent: [
        { type: 'text', content: `We are fascinated by the "in-between" atmosphere of liminal spaces. Our design seeks to capture the feeling of being in transition. The walls are dressed in nameless warm neutrals, like the soft echoes of a fading memory or the flicker of a candle's flame. Matte and finely grained, these surfaces drink in the light, turning it into a soft, diffused glow.<br/><br/>The furniture echoes this sense of being suspended in a dream. Their soft outlines and light presence make them feel less like solid objects and more like fleeting silhouettes. At the heart of this design is the art of "melting." The colors of the walls and the quality of the light work together to erase the lines between furniture and floor, object and space. Everything seems to drift or dissolve into the atmosphere. By removing the pressure of functionality, we create a quiet buffer for the soul. It asks nothing of you, offering only a cocoon of contemplative warmth—perfect for being alone, getting lost in thought, or sharing a deep, quiet presence with another.`},
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ],

      mainImages: [
        { src: require('@/assets/images/projects/P1402.webp')},
        { src: require('@/assets/images/projects/P1403.webp')},
        { src: require('@/assets/images/projects/P1404.webp')},
        { src: require('@/assets/images/projects/P1405.webp')},
        { src: require('@/assets/images/projects/P1406.webp')},
        { src: require('@/assets/images/projects/P1407.webp')},
        { src: require('@/assets/images/projects/P1408.webp')},
        { src: require('@/assets/images/projects/P1409.webp')},
        { src: require('@/assets/images/projects/P1410.webp')},
        { src: require('@/assets/images/projects/P1411.webp')},
        { src: require('@/assets/images/projects/P1412.webp')},
        { src: require('@/assets/images/projects/P1413.webp')},
        { src: require('@/assets/images/projects/P1414.webp')},
        { src: require('@/assets/images/projects/P1415.webp')},
        { src: require('@/assets/images/projects/P1416.webp')},
        { src: require('@/assets/images/projects/P1417.webp')},
        { src: require('@/assets/images/projects/P1418.webp')},
      ],

      rightImages: [
        { spacer: true, height: '0px' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ]
    }
  },
  {
    id: 'project15', // 路由ID
    // 公共属性 (列表页封面)
    coverImage: require('@/assets/images/projects/P1501.webp'),
    isSelected: false, // 是否精选展示

    // --- 中文数据 ---
    zh: {
      // 列表页字段
      title: '阈限的暖调',
      intro: '存在于门廊与房间、清醒与睡梦之间的暧昧地带。色彩是黄昏将尽未尽时的暖灰，光线模糊了物体的边界，一切都笼罩在一层令人安心又出神的柔光里。',
      
      // 详情页 - Hero区域
      date: '2023年1月',
      location: '中国 江门',
      type: '室内设计',

      // 详情页 - 核心画廊 (左侧：文案+氛围图)
      leftContent: [
        { type: 'text', content: '我们着迷于 “阈限空间” 那种既非此亦非彼的独特氛围。设计旨在复刻这种过渡状态的感官体验。墙布色彩全部选自一系列难以名状的暖调中性色，像是记忆褪色后的余温，或是烛光映在墙壁上的颜色。其质感多为哑光且具有极细微的颗粒感，能够吸收并柔和光线，而非反射它。<br/><br/>家具的形态与布局强化了这种悬置的、恍惚的美感。它们往往轮廓柔和，体量感被视觉削弱，仿佛不是沉重的实体，而是光线投射出的暂时性剪影。搭配的核心理念是“消融”。墙布的色调与光线共同作用，主动模糊了自身与家具、以及家具与地板之间的清晰界线。物件仿佛漂浮或融化在空气中。这种处理方式剥离了空间的特定功能性暗示，创造出一个精神的缓冲区。它不催促任何行动，只提供一种包裹性的、沉思性的温暖，适合独处、漫想或亲密而沉默的共处。' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
        { src: require('@/assets/images/service-surfaces.jpg'), name: '定制沙发', meta: '面料: Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: '吊灯', meta: '品牌: Flos' },
      ],

      // 详情页 - 核心画廊 (中间：主要大图)
      mainImages: [
        { src: require('@/assets/images/projects/P1502.webp')},
        { src: require('@/assets/images/projects/P1503.webp')},
        { src: require('@/assets/images/projects/P1504.webp')},
        { src: require('@/assets/images/projects/P1505.webp')},
        { src: require('@/assets/images/projects/P1506.webp')},
        { src: require('@/assets/images/projects/P1507.webp')},
        { src: require('@/assets/images/projects/P1508.webp')},
        { src: require('@/assets/images/projects/P1509.webp')},
        { src: require('@/assets/images/projects/P1510.webp')},
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
      title: 'Liminal Warmth',
      intro: 'Existing in the ambiguous zone between porch and room, wakefulness and dream. Colors are the warm grey of lingering dusk, light blurs the edges of objects, everything is bathed in a reassuring, trance-inducing soft glow.',
      date: 'Jan 2023',
      location: 'Jiangmen, China',
      type: 'Interior Design',

      leftContent: [
        { type: 'text', content: `We are fascinated by the "in-between" atmosphere of liminal spaces. Our design seeks to capture the feeling of being in transition. The walls are dressed in nameless warm neutrals, like the soft echoes of a fading memory or the flicker of a candle's flame. Matte and finely grained, these surfaces drink in the light, turning it into a soft, diffused glow.<br/><br/>The furniture echoes this sense of being suspended in a dream. Their soft outlines and light presence make them feel less like solid objects and more like fleeting silhouettes. At the heart of this design is the art of "melting." The colors of the walls and the quality of the light work together to erase the lines between furniture and floor, object and space. Everything seems to drift or dissolve into the atmosphere. By removing the pressure of functionality, we create a quiet buffer for the soul. It asks nothing of you, offering only a cocoon of contemplative warmth—perfect for being alone, getting lost in thought, or sharing a deep, quiet presence with another.`},
        { src: require('@/assets/images/service-surfaces.jpg'), name: 'Custom Sofa', meta: 'Fabric by Kvadrat' },
        { src: require('@/assets/images/service-design.jpg'), name: 'Pendant Light', meta: 'Brand: Flos' }
      ],

      mainImages: [
        { src: require('@/assets/images/projects/P1502.webp')},
        { src: require('@/assets/images/projects/P1503.webp')},
        { src: require('@/assets/images/projects/P1504.webp')},
        { src: require('@/assets/images/projects/P1505.webp')},
        { src: require('@/assets/images/projects/P1506.webp')},
        { src: require('@/assets/images/projects/P1507.webp')},
        { src: require('@/assets/images/projects/P1508.webp')},
        { src: require('@/assets/images/projects/P1509.webp')},
        { src: require('@/assets/images/projects/P1510.webp')},
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