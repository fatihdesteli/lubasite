'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { ContactForm } from '@/components/forms/ContactForm';
import { SocialLinks } from '@/components/shared/SocialLinks';

export function ContactSection() {
  const t = useTranslations('contact');
  const tSocial = useTranslations('social');

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <Container className="max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center sm:mb-16"
        >
          <span className="eyebrow mb-4">{t('subtitle')}</span>
          <h2 className="font-display mb-5 text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="gradient-text">{t('title')}</span>
          </h2>
          <p className="text-balance text-lg leading-relaxed text-muted">{t('description')}</p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="font-display mb-1 text-xl font-semibold">{tSocial('follow')}</h3>
              <p className="text-sm text-muted">{tSocial('subtitle')}</p>
            </div>

            <SocialLinks variant="pill" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass gradient-border rounded-3xl p-6 sm:p-8"
          >
            <ContactForm />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
