'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Instagram, Send, Youtube, Sparkles } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/site-config';

export function HeroSection() {
  const t = useTranslations();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <Container className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Main Glass Card */}
          <FadeIn delay={0.2}>
            <motion.div
              className="relative backdrop-blur-xl bg-white/40 rounded-[3rem] p-12 md:p-16 lg:p-20 shadow-2xl border border-white/60"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-primary-200/20 via-secondary-200/20 to-accent-200/10 pointer-events-none" />

              <div className="relative space-y-10 text-center">
                {/* Sparkle Badge */}
                <motion.div
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-500/90 to-secondary-500/90 text-white text-sm font-medium shadow-lg backdrop-blur-sm"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Sparkles size={16} />
                  <span>Premium Personal Development</span>
                </motion.div>

                {/* Main Title */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 bg-clip-text text-transparent leading-tight mb-6">
                    {t('site.title')}
                  </h1>
                </motion.div>

                {/* Tagline */}
                <motion.p
                  className="text-2xl md:text-3xl lg:text-4xl text-neutral-800 max-w-4xl mx-auto leading-relaxed font-light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {t('site.tagline')}
                </motion.p>

                {/* Coach Info Glass Card */}
                <motion.div
                  className="inline-block mt-8 backdrop-blur-md bg-white/60 rounded-3xl px-8 py-6 shadow-xl border border-white/80"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.05, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                >
                  <p className="text-2xl font-semibold text-neutral-900 mb-1">
                    {siteConfig.coach.name}
                  </p>
                  <p className="text-lg text-neutral-600">{t('hero.coachTitle')}</p>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  className="pt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Button
                    size="lg"
                    onClick={() => scrollToSection('programs')}
                    className="text-xl px-12 py-6 h-auto shadow-2xl hover:shadow-primary-500/50"
                  >
                    {t('hero.cta')}
                  </Button>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  className="flex items-center justify-center gap-4 pt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  {[
                    { icon: Instagram, url: siteConfig.social.instagram },
                    { icon: Send, url: siteConfig.social.telegram },
                    { icon: Youtube, url: siteConfig.social.youtube },
                  ].map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={i}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-2xl backdrop-blur-md bg-white/70 text-primary-600 border border-white/80 shadow-lg transition-all duration-300"
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: 'rgba(230, 126, 34, 0.9)',
                          color: 'white',
                          boxShadow: '0 20px 40px -12px rgba(230, 126, 34, 0.5)',
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon size={24} />
                      </motion.a>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          </FadeIn>

          {/* Scroll Indicator */}
          <motion.button
            onClick={() => scrollToSection('programs')}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 p-3 rounded-full backdrop-blur-md bg-white/60 border border-white/80 shadow-lg text-primary-600"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.1 }}
            aria-label={t('hero.scrollDown')}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.button>
        </div>
      </Container>
    </section>
  );
}
