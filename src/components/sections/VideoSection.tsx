'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/data/site-config';

function getEmbedUrl(url: string): string | null {
  // YouTube
  const yt = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/);
  if (yt) return `https://www.youtube-nocookie.com/embed/${yt[1]}`;
  // Vimeo
  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`;
  return null;
}

const isFile = (url: string) => /\.(mp4|webm|mov|m4v|ogg)(\?.*)?$/i.test(url);

export function VideoSection() {
  const { video } = siteConfig;
  if (!video.src) return null;

  const embedUrl = getEmbedUrl(video.src);

  return (
    <section id="video" className="section-pad relative overflow-hidden">
      <Container className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <h2 className="font-display mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="gradient-text">{video.title.ru}</span>
          </h2>
          {video.description.ru && (
            <p className="text-balance text-lg leading-relaxed text-muted">
              {video.description.ru}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass gradient-border overflow-hidden rounded-3xl p-2"
        >
          <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black">
            {isFile(video.src) ? (
              <video
                className="h-full w-full"
                controls
                preload="metadata"
                playsInline
                poster={video.poster || undefined}
              >
                <source src={video.src} />
              </video>
            ) : embedUrl ? (
              <iframe
                src={embedUrl}
                className="h-full w-full"
                title={video.title.ru}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
              />
            ) : (
              <iframe
                src={video.src}
                className="h-full w-full"
                title={video.title.ru}
                allowFullScreen
              />
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
