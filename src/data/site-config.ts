export const siteConfig = {
  name: 'Путь к себе',
  nameEn: 'Path to Self',
  coach: {
    name: 'Любовь Юрьевна Самойленко',
    nameEn: 'Lyubov Yurievna Samoilenko',
    title: {
      ru: 'Педагог по технике речи',
      en: 'Speech technique teacher',
    },
    bio: {
      ru: 'Педагог по технике речи с многолетним опытом помощи людям в обретении уверенности и развитии навыков самовыражения',
      en: 'Speech technique teacher with years of experience helping people gain confidence and develop self-expression skills',
    },
  },
  tagline: {
    ru: 'твой истинный путь к себе начинается со смелости звучать',
    en: 'your true path to yourself begins with the courage to sound',
  },
  social: {
    instagram: 'https://instagram.com/strelochka_love',
    instagramHandle: '@strelochka_love',
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
    orientation: 'landscape' as 'portrait' | 'landscape',
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
      ru: 'Путь к себе | Техника речи и ораторское искусство',
      en: 'Path to Self | Speech Technique & Public Speaking',
    },
    description: {
      ru: 'Занятия по технике речи, голосу и ораторскому искусству с Любовью Юрьевной Самойленко. Онлайн и офлайн курсы по развитию навыков самовыражения и уверенности в общении.',
      en: 'Speech technique, voice and public speaking classes with Lyubov Yurievna Samoilenko. Online and offline courses for developing self-expression and communication confidence.',
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
        question: { ru: 'Консультация. Как проходит?', en: 'The consultation. How does it work?' },
        answer: {
          ru: 'Консультация перед занятиями проходит в формате онлайн (до 30 минут). На основе тестовых заданий выбираем формат, обсуждаем ваш запрос, ставим цели.',
          en: 'The pre-course consultation takes place online (up to 30 minutes). Based on test assignments, we choose the format, discuss your request and set goals.'
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
        question: { ru: 'Сколько длится программа?', en: 'How long is the program?' },
        answer: {
          ru: 'Длительность зависит от формата и вашего запроса. Онлайн-курс — 4 недели, групповой интенсив — 6 занятий, индивидуальные занятия — по договорённости.',
          en: 'Duration depends on the format and your request. The online course is 4 weeks, the group intensive is 6 sessions, and individual sessions are by arrangement.'
        }
      }
    ]
  },
};
