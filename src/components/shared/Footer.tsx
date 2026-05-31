'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { SocialLinks } from '@/components/shared/SocialLinks';
import { siteConfig } from '@/data/site-config';

const links = [
  { key: 'methodology', href: '#methodology' },
  { key: 'programs', href: '#programs' },
  { key: 'faq', href: '#faq' },
  { key: 'contact', href: '#contact' },
];

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="relative border-t border-white/5 py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-display gradient-text mb-3 text-xl font-bold">{siteConfig.name}</h3>
            <p className="max-w-xs text-sm leading-relaxed text-muted">{siteConfig.tagline.ru}</p>
          </div>

          <div className="md:justify-self-center">
            <h4 className="mb-4 font-semibold">{t('nav.programs')}</h4>
            <ul className="space-y-2.5">
              {links.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-accent-soft"
                  >
                    {t(`nav.${item.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:justify-self-end">
            <h4 className="mb-4 font-semibold">{t('social.follow')}</h4>
            <SocialLinks variant="pill" className="sm:flex-col" />
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 text-center text-sm text-muted">
          © {new Date().getFullYear()} {siteConfig.name}. {t('footer.rights')}
        </div>
      </Container>
    </footer>
  );
}
