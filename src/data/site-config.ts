export const siteConfig = {
  name: 'Путь к себе',
  nameEn: 'Path to Self',
  coach: {
    name: 'Любовь Юрьевна Самойленко',
    nameEn: 'Lyubov Yurievna Samoilenko',
    title: {
      ru: 'Коуч личностного развития',
      en: 'Personal Development Coach',
    },
    bio: {
      ru: 'Профессиональный коуч с многолетним опытом помощи людям в обретении уверенности и развитии навыков самовыражения',
      en: 'Professional coach with years of experience helping people gain confidence and develop self-expression skills',
    },
  },
  tagline: {
    ru: 'твой истинный путь к себе начинается со смелости звучать',
    en: 'your true path to yourself begins with the courage to sound',
  },
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/pathtoself',
    telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL || 'https://t.me/pathtoself',
    vk: process.env.NEXT_PUBLIC_VK_URL || 'https://vk.com/pathtoself',
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || 'https://youtube.com/@pathtoself',
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL || 'https://wa.me/',
  },
  contact: {
    email: 'info@pathtoself.com',
    phone: '+7 (XXX) XXX-XX-XX',
  },
  seo: {
    title: {
      ru: 'Путь к себе | Коучинг личностного развития',
      en: 'Path to Self | Personal Development Coaching',
    },
    description: {
      ru: 'Профессиональный коучинг личностного развития с Любовью Юрьевной Самойленко. Онлайн и офлайн курсы по развитию навыков самовыражения и уверенности в общении.',
      en: 'Professional personal development coaching with Lyubov Yurievna Samoilenko. Online and offline courses for developing self-expression and communication confidence.',
    },
  },
};
