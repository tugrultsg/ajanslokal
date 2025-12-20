"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-[72px] overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-blue)] via-[#0055DD] to-[var(--bright-cyan)] opacity-5" />

            {/* Decorative Elements */}
            <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[var(--primary-blue)] to-[var(--bright-cyan)] rounded-full blur-3xl opacity-10 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[var(--vibrant-coral)] to-[var(--coral-light)] rounded-full blur-3xl opacity-10 -translate-x-1/2" />

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center lg:text-left"
                    >
                        {/* Headline */}
                        <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-tight" style={{ marginBottom: '1.5rem' }}>
                            Türkiye&apos;nin KOBİ&apos;lerine Özel{" "}
                            <span className="text-gradient">Dijital Pazarlama</span>{" "}
                            Çözümleri
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg text-[var(--medium-gray)] max-w-xl mx-auto lg:mx-0" style={{ marginBottom: '2rem' }}>
                            Google Business, Facebook, Instagram ve 60+ dijital platformda
                            işletmenizin görünürlüğünü artırın. Müşteri yorumlarınızı yönetin.
                            Yapay zeka ile Türkçe içerik üretin.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" style={{ marginBottom: '3rem' }}>
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn btn-primary group"
                            >
                                Ücretsiz Demo Talep Et
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </motion.a>
                            <motion.a
                                href="#services"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn btn-secondary"
                            >
                                <Play className="w-5 h-5" />
                                Hizmetleri Keşfet
                            </motion.a>
                        </div>

                        {/* Trust Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[var(--border-gray)]">
                            <div className="text-center lg:text-left">
                                <p className="text-3xl font-bold text-[var(--deep-navy)]">60+</p>
                                <p className="text-sm text-[var(--medium-gray)]">Platform Entegrasyonu</p>
                            </div>
                            <div className="text-center lg:text-left">
                                <p className="text-3xl font-bold text-[var(--deep-navy)]">7/24</p>
                                <p className="text-sm text-[var(--medium-gray)]">Türkçe Destek</p>
                            </div>
                            <div className="text-center lg:text-left">
                                <p className="text-3xl font-bold text-[var(--deep-navy)]">%35</p>
                                <p className="text-sm text-[var(--medium-gray)]">Ortalama ROI Artışı</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content - Dashboard Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative hidden lg:block"
                    >
                        {/* Main Dashboard Card */}
                        <div className="relative bg-white rounded-2xl shadow-2xl p-6 border border-[var(--border-gray)]">
                            {/* Dashboard Header */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex gap-2">
                                    <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                                    <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                                </div>
                                <span className="text-sm text-[var(--medium-gray)]">ajanslokal Dashboard</span>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-[var(--light-gray)] rounded-xl p-4">
                                    <p className="text-sm text-[var(--medium-gray)] mb-1">Görüntülenme</p>
                                    <p className="text-2xl font-bold text-[var(--deep-navy)]">12,847</p>
                                    <span className="text-xs text-[var(--fresh-green)] font-medium">+23% bu ay</span>
                                </div>
                                <div className="bg-[var(--light-gray)] rounded-xl p-4">
                                    <p className="text-sm text-[var(--medium-gray)] mb-1">Yorum Puanı</p>
                                    <p className="text-2xl font-bold text-[var(--deep-navy)]">4.8 ⭐</p>
                                    <span className="text-xs text-[var(--fresh-green)] font-medium">+0.3 puan</span>
                                </div>
                            </div>

                            {/* Graph Placeholder */}
                            <div className="bg-gradient-to-r from-[var(--primary-blue)] to-[var(--bright-cyan)] rounded-xl p-4 mb-4">
                                <div className="flex justify-between items-end h-24">
                                    {[40, 65, 45, 80, 55, 90, 75].map((height, i) => (
                                        <div
                                            key={i}
                                            className="w-6 bg-white/30 rounded-t"
                                            style={{ height: `${height}%` }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Platform Icons */}
                            <div className="flex justify-center gap-4">
                                {["Google", "Facebook", "Instagram", "LinkedIn"].map((platform) => (
                                    <div
                                        key={platform}
                                        className="w-10 h-10 bg-[var(--light-gray)] rounded-lg flex items-center justify-center text-xs font-bold text-[var(--medium-gray)]"
                                    >
                                        {platform[0]}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
