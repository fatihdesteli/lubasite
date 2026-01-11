"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { siteConfig } from "@/data/site-config";
import { Sparkles, Brain, Heart, Zap } from "lucide-react";

const icons = {
  Sparkles,
  Brain,
  Heart,
  Zap,
};

export const MethodologySection = () => {
  // @ts-ignore
  const locale = useLocale() as 'ru' | 'en';
  // @ts-ignore
  const steps = siteConfig.methodology?.steps || [];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-violet-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gradient-cosmic"
          >
            {/* @ts-ignore */}
            {siteConfig.methodology?.title?.[locale] || "Наша Методика"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            {/* @ts-ignore */}
            {siteConfig.methodology?.description?.[locale] || "Уникальный подход к раскрытию вашего потенциала"}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step: any, index: number) => {
            // @ts-ignore
            const Icon = icons[step.icon as keyof typeof icons] || Sparkles;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass-card p-8 rounded-2xl h-full border border-white/5 hover:border-white/20 group">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-500/20 to-teal-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-teal-300 transition-colors">
                    {step.title[locale]}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {step.description[locale]}
                  </p>

                  <div className="absolute -z-10 inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                </div>

                {/* Connector Line for Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(100%-2rem)] w-[calc(100%+4rem)] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent -z-20 transform translate-x-4" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
