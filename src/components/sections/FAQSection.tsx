"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLocale } from "next-intl";
import { siteConfig } from "@/data/site-config";
import { Plus, Minus } from "lucide-react";

export const FAQSection = () => {
    // @ts-ignore
    const faqs = siteConfig.faq?.items || [];
    const locale = useLocale() as 'ru' | 'en';
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gradient-gold"
                    >
                        {/* @ts-ignore */}
                        {siteConfig.faq?.title?.[locale] || "Частые вопросы"}
                    </motion.h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq: any, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel rounded-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full text-left p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg md:text-xl font-medium text-white pr-8">
                                    {faq.question[locale]}
                                </span>
                                <span className={`p-2 rounded-full border border-white/10 transition-colors ${openIndex === index ? 'bg-indigo-500/20 text-indigo-300' : 'text-muted-foreground'}`}>
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                                            {faq.answer[locale]}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
