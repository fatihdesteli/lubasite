'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Container } from '@/components/ui/Container';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { programs } from '@/data/programs';
import { Clock, MapPin } from 'lucide-react';
import Image from 'next/image';

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
    <section id="programs" className="py-20 md:py-32 bg-white">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              {t('title')}
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">{t('subtitle')}</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ScrollReveal key={program.id} delay={index * 0.1} scale>
              <Card variant="interactive" hover className="h-full flex flex-col">
                <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
                  <Image
                    src={program.image}
                    alt={program.title[locale]}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{program.subtitle[locale]}</p>
                  </div>
                </div>

                <CardHeader>
                  <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-2">
                    {program.title[locale]}
                  </h3>
                </CardHeader>

                <CardContent className="flex-grow space-y-4">
                  <p className="text-neutral-600 leading-relaxed">
                    {program.description[locale]}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-neutral-500">
                      <Clock size={16} />
                      <span>{program.duration[locale]}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-neutral-500">
                      <MapPin size={16} />
                      <span>
                        {program.format === 'online'
                          ? t('online.format')
                          : program.format === 'offline'
                          ? t('offline.format')
                          : t('individual.format')}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    {program.highlights[locale].slice(0, 3).map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1">✓</span>
                        <span className="text-sm text-neutral-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="space-y-3">
                  {program.price && (
                    <p className="text-lg font-semibold text-primary-600">
                      {program.price[locale]}
                    </p>
                  )}
                  <div className="flex gap-2 w-full">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => handleRegister(program.id)}
                    >
                      {t('learnMore')}
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={() => handleRegister(program.id)}
                    >
                      {t('register')}
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
