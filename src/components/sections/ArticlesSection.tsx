'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { articles } from '@/data/articles';
import { Clock, Calendar } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import Image from 'next/image';

export function ArticlesSection() {
  const t = useTranslations('articles');
  const locale = useLocale() as 'ru' | 'en';
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);

  return (
    <section id="articles" className="py-20 md:py-32 relative">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              {t('title')}
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">{t('subtitle')}</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <ScrollReveal key={article.id} delay={index * 0.1} scale>
              <Card variant="interactive" hover className="h-full flex flex-col cursor-pointer" onClick={() => setSelectedArticle(article)}>
                <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
                  <Image
                    src={article.image}
                    alt={article.title[locale]}
                    fill
                    className="object-cover"
                  />
                </div>

                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-neutral-500 mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{formatDate(article.publishedAt, locale)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>
                        {article.readingTime} {t('readingTime')}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-neutral-900 line-clamp-2">
                    {article.title[locale]}
                  </h3>
                </CardHeader>

                <CardContent className="flex-grow">
                  <p className="text-neutral-600 line-clamp-3">{article.excerpt[locale]}</p>
                </CardContent>

                <div className="p-6 pt-0">
                  <Button variant="ghost" size="sm" className="w-full">
                    {t('readMore')} →
                  </Button>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Container>

      {/* Article Modal */}
      <Modal
        open={!!selectedArticle}
        onOpenChange={() => setSelectedArticle(null)}
        title={selectedArticle?.title[locale]}
        size="xl"
      >
        {selectedArticle && (
          <div className="prose prose-lg max-w-none">
            <div className="flex items-center gap-4 text-sm text-neutral-500 mb-6">
              <span>{formatDate(selectedArticle.publishedAt, locale)}</span>
              <span>•</span>
              <span>
                {selectedArticle.readingTime} {t('readingTime')}
              </span>
              <span>•</span>
              <span>{selectedArticle.author}</span>
            </div>
            <div
              className="whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: selectedArticle.content[locale] }}
            />
          </div>
        )}
      </Modal>
    </section>
  );
}
