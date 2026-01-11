'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { programs } from '@/data/programs';
import { Clock, MapPin, ArrowRight, Sparkles } from 'lucide-react';

export function ProgramsSection() {
  const t = useTranslations('programs');
  const locale = useLocale() as 'ru' | 'en';

  const handleRegister = (programId: string) => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="programs" className="py-32 relative">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-20">
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 text-sm font-medium">
                <Sparkles size={14} />
                Наши программы
              </span>
            </motion.div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-neutral-900 via-primary-800 to-secondary-700 bg-clip-text text-transparent mb-6">
              {t('title')}
            </h2>
            <p className="text-2xl text-neutral-600 max-w-3xl mx-auto font-light">
              {t('subtitle')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ScrollReveal key={program.id} delay={index * 0.15} scale>
              <motion.div
                className="group relative h-full"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glass Card */}
                <div className="relative h-full backdrop-blur-xl bg-white/50 rounded-[2rem] p-8 border border-white/60 shadow-2xl overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-100/30 via-transparent to-secondary-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="relative space-y-6">
                    {/* Format Badge */}
                    <div className="flex items-center justify-between">
                      <span className="px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/90 to-secondary-500/90 text-white text-xs font-medium backdrop-blur-sm">
                        {program.subtitle[locale]}
                      </span>
                      <motion.div
                        className="w-12 h-12 rounded-full backdrop-blur-md bg-white/80 flex items-center justify-center shadow-lg"
                        whileHover={{ rotate: 90, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="text-primary-600" size={20} />
                      </motion.div>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-3xl font-bold text-neutral-900 leading-tight">
                      {program.title[locale]}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-700 leading-relaxed">
                      {program.description[locale]}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-col gap-3 pt-4">
                      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl backdrop-blur-md bg-white/60 border border-white/80">
                        <Clock size={18} className="text-primary-600" />
                        <span className="text-sm font-medium text-neutral-700">
                          {program.duration[locale]}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl backdrop-blur-md bg-white/60 border border-white/80">
                        <MapPin size={18} className="text-primary-600" />
                        <span className="text-sm font-medium text-neutral-700">
                          {program.format === 'online'
                            ? t('online.format')
                            : program.format === 'offline'
                            ? t('offline.format')
                            : t('individual.format')}
                        </span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-3 pt-4">
                      {program.highlights[locale].slice(0, 3).map((highlight, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-xs">✓</span>
                          </div>
                          <span className="text-sm text-neutral-700">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="pt-6 space-y-3">
                      {program.price && (
                        <div className="text-center py-3 px-4 rounded-2xl backdrop-blur-md bg-gradient-to-r from-primary-50 to-secondary-50 border border-white/60">
                          <p className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                            {program.price[locale]}
                          </p>
                        </div>
                      )}
                      <Button
                        size="lg"
                        className="w-full shadow-xl hover:shadow-2xl"
                        onClick={() => handleRegister(program.id)}
                      >
                        {t('register')}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* 3D Depth Shadow */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-200/20 to-secondary-200/20 rounded-[2rem] blur-2xl transform translate-y-4 group-hover:translate-y-6 transition-transform duration-300" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
