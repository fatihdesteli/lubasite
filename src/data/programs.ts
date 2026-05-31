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
      ru: 'Авторская комплексная программа по раскрытию природного потенциала вашего голоса. Программа включает мастерство классического ораторского искусства, развитие кинетического интеллекта и дыхательные практики.',
      en: "An author's comprehensive program to unlock the natural potential of your voice. It includes the mastery of classical public speaking, the development of kinetic intelligence and breathing practices.",
    },
    format: 'online',
    duration: {
      ru: '4 недели',
      en: '4 weeks',
    },
    highlights: {
      ru: [
        'Практические упражнения на каждый день',
        '2 онлайн встречи в формате Live',
        'Вебинар по этикету',
      ],
      en: [
        'Daily practical exercises',
        '2 online Live sessions',
        'Webinar on etiquette',
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
      ru: 'Групповой интенсив в камерном формате направлен на раскрепощение голоса и выход в проявленность. Это путь от внутреннего молчания к уверенности, где каждый ваш звук становится шагом к самому себе.',
      en: 'A group intensive in an intimate format aimed at liberating the voice and stepping into visibility. It is a path from inner silence to confidence, where every sound you make becomes a step toward yourself.',
    },
    format: 'offline',
    duration: {
      ru: '6 занятий по 1,5 часа',
      en: '6 sessions of 1.5 hours',
    },
    highlights: {
      ru: [
        'Занятия в формате живых встреч',
        'Небольшие группы (3–7 человек)',
        'Доступ в закрытый тг-канал',
      ],
      en: [
        'Live in-person sessions',
        'Small groups (3–7 people)',
        'Access to a private Telegram channel',
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
      ru: 'персональный подход',
      en: 'personal approach',
    },
    description: {
      ru: 'Достигайте своих целей в личностном развитии через персональные сессии. Программа разрабатывается индивидуально под ваш конкретный запрос.',
      en: 'Achieve your personal development goals through one-on-one sessions. The program is designed individually for your specific request.',
    },
    format: 'individual',
    duration: {
      ru: 'По договоренности',
      en: 'By arrangement',
    },
    highlights: {
      ru: [
        'Онлайн или офлайн',
      ],
      en: [
        'Online or offline',
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
