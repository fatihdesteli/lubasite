'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Instagram, Send, Youtube, Sparkles, ArrowRight } from 'lucide-react';
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
        <div className="max-w-5xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass-card border border-violet-500/30 text-violet-200">
              <Sparkles size={16} className="text-gold-400" />
              <span className="text-sm tracking-wide uppercase font-medium">Premium Personal Development</span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-tight"
          >
            <span className="text-white drop-shadow-lg">{t('site.title')}</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-200/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {t('site.tagline')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('programs')}
              className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white rounded-full px-10 py-7 text-lg shadow-lg shadow-violet-500/25 border-none"
            >
              {t('hero.cta')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('videos')}
              className="glass-card hover:bg-white/10 text-white border-white/10 rounded-full px-10 py-7 text-lg"
            >
              <Youtube className="mr-2 w-5 h-5 text-red-400" />
              Watch Video
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-6"
          >
            <span className="text-white/40 text-sm font-medium uppercase tracking-wider">Connect with me</span>
            <div className="w-12 h-[1px] bg-white/10" />
            <div className="flex gap-4">
              {[
                { icon: Instagram, url: siteConfig.social.instagram, color: "hover:text-pink-400" },
                { icon: Send, url: siteConfig.social.telegram, color: "hover:text-blue-400" },
                { icon: Youtube, url: siteConfig.social.youtube, color: "hover:text-red-400" },
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full glass-card text-white/70 transition-all duration-300 hover:scale-110 hover:bg-white/10 ${social.color}`}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
