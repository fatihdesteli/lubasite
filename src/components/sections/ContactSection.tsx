'use client';

import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Container } from '@/components/ui/Container';
import { ContactForm } from '@/components/forms/ContactForm';
import { siteConfig } from '@/data/site-config';
import { Mail, Phone, Instagram, Send, Youtube } from 'lucide-react';

export function ContactSection() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              {t('title')}
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">{t('subtitle')}</p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ScrollReveal delay={0.2}>
            <div>
              <ContactForm />
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal delay={0.4}>
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-6">
                  {t('or')}
                </h3>
                <div className="space-y-4">
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-3 text-neutral-700 hover:text-primary-600 transition-colors"
                  >
                    <Mail size={20} className="text-primary-500" />
                    <span>{siteConfig.contact.email}</span>
                  </a>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-center gap-3 text-neutral-700 hover:text-primary-600 transition-colors"
                  >
                    <Phone size={20} className="text-primary-500" />
                    <span>{siteConfig.contact.phone}</span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-neutral-900 mb-4">
                  {t('followMe')}
                </h3>
                <div className="flex gap-4">
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-neutral-100 text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-300"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href={siteConfig.social.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-neutral-100 text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-300"
                  >
                    <Send size={24} />
                  </a>
                  <a
                    href={siteConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-neutral-100 text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-300"
                  >
                    <Youtube size={24} />
                  </a>
                </div>
              </div>

              {/* Optional: Map or additional info */}
              <div className="mt-12 p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl">
                <p className="text-neutral-700 leading-relaxed italic">
                  "Каждое путешествие к себе начинается с первого шага. Свяжитесь со мной, и мы начнем этот путь вместе."
                </p>
                <p className="mt-2 font-medium text-neutral-900">
                  — {siteConfig.coach.name}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
