'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { testimonials } from '@/data/testimonials';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

export function TestimonialsSection() {
  const t = useTranslations('testimonials');
  const locale = useLocale() as 'ru' | 'en';

  const featuredTestimonials = testimonials.filter((t) => t.featured);

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <Container>
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-serif font-bold text-gradient-gold mb-6"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-violet-200/80 max-w-3xl mx-auto italic"
          >
            - {t('subtitle')} -
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-[2rem] relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 rotate-180" />

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating || 5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-gold-400 fill-gold-400"
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-300 leading-relaxed italic mb-8 relative z-10">
                "{testimonial.content[locale]}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                {testimonial.image ? (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name[locale]}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-teal-500 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name[locale][0]}
                  </div>
                )}

                <div>
                  <p className="font-semibold text-white group-hover:text-gold-400 transition-colors">
                    {testimonial.name[locale]}
                  </p>
                  {testimonial.role && (
                    <p className="text-sm text-gray-400">{testimonial.role[locale]}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
