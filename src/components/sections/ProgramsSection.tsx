'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { programs } from '@/data/programs';
import { Clock, MapPin, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

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
    <section id="programs" className="py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-gradient-to-r from-violet-500/10 via-transparent to-teal-500/10 blur-[100px] pointer-events-none" />

      <Container>
        <div className="text-center mb-20 relative z-10">
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass-panel border-violet-500/30 text-violet-300 text-sm font-medium">
              <Sparkles size={14} className="text-gold-400" />
              {t('subtitle')}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-bold text-gradient-cosmic mb-6"
          >
            {t('title')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative h-full"
            >
              {/* Magic Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-teal-400 rounded-[2.1rem] blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

              {/* Glass Card */}
              <div className="relative h-full glass-card rounded-[2rem] p-8 overflow-hidden flex flex-col">

                {/* Format Badge */}
                <div className="flex items-center justify-between mb-8">
                  <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-teal-300 text-xs font-medium uppercase tracking-wider">
                    {program.subtitle[locale]}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-violet-500 transition-colors duration-300">
                    <ArrowRight className="text-white w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="font-serif text-3xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors">
                    {program.title[locale]}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {program.description[locale]}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-3 mb-8">
                    {program.highlights[locale].slice(0, 3).map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Info */}
                <div className="mt-auto pt-6 border-t border-white/5 space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-violet-400" />
                      <span>{program.duration[locale]}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-teal-400" />
                      <span>{program.format === 'online' ? t('online.format') : program.format === 'offline' ? t('offline.format') : t('individual.format')}</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => handleRegister(program.id)}
                    className="w-full bg-white/10 hover:bg-white/20 text-white border-none py-6 text-lg group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-indigo-600 transition-all duration-300"
                  >
                    {t('register')}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
