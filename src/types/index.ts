export interface LocalizedString {
  ru: string;
  en: string;
}

export interface LocalizedStringArray {
  ru: string[];
  en: string[];
}

export type Locale = 'ru' | 'en';

export interface Program {
  id: string;
  slug: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  description: LocalizedString;
  format: 'online' | 'offline' | 'individual';
  duration: LocalizedString;
  highlights: LocalizedStringArray;
  image: string;
  price?: LocalizedString;
  ctaText: LocalizedString;
}

export interface Article {
  id: string;
  slug: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  content: LocalizedString;
  image: string;
  author: string;
  publishedAt: string;
  readingTime: number;
  category?: string;
}

export interface Testimonial {
  id: string;
  name: LocalizedString;
  role?: LocalizedString;
  content: LocalizedString;
  image?: string;
  videoUrl?: string;
  rating?: number;
  featured?: boolean;
}

export interface Video {
  id: string;
  title: LocalizedString;
  description?: LocalizedString;
  url: string;
  thumbnail?: string;
  duration?: string;
}

export interface SocialLinks {
  instagram?: string;
  telegram?: string;
  vk?: string;
  youtube?: string;
  whatsapp?: string;
}
