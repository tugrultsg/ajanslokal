"use client";

import { motion } from "framer-motion";
import { CloudUpload, Edit, Send, BarChart } from "lucide-react";

const steps = [
    {
        icon: CloudUpload,
        title: "İşletme Bilgilerinizi Ekleyin",
        description: "Platform, mevcut dijital varlığınızı otomatik tespit eder",
    },
    {
        icon: Edit,
        title: "Bilgilerinizi Güncelleyin ve Optimize Edin",
        description: "Eksik bilgileri tamamlayın, görselleri yükleyin, içeriği zenginleştirin",
    },
    {
        icon: Send,
        title: "Tüm Platformlarda Yayınlayın",
        description: "Tek tıkla 60+ platforma bilgilerinizi otomatik gönderin",
    },
    {
        icon: BarChart,
        title: "Performansınızı Takip Edin",
        description: "Detaylı raporlarla gelişiminizi izleyin, stratejinizi optimize edin",
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="section section-gradient relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>

            <div className="container relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mx-auto mb-16"
                >
                    <h2 className="text-white" style={{ marginBottom: '1.5rem' }}>Nasıl Çalışır?</h2>
                    <p className="text-white/80 text-lg" style={{ marginBottom: '3rem' }}>
                        4 basit adımda dijital varlığınızı güçlendirin
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.15 }}
                            className="relative text-center"
                        >
                            {/* Icon with Number */}
                            <div className="relative mx-auto" style={{ width: 'fit-content', marginBottom: '1.5rem' }}>
                                {/* Icon */}
                                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                                    <step.icon className="w-10 h-10 text-white" />
                                </div>
                                {/* Step Number - aligned to top right of icon */}
                                <div className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-[var(--primary-blue)] font-bold text-xl">{index + 1}</span>
                                </div>
                            </div>

                            {/* Title */}
                            <h4 className="text-white font-bold text-lg" style={{ marginBottom: '0.75rem' }}>{step.title}</h4>

                            {/* Description */}
                            <p className="text-white/70 text-sm">{step.description}</p>

                            {/* Connector Line */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-10 left-[calc(50%+50px)] w-[calc(100%-100px)] h-0.5 bg-white/20">
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white/40 rounded-full" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
