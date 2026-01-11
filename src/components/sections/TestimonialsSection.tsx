'use client';

import { useTranslations, useLocale } from 'next-intl';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { testimonials } from '@/data/testimonials';
import { Star } from 'lucide-react';
import Image from 'next/image';

export function TestimonialsSection() {
  const t = useTranslations('testimonials');
  const locale = useLocale() as 'ru' | 'en';

  const featuredTestimonials = testimonials.filter((t) => t.featured);

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              {t('title')}
            </h2>
            <p className="text-2xl text-neutral-700 max-w-3xl mx-auto italic">
              {t('subtitle')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {featuredTestimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 0.1} scale>
              <Card className="h-full">
                <CardContent className="p-8 space-y-4">
                  {/* Rating */}
                  {testimonial.rating && (
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className="text-gold-500 fill-gold-500"
                        />
                      ))}
                    </div>
                  )}

                  {/* Content */}
                  <blockquote className="text-neutral-700 leading-relaxed italic">
                    "{testimonial.content[locale]}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-neutral-200">
                    {testimonial.image && (
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name[locale]}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-neutral-900">
                        {testimonial.name[locale]}
                      </p>
                      {testimonial.role && (
                        <p className="text-sm text-neutral-600">{testimonial.role[locale]}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
