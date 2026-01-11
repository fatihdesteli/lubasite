import { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: {
      ru: 'Анна Петрова',
      en: 'Anna Petrova',
    },
    role: {
      ru: 'Менеджер по продажам',
      en: 'Sales Manager',
    },
    content: {
      ru: 'Работа с Любовью Юрьевной полностью изменила мое отношение к публичным выступлениям. Я обрела уверенность и научилась выражать свои мысли четко и убедительно. Теперь презентации перестали быть стрессом!',
      en: 'Working with Lyubov Yurievna completely changed my attitude towards public speaking. I gained confidence and learned to express my thoughts clearly and convincingly. Now presentations are no longer stressful!',
    },
    image: '/images/testimonials/testimonial-1.jpg',
    rating: 5,
    featured: true,
  },
  {
    id: 'testimonial-2',
    name: {
      ru: 'Дмитрий Соколов',
      en: 'Dmitry Sokolov',
    },
    role: {
      ru: 'Предприниматель',
      en: 'Entrepreneur',
    },
    content: {
      ru: 'Индивидуальные сессии помогли мне найти свой голос в бизнесе. Я стал более аутентичным в общении с партнерами и клиентами, и это принесло невероятные результаты. Рекомендую всем!',
      en: 'Individual sessions helped me find my voice in business. I became more authentic in communicating with partners and clients, and it brought incredible results. Highly recommend!',
    },
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    rating: 5,
    featured: true,
  },
  {
    id: 'testimonial-3',
    name: {
      ru: 'Елена Волкова',
      en: 'Elena Volkova',
    },
    role: {
      ru: 'Психолог',
      en: 'Psychologist',
    },
    content: {
      ru: 'Офлайн курс превзошел все мои ожидания. Атмосфера доверия, профессионализм и глубокий подход к работе с голосом и самовыражением. Это был настоящий прорыв для меня!',
      en: 'The offline course exceeded all my expectations. An atmosphere of trust, professionalism and a deep approach to working with voice and self-expression. It was a real breakthrough for me!',
    },
    image: '/images/testimonials/testimonial-3.jpg',
    rating: 5,
    featured: false,
  },
  {
    id: 'testimonial-4',
    name: {
      ru: 'Михаил Кузнецов',
      en: 'Mikhail Kuznetsov',
    },
    role: {
      ru: 'IT-специалист',
      en: 'IT Specialist',
    },
    content: {
      ru: 'Я всегда боялся выступать перед людьми. После онлайн курса я не только преодолел этот страх, но и начал получать удовольствие от общения. Спасибо за профессионализм и поддержку!',
      en: 'I was always afraid to speak in front of people. After the online course, I not only overcame this fear, but also began to enjoy communication. Thank you for your professionalism and support!',
    },
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    rating: 5,
    featured: true,
  },
];
