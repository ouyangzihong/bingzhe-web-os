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
  },
  projects: {
    realScene: 'Project Real Scene Picture', // 新增
    residence: {
      title: 'Contemporary Private Residence',
      desc: 'A calm residential space defined by bespoke wallcovering and tailored soft furnishings.',
      location: 'Shanghai, China',
      type: 'Residential'
    },
    hotel: {
      title: 'Luxury Hospitality Interior',
      desc: 'A hospitality interior shaped by material-driven design and custom furnishing solutions.',
      location: 'Dubai, UAE',
      type: 'Hospitality'
    },
    showroom: {
      title: 'Commercial Showroom',
      desc: 'A commercial space expressing brand identity through integrated wall and furnishing systems.',
      location: 'Guangzhou, China',
      type: 'Commercial'
    },
    resort: {
      title: 'Resort Hospitality Interior',
      desc: 'A resort interior shaped by natural textures and bespoke furnishing solutions.',
      location: 'Bali, Indonesia',
      type: 'Hospitality'
    }
  },
  whyChooseUs: {
    title: "Why Choose Us",
    subtitle: "Design-Driven. Globally Delivered",
    items: [
      {
        title: "Bespoke Design",
        desc: "Each project is tailored to its spatial conditions and functional goals. No templates. Only purpose-built solutions."
      },
      {
        title: "Integrated Supply Chain",
        desc: "Design, manufacturing, and delivery operate as one integrated system, ensuring efficiency, consistency, and quality across every stage."
      },
      {
        title: "International Standard",
        desc: "We follow international standards throughout design development, material selection, and project execution worldwide."
      },
      {
        title: "One-Stop Solution",
        desc: "From design services and FF&E to final installation, we deliver fully integrated turnkey solutions under one team."
      }
    ]
  },
  contact: {
    subTitle: 'Common questions',
    title: 'Have questions?\nGet in touch!',
    description: 'We are here to assist you with any questions or concerns you may have. Feel free to reach out to us anytime.',
    location: 'China—',
    email: 'XXXXXX@XXX.com',
    phone: '+86 000 0000 0000',
    form: {
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      privacy: 'I agree that my submitted data is being collected and stored.',
      emailError: 'Please enter a valid email address',
      submit: 'Send Message',
      submitting: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Failed to send message. Please try again.'
    }
  }
}