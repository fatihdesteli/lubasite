'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SocialLinks } from '@/components/shared/SocialLinks';
import { siteConfig } from '@/data/site-config';
import { ChevronDown, Sparkles } from 'lucide-react';

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-28 pb-20"
    >
      {/* animated orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-float-slow absolute -top-20 left-[8%] h-72 w-72 rounded-full bg-primary/25 blur-[120px] sm:h-96 sm:w-96" />
        <div className="animate-float-slow-rev absolute bottom-0 right-[6%] h-72 w-72 rounded-full bg-accent/20 blur-[120px] sm:h-96 sm:w-96" />
      </div>

      <Container className="relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="eyebrow mb-6 inline-flex glass rounded-full px-4 py-2"
        >
          <Sparkles className="h-3.5 w-3.5" />
          {siteConfig.coach.title.ru}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display mb-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="gradient-text">{siteConfig.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mx-auto mb-10 max-w-2xl text-balance text-lg leading-relaxed text-muted sm:text-xl"
        >
          {t('tagline')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button size="lg" className="w-full sm:w-auto" onClick={() => scrollTo('programs')}>
            {t('cta')}
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="w-full sm:w-auto"
            onClick={() => scrollTo('contact')}
          >
            Связаться
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-10 flex justify-center"
        >
          <SocialLinks size="md" />
        </motion.div>
      </Container>

      <motion.button
        aria-label={t('scroll')}
        onClick={() => scrollTo('methodology')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-6 w-6" />
      </motion.button>
    </section>
  );
}
