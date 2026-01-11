import { Program } from '@/types';

export const programs: Program[] = [
  {
    id: 'online-course',
    slug: 'zvuchi-proyavlyaysya-bud',
    title: {
      ru: 'Звучи! Проявляйся! Будь!',
      en: 'Sound! Manifest! Be!',
    },
    subtitle: {
      ru: 'Онлайн курс',
      en: 'Online Course',
    },
    description: {
      ru: 'Комплексная программа для раскрытия вашего истинного голоса и обретения уверенности в общении. Вы научитесь свободно выражать свои мысли и чувства, преодолеете страх публичных выступлений.',
      en: 'Comprehensive program to unlock your true voice and gain confidence in communication. You will learn to freely express your thoughts and feelings, overcome fear of public speaking.',
    },
    format: 'online',
    duration: {
      ru: '8 недель',
      en: '8 weeks',
    },
    highlights: {
      ru: [
        'Еженедельные live-сессии',
        'Практические упражнения',
        'Персональная обратная связь',
        'Доступ к записям на год',
        'Сообщество поддержки',
      ],
      en: [
        'Weekly live sessions',
        'Practical exercises',
        'Personal feedback',
        'Access to recordings for a year',
        'Support community',
      ],
    },
    image: '/images/programs/online-course.jpg',
    price: {
      ru: 'По запросу',
      en: 'On request',
    },
    ctaText: {
      ru: 'Узнать больше',
      en: 'Learn More',
    },
  },
  {
    id: 'offline-course',
    slug: 'iskusstvo-byt-soboy',
    title: {
      ru: 'Искусство быть собой через искусство говорить',
      en: 'The Art of Being Yourself Through the Art of Speaking',
    },
    subtitle: {
      ru: 'Офлайн курс',
      en: 'Offline Course',
    },
    description: {
      ru: 'Интенсивный курс для глубокой трансформации через работу с речью и самовыражением. Погружение в практику с индивидуальным подходом и работой в группе.',
      en: 'Intensive course for deep transformation through working with speech and self-expression. Immersion in practice with an individual approach and group work.',
    },
    format: 'offline',
    duration: {
      ru: '6 занятий по 3 часа',
      en: '6 sessions of 3 hours',
    },
    highlights: {
      ru: [
        'Очные встречи в мини-группе',
        'Глубокая работа с голосом',
        'Техники ораторского мастерства',
        'Видеоанализ выступлений',
        'Сертификат об окончании',
      ],
      en: [
        'In-person meetings in a mini-group',
        'Deep voice work',
        'Public speaking techniques',
        'Video analysis of performances',
        'Certificate of completion',
      ],
    },
    image: '/images/programs/offline-course.jpg',
    price: {
      ru: 'По запросу',
      en: 'On request',
    },
    ctaText: {
      ru: 'Записаться',
      en: 'Register',
    },
  },
  {
    id: 'individual-sessions',
    slug: 'individualnye-zanyatiya',
    title: {
      ru: 'Индивидуальные занятия',
      en: 'Individual Sessions',
    },
    subtitle: {
      ru: 'Персональный коучинг',
      en: 'Personal Coaching',
    },
    description: {
      ru: 'Персональные сессии для достижения ваших уникальных целей в личностном развитии. Индивидуальная программа, адаптированная под ваши потребности и темп.',
      en: 'Personal sessions to achieve your unique personal development goals. Individual program adapted to your needs and pace.',
    },
    format: 'individual',
    duration: {
      ru: 'По договоренности',
      en: 'By arrangement',
    },
    highlights: {
      ru: [
        '100% индивидуальный подход',
        'Гибкий график занятий',
        'Онлайн или очно',
        'Конфиденциальность',
        'Быстрые результаты',
      ],
      en: [
        '100% individual approach',
        'Flexible schedule',
        'Online or in-person',
        'Confidentiality',
        'Fast results',
      ],
    },
    image: '/images/programs/individual.jpg',
    price: {
      ru: 'По запросу',
      en: 'On request',
    },
    ctaText: {
      ru: 'Связаться',
      en: 'Contact',
    },
  },
];
