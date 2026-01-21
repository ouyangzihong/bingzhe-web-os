// src/data/products.js

// 模拟六个系列的数据 (Series A - Series F)
// 这里的图片暂时使用 require 引入现有的资源作为占位
// 建议后续在 src/assets/images/ 目录下建立 products 文件夹专门存放

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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
  }
];