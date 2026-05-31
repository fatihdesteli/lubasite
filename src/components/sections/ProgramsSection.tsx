'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { programs } from '@/data/programs';
import { Clock, MapPin, ArrowUpRight, Check } from 'lucide-react';
import { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { ContactForm } from '@/components/forms/ContactForm';

export function ProgramsSection() {
  const t = useTranslations('programs');
  const [registerProgram, setRegisterProgram] = useState<string | null>(null);
  const [detailsProgram, setDetailsProgram] = useState<string | null>(null);

  const formatLabels: Record<string, string> = {
    online: t('formats.online'),
    offline: t('formats.offline'),
    individual: t('formats.individual'),
  };

  const details = programs.find((p) => p.id === detailsProgram);

  return (
    <section id="programs" className="section-pad relative overflow-hidden">
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
            <span className="gradient-text">{t('title')}</span>
          </h2>
          <p className="text-balance text-lg leading-relaxed text-muted">{t('description')}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass glass-hover gradient-border flex flex-col rounded-3xl p-7"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent-soft">
                  {program.subtitle.ru}
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
              </div>

              <h3 className="font-display mb-3 text-2xl font-semibold leading-snug">
                {program.title.ru}
              </h3>
              <p className="mb-6 line-clamp-4 flex-grow text-sm leading-relaxed text-muted">
                {program.description.ru}
              </p>

              <div className="mb-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                <span className="flex items-center gap-2 text-muted">
                  <Clock className="h-4 w-4 text-primary" />
                  {program.duration.ru}
                </span>
                <span className="flex items-center gap-2 text-muted">
                  <MapPin className="h-4 w-4 text-primary" />
                  {formatLabels[program.format]}
                </span>
              </div>

              <div className="mb-7 space-y-2.5">
                {program.highlights.ru.slice(0, 3).map((highlight, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                    <span className="text-foreground/80">{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                <Button
                  variant="secondary"
                  className="flex-1"
                  onClick={() => setDetailsProgram(program.id)}
                >
                  {t('learnMore')}
                </Button>
                <Button className="flex-1" onClick={() => setRegisterProgram(program.id)}>
                  {t('register')}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Details modal */}
      <Modal
        open={detailsProgram !== null}
        onOpenChange={(open) => !open && setDetailsProgram(null)}
        title={details?.title.ru || ''}
        size="lg"
      >
        {details && (
          <div className="space-y-5">
            <span className="eyebrow">{details.subtitle.ru}</span>
            <p className="leading-relaxed text-muted">{details.description.ru}</p>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <span className="flex items-center gap-2 text-muted">
                <Clock className="h-4 w-4 text-primary" />
                {details.duration.ru}
              </span>
              <span className="flex items-center gap-2 text-muted">
                <MapPin className="h-4 w-4 text-primary" />
                {formatLabels[details.format]}
              </span>
            </div>

            <div className="space-y-2.5">
              {details.highlights.ru.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  <span className="text-foreground/80">{h}</span>
                </div>
              ))}
            </div>

            <Button
              className="w-full"
              onClick={() => {
                setRegisterProgram(details.id);
                setDetailsProgram(null);
              }}
            >
              {t('register')}
            </Button>
          </div>
        )}
      </Modal>

      {/* Registration modal */}
      <Modal
        open={registerProgram !== null}
        onOpenChange={(open) => !open && setRegisterProgram(null)}
        title={programs.find((p) => p.id === registerProgram)?.title.ru || ''}
        size="lg"
      >
        <ContactForm />
      </Modal>
    </section>
  );
}
