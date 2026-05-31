'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/data/site-config';
import { Sparkles, Brain, Heart, Zap } from 'lucide-react';

const iconMap = { Sparkles, Brain, Heart, Zap };

export function MethodologySection() {
  const t = useTranslations('methodology');

  return (
    <section id="methodology" className="section-pad relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-20"
        >
          <span className="eyebrow mb-4">{t('subtitle')}</span>
          <h2 className="font-display mb-5 text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="gradient-text">{siteConfig.methodology.title.ru}</span>
          </h2>
          <p className="text-balance text-lg leading-relaxed text-muted">
            {siteConfig.methodology.description.ru}
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.methodology.steps.map((step, index) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group glass glass-hover gradient-border relative flex flex-col rounded-3xl p-7"
              >
                <span className="font-display absolute right-6 top-5 text-5xl font-bold text-white/5 transition-colors group-hover:text-primary/20">
                  0{index + 1}
                </span>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display mb-2 text-xl font-semibold">{step.title.ru}</h3>
                <p className="text-sm leading-relaxed text-muted">{step.description.ru}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
