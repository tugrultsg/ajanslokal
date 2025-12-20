"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
    {
        name: "Başlangıç",
        price: "₺1,499",
        period: "/ay",
        description: "Küçük işletmeler için",
        popular: false,
        features: [
            "1 lokasyon",
            "Temel listeleme yönetimi",
            "Yorum yönetimi",
            "Aylık performans raporları",
            "E-posta desteği",
            "Temel analitik",
        ],
        cta: "Hemen Başla",
        ctaStyle: "secondary",
    },
    {
        name: "Profesyonel",
        price: "₺2,999",
        period: "/ay",
        description: "Büyüyen işletmeler için",
        popular: true,
        features: [
            "3 lokasyona kadar",
            "Tüm listeleme özellikleri",
            "Sosyal medya yönetimi",
            "Yerel SEO takibi",
            "AI destekli içerik ve yanıtlar",
            "Öncelikli destek",
            "Detaylı analitik ve raporlar",
            "CRM modülü",
        ],
        cta: "Demo Talep Et",
        ctaStyle: "primary",
    },
    {
        name: "Kurumsal",
        price: "Özel Fiyat",
        period: "",
        description: "Büyük işletmeler ve franchise'lar için",
        popular: false,
        features: [
            "Sınırsız lokasyon",
            "Tüm profesyonel özellikler",
            "Özel CRM konfigürasyonu",
            "API erişimi",
            "Özel onboarding desteği",
            "Özel hesap yöneticisi",
            "SLA garantisi",
            "Beyaz etiket (white label) seçeneği",
        ],
        cta: "İletişime Geç",
        ctaStyle: "secondary",
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="section section-light">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mx-auto mb-16"
                >
                    <h2 style={{ marginBottom: '1.5rem' }}>Size Uygun Paketi Seçin</h2>
                    <p className="text-lg text-[var(--medium-gray)]" style={{ marginBottom: '3rem' }}>
                        İşletmenizin ihtiyaçlarına göre esnek paketler. Taahhütsüz, istediğiniz
                        zaman iptal edebilirsiniz.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className={`relative bg-white rounded-2xl flex flex-col ${plan.popular
                                ? "border-2 border-[var(--primary-blue)] shadow-xl scale-[1.02]"
                                : "border border-[var(--border-gray)] shadow-md"
                                } hover:shadow-lg transition-shadow`}
                            style={{ padding: '2.5rem' }}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[var(--vibrant-coral)] to-[var(--coral-light)] text-white text-sm font-semibold px-4 py-1 rounded-full">
                                    En Popüler
                                </div>
                            )}

                            {/* Plan Name */}
                            <h3 className="text-xl font-bold" style={{ marginBottom: '1rem' }}>{plan.name}</h3>

                            {/* Price */}
                            <div style={{ marginBottom: '0.75rem' }}>
                                <span className="text-4xl font-extrabold text-[var(--deep-navy)]">
                                    {plan.price}
                                </span>
                                <span className="text-[var(--medium-gray)]">{plan.period}</span>
                            </div>

                            {/* Description */}
                            <p className="text-[var(--medium-gray)] text-sm" style={{ marginBottom: '1.5rem' }}>
                                {plan.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-3 flex-grow" style={{ marginBottom: '2rem' }}>
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm">
                                        <Check className="w-5 h-5 text-[var(--fresh-green)] shrink-0 mt-0.5" />
                                        <span className="text-[var(--dark-slate)]">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button - at bottom */}
                            <a
                                href="#contact"
                                className={`btn w-full justify-center mt-auto ${plan.ctaStyle === "primary" ? "btn-primary" : "btn-secondary"
                                    }`}
                            >
                                {plan.cta}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
