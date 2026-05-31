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
    instagram: 'https://instagram.com/lubov_strelkova',
    instagramHandle: '@lubov_strelkova',
    telegram: 'https://t.me/strelochka_love',
    telegramHandle: '@strelochka_love',
  },
  // Видео-секция. `src` пустой → секция скрыта.
  // Поддерживается: прямая ссылка на файл (.mp4/.webm/.mov — нативный плеер, без рекламы),
  // либо ссылка на Vimeo/YouTube (встраивается через iframe).
  // poster — превью-картинка (необязательно).
  video: {
    src: '/videos/intro.mp4',
    poster: '/videos/intro-poster.jpg',
    // 'portrait' (вертикальное, 9:16) или 'landscape' (16:9)
    orientation: 'portrait' as 'portrait' | 'landscape',
    title: { ru: 'Видео-знакомство', en: 'Video introduction' },
    description: {
      ru: 'Несколько слов обо мне и о том, как мы будем работать.',
      en: 'A few words about me and how we will work together.',
    },
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
  methodology: {
    title: { ru: 'Путь к Мастерству', en: 'Path to Mastery' },
    description: {
      ru: 'В основе моей методики лежит синергия ораторского искусства, психологических инструментов и дыхательных техник.',
      en: 'My methodology is built on the synergy of public speaking, psychological tools and breathing techniques.'
    },
    steps: [
      {
        icon: 'Sparkles',
        title: { ru: 'Осознание', en: 'Awareness' },
        description: {
          ru: 'Исследование ваших истинных устремлений и проработка внутренних ограничений.',
          en: 'Exploring your true aspirations and working through inner limitations.'
        }
      },
      {
        icon: 'Brain',
        title: { ru: 'Трансформация', en: 'Transformation' },
        description: {
          ru: 'Путь от ментальных лабиринтов к ясности и свободе самовыражения через голос.',
          en: 'The path from mental labyrinths to clarity and freedom of self-expression through voice.'
        }
      },
      {
        icon: 'Heart',
        title: { ru: 'Раскрытие', en: 'Unfolding' },
        description: {
          ru: 'Работа с голосом и телом для свободного выражения эмоций.',
          en: 'Working with voice and body for free expression of emotions.'
        }
      },
      {
        icon: 'Zap',
        title: { ru: 'Воплощение', en: 'Manifestation' },
        description: {
          ru: 'Интеграция новых навыков в жизнь и реальные результаты.',
          en: 'Integration of new skills into life and real results.'
        }
      }
    ]
  },
  faq: {
    title: { ru: 'Вопросы и Ответы', en: 'FAQ' },
    items: [
      {
        question: { ru: 'Как проходит первая консультация?', en: 'How does the first consultation go?' },
        answer: {
          ru: 'Первая встреча (30-45 минут) посвящена знакомству. Мы обсуждаем ваш запрос, я рассказываю о формате работы, и мы определяем, подходим ли мы друг другу.',
          en: 'The first meeting (30-45 minutes) is dedicated to getting to know each other. We discuss your request, I talk about the format of work, and we determine if we are a good fit.'
        }
      },
      {
        question: { ru: 'Нужна ли подготовка к занятиям?', en: 'Is preparation needed for classes?' },
        answer: {
          ru: 'Специальной подготовки не требуется. Главное — ваше желание меняться и готовность к честному диалогу с собой. Для онлайн занятий нужен хороший интернет и тихое место.',
          en: 'No special preparation is required. The main thing is your desire to change and readiness for honest dialogue with yourself. For online classes, you need good internet and a quiet place.'
        }
      },
      {
        question: { ru: 'Сколько длится программа коучинга?', en: 'How long is the coaching program?' },
        answer: {
          ru: 'Длительность зависит от вашего запроса. Базовый курс — 3 месяца (12 сессий). Это оптимальное время для закрепления устойчивых изменений.',
          en: 'Duration depends on your request. The basic course is 3 months (12 sessions). This is the optimal time to consolidate sustainable changes.'
        }
      }
    ]
  },
};
