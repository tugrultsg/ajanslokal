"use client";

import { motion } from "framer-motion";
import { MapPin, Sparkles, Layers, Headphones, Zap, PiggyBank } from "lucide-react";

const features = [
    {
        icon: MapPin,
        title: "Türkiye'ye Özel Çözüm",
        description:
            "Google odaklı, Türk pazarına uygun optimizasyonlar. Türkçe içerik üretimi ve yerel SEO stratejileri.",
    },
    {
        icon: Sparkles,
        title: "Yapay Zeka Destekli",
        description:
            "Türkçe içerik üretimi, yorum yanıtlama ve sosyal medya paylaşımları için akıllı otomasyon.",
    },
    {
        icon: Layers,
        title: "Hepsi Bir Arada",
        description:
            "5+ ayrı aracın yerine tek platform. Listing, yorum, sosyal medya, SEO ve CRM tek yerden.",
    },
    {
        icon: Headphones,
        title: "7/24 Destek",
        description: "Türkçe müşteri desteği. E-posta ve canlı chat ile her zaman yanınızdayız.",
    },
    {
        icon: Zap,
        title: "Kolay Kullanım",
        description:
            "Teknik bilgi gerektirmez. Kullanıcı dostu arayüz ile dakikalar içinde başlayın.",
    },
    {
        icon: PiggyBank,
        title: "Uygun Fiyat",
        description:
            "Kurumsal özellikler, KOBİ fiyatları. Abonelik planlarımız her bütçeye uygun.",
    },
];

export default function WhyChooseUs() {
    return (
        <section id="why-us" className="section">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mx-auto mb-16"
                >
                    <h2 style={{ marginBottom: '1.5rem' }}>
                        Neden <span className="text-gradient">ajanslokal</span>?
                    </h2>
                    <p className="text-lg text-[var(--medium-gray)]" style={{ marginBottom: '3rem' }}>
                        Türk işletmelerinin dijital başarısı için özel olarak tasarlanmış çözümler
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex gap-4 p-6 rounded-xl hover:bg-[var(--light-gray)] transition-colors"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 bg-[var(--primary-blue)]/10 rounded-xl flex items-center justify-center shrink-0">
                                <feature.icon className="w-6 h-6 text-[var(--primary-blue)]" />
                            </div>

                            {/* Content */}
                            <div>
                                <h4 className="font-bold mb-2">{feature.title}</h4>
                                <p className="text-[var(--medium-gray)] text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
