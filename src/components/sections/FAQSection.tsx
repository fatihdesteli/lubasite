'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/data/site-config';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad relative overflow-hidden">
      <Container className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="gradient-text">{siteConfig.faq.title.ru}</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {siteConfig.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`glass overflow-hidden rounded-2xl transition-colors ${
                  isOpen ? 'border-primary/40' : ''
                }`}
              >
                <button
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-medium">{item.question.ru}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 leading-relaxed text-muted">{item.answer.ru}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
