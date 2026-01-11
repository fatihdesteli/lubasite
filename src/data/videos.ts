import { Video } from '@/types';

export const videos: Video[] = [
  {
    id: 'video-1',
    title: {
      ru: 'Как найти свой голос',
      en: 'How to Find Your Voice',
    },
    description: {
      ru: 'Узнайте, как обрести уверенность в своем голосе и начать говорить свободно',
      en: 'Learn how to gain confidence in your voice and start speaking freely',
    },
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Replace with real URL
    thumbnail: '/images/videos/video-1.jpg',
    duration: '12:34',
  },
  {
    id: 'video-2',
    title: {
      ru: 'Преодоление страха публичных выступлений',
      en: 'Overcoming Fear of Public Speaking',
    },
    description: {
      ru: 'Практические техники для уверенных выступлений перед аудиторией',
      en: 'Practical techniques for confident presentations to an audience',
    },
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Replace with real URL
    thumbnail: '/images/videos/video-2.jpg',
    duration: '15:22',
  },
  {
    id: 'video-3',
    title: {
      ru: 'Сила аутентичности в общении',
      en: 'The Power of Authenticity in Communication',
    },
    description: {
      ru: 'Почему быть собой - ключ к эффективному общению',
      en: 'Why being yourself is the key to effective communication',
    },
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Replace with real URL
    thumbnail: '/images/videos/video-3.jpg',
    duration: '18:45',
  },
];
