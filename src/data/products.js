// src/data/products.js

// 模拟六个系列的数据 (Series A - Series F)
// 辅助函数：生成模拟的子产品列表
function generateItems(seriesId, count, baseTitleZh, baseTitleEn, typeZh, typeEn) {
  return Array.from({ length: count }).map((_, i) => ({
    id: `${seriesId}-${i + 1}`,
    // 实际项目中每个产品应有不同图片，这里暂时复用占位图或逻辑
    image: require('@/assets/images/series/A00103.jpg'), 
    zh: {
      title: `${baseTitleZh} ${i + 1}`, // 例如：现代私人住宅 1
      location: '中国 上海',
      type: typeZh
    },
    en: {
      title: `${baseTitleEn} ${i + 1}`, // 例如：Contemporary Residence 1
      location: 'Shanghai, China',
      type: typeEn
    }
  }));
}

export const productsData = [
  {
    id: 'series-a',
    // 封面图
    coverImage: require('@/assets/images/series/A00103.jpg'),
    
    // 中文数据
    zh: {
      seriesName: 'A系列', // 图片上方的系列标识
      title: '现代私人住宅', // 下方主标题
      desc: '由定制墙纸和量身定制的软装定义的宁静居住空间。', // 描述
      location: '中国 上海',
      type: '住宅'
    },
    
    // 英文数据
    en: {
      seriesName: 'Series A',
      title: 'Contemporary Private Residence',
      desc: 'A calm residential space defined by bespoke wallcovering and tailored soft furnishings.',
      location: 'Shanghai, China',
      type: 'Residential'
    },
    // [新增] 该系列下的具体产品/案例列表
    items: generateItems('series-a', 8, '现代主义风格', 'Contemporary Style', '住宅', 'Residential')
  },
  {
    id: 'series-b',
    coverImage: require('@/assets/images/series/B00103.jpg'),
    zh: {
      seriesName: 'B系列',
      title: '豪华酒店内饰',
      desc: '由材料驱动设计和定制家具方案塑造的酒店室内空间。',
      location: '阿联酋 迪拜',
      type: '酒店'
    },
    en: {
      seriesName: 'Series B',
      title: 'Luxury Hospitality Interior',
      desc: 'A hospitality interior shaped by material-driven design and custom furnishing solutions.',
      location: 'Dubai, UAE',
      type: 'Hospitality'
    },
    // [新增] B系列数据
    items: generateItems('series-b', 6, '阿布扎比皇宫酒店', 'Abu Dhabi Palace', '酒店', 'Hospitality')
  },
  {
    id: 'series-c',
    coverImage: require('@/assets/images/series/C00101.jpg'),
    zh: {
      seriesName: 'C系列',
      title: '现代私人住宅',
      desc: '由定制墙纸和量身定制的软装定义的宁静居住空间。',
      location: '中国 上海',
      type: '住宅'
    },
    en: {
      seriesName: 'Series C',
      title: 'Contemporary Private Residence',
      desc: 'A calm residential space defined by bespoke wallcovering and tailored soft furnishings.',
      location: 'Shanghai, China',
      type: 'Residential'
    },
    items: generateItems('series-c', 4, '静安豪庭', 'Jingan Villa', '住宅', 'Residential')
  },
  {
    id: 'series-d',
    coverImage: require('@/assets/images/series/C001S01.jpg'),
    zh: {
      seriesName: 'D系列',
      title: '豪华酒店内饰',
      desc: '由材料驱动设计和定制家具方案塑造的酒店室内空间。',
      location: '阿联酋 迪拜',
      type: '酒店'
    },
    en: {
      seriesName: 'Series D',
      title: 'Luxury Hospitality Interior',
      desc: 'A hospitality interior shaped by material-driven design and custom furnishing solutions.',
      location: 'Dubai, UAE',
      type: 'Hospitality'
    },
    items:[]
  },
  {
    id: 'series-e',
    coverImage: require('@/assets/images/projects/project1-04.jpg'),
    zh: {
      seriesName: 'E系列',
      title: '现代私人住宅',
      desc: '由定制墙纸和量身定制的软装定义的宁静居住空间。',
      location: '中国 上海',
      type: '住宅'
    },
    en: {
      seriesName: 'Series E',
      title: 'Contemporary Private Residence',
      desc: 'A calm residential space defined by bespoke wallcovering and tailored soft furnishings.',
      location: 'Shanghai, China',
      type: 'Residential'
    },
    items:[]
  },
  {
    id: 'series-f',
    coverImage: require('@/assets/images/projects/project1-05.jpg'),
    zh: {
      seriesName: 'F系列',
      title: '豪华酒店内饰',
      desc: '由材料驱动设计和定制家具方案塑造的酒店室内空间。',
      location: '阿联酋 迪拜',
      type: '酒店'
    },
    en: {
      seriesName: 'Series F',
      title: 'Luxury Hospitality Interior',
      desc: 'A hospitality interior shaped by material-driven design and custom furnishing solutions.',
      location: 'Dubai, UAE',
      type: 'Hospitality'
    },
    items:[]
  }
];