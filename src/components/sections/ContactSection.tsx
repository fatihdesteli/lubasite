'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SocialLinks } from '@/components/shared/SocialLinks';
import { siteConfig } from '@/data/site-config';
import { Send } from 'lucide-react';

export function ContactSection() {
  const t = useTranslations('contact');
  const tSocial = useTranslations('social');

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <Container className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="eyebrow mb-4">{t('subtitle')}</span>
          <h2 className="font-display mb-5 text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="gradient-text">{t('title')}</span>
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-balance text-lg leading-relaxed text-muted">
            {t('description')}
          </p>

          <div className="mb-10 flex justify-center">
            <a href={siteConfig.social.telegram} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2">
                <Send className="h-5 w-5" />
                {t('writeTelegram')}
              </Button>
            </a>
          </div>

          <p className="eyebrow mb-5 justify-center">{tSocial('follow')}</p>
          <SocialLinks variant="pill" className="mx-auto max-w-xl" />
        </motion.div>
      </Container>
    </section>
  );
}
