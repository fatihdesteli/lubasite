'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/data/site-config';
import { Heart } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="py-12 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
      <Container>
        <div className="text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold">{siteConfig.name}</h3>
          <p className="text-neutral-400 max-w-md mx-auto">
            {siteConfig.tagline.ru}
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-neutral-400">
            <span>{t('madeWith')}</span>
            <Heart size={16} className="text-primary-400 fill-primary-400" />
          </div>
          <p className="text-sm text-neutral-500">{t('copyright')}</p>
        </div>
      </Container>
    </footer>
  );
}
