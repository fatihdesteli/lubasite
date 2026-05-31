'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SocialLinks } from '@/components/shared/SocialLinks';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/data/site-config';

const navItems = [
  { key: 'home', href: '#home' },
  { key: 'methodology', href: '#methodology' },
  { key: 'programs', href: '#programs' },
  { key: 'faq', href: '#faq' },
  { key: 'contact', href: '#contact' },
];

export function Header() {
  const t = useTranslations('nav');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-strong py-3' : 'py-5'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between">
          <a href="#home" className="font-display gradient-text text-lg font-bold sm:text-xl">
            {siteConfig.name}
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm text-foreground/75 transition-colors hover:text-accent-soft"
              >
                {t(item.key)}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <SocialLinks size="sm" />
          </div>

          <button
            className="md:hidden"
            aria-label="Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="glass-strong mt-4 overflow-hidden rounded-2xl p-4 md:hidden"
            >
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-foreground/80 transition-colors hover:bg-white/5 hover:text-accent-soft"
                >
                  {t(item.key)}
                </a>
              ))}
              <div className="mt-3 border-t border-white/5 px-4 pt-4">
                <SocialLinks size="md" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
}
