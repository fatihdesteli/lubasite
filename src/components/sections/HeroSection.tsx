'use client';

import { useTranslations } from 'next-intl';
import { Instagram, Send, Youtube } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 via-secondary-50/30 to-primary-50/40">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10 py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo/Brand */}
          <FadeIn delay={0.2}>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-primary-600 leading-tight">
              {t('site.title')}
            </h1>
          </FadeIn>

          {/* Tagline */}
          <SlideIn direction="up" delay={0.4}>
            <p className="text-2xl md:text-3xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              {t('site.tagline')}
            </p>
          </SlideIn>

          {/* Coach Info */}
          <FadeIn delay={0.6}>
            <div className="pt-4">
              <p className="text-xl font-medium text-neutral-800">{siteConfig.coach.name}</p>
              <p className="text-lg text-neutral-600">{t('hero.coachTitle')}</p>
            </div>
          </FadeIn>

          {/* CTA Button */}
          <FadeIn delay={0.8}>
            <div className="pt-8">
              <Button
                size="lg"
                onClick={() => scrollToSection('programs')}
                className="text-lg px-10"
              >
                {t('hero.cta')}
              </Button>
            </div>
          </FadeIn>

          {/* Social Links */}
          <FadeIn delay={1.0}>
            <div className="flex items-center justify-center gap-6 pt-8">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/80 text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-md"
              >
                <Instagram size={24} />
              </a>
              <a
                href={siteConfig.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/80 text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-md"
              >
                <Send size={24} />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/80 text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-md"
              >
                <Youtube size={24} />
              </a>
            </div>
          </FadeIn>

          {/* Scroll indicator */}
          <FadeIn delay={1.2}>
            <button
              onClick={() => scrollToSection('programs')}
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce text-neutral-400 hover:text-primary-600 transition-colors"
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
            </button>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
