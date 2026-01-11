'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Container } from '@/components/ui/Container';
import { Modal } from '@/components/ui/Modal';
import { videos } from '@/data/videos';
import { Play } from 'lucide-react';

// Helper to convert YouTube URL to embed URL
function getYouTubeEmbedUrl(url: string): string {
  const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop();
  return `https://www.youtube.com/embed/${videoId}`;
}

export function VideoSection() {
  const t = useTranslations('videos');
  const locale = useLocale() as 'ru' | 'en';
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="videos" className="py-20 md:py-32 bg-gradient-to-br from-primary-50/30 to-secondary-50/30">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              {t('title')}
            </h2>
            <p className="text-2xl text-neutral-700 max-w-3xl mx-auto">{t('subtitle')}</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {videos.map((video, index) => (
            <ScrollReveal key={video.id} delay={index * 0.1}>
              <button
                onClick={() => setSelectedVideo(video.url)}
                className="group relative aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="text-primary-600 ml-1" size={32} fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <p className="text-white font-medium text-sm">{video.title[locale]}</p>
                </div>
                <div className="absolute inset-0 bg-neutral-200">
                  <div className="w-full h-full flex items-center justify-center text-neutral-400">
                    <Play size={48} />
                  </div>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </Container>

      {/* Video Modal */}
      <Modal
        open={!!selectedVideo}
        onOpenChange={() => setSelectedVideo(null)}
        size="xl"
      >
        {selectedVideo && (
          <div className="aspect-video w-full">
            <iframe
              src={getYouTubeEmbedUrl(selectedVideo)}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </Modal>
    </section>
  );
}
