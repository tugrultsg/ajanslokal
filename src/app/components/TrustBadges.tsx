"use client";

import { motion } from "framer-motion";
import { CheckCircle, Zap, Shield, TrendingUp } from "lucide-react";

const platforms = [
    {
        name: "Google Business",
        logo: (
            <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
        )
    },
    {
        name: "Facebook",
        logo: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        )
    },
    {
        name: "Instagram",
        logo: (
            <svg className="w-6 h-6" viewBox="0 0 24 24">
                <defs>
                    <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#F58529" />
                        <stop offset="50%" stopColor="#DD2A7B" />
                        <stop offset="100%" stopColor="#8134AF" />
                    </linearGradient>
                </defs>
                <path fill="url(#instagram-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        )
    },
    {
        name: "Google Maps",
        logo: (
            <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687-.391.003-.504-.321-.609-.63-.115-.334-.213-.673-.336-1.006-.123-.334-.252-.666-.396-.99-.448-.97-1.096-1.862-1.735-2.716-1.298-1.736-2.794-3.34-3.927-5.239-.977-1.64-1.696-3.506-1.631-5.464.064-1.917.773-3.811 2.013-5.306C8.07.79 10.763-.353 13.494.202c2.056.418 3.867 1.61 5.04 3.299.264.38.498.78.699 1.193.02.044.041.088.063.132.037.073.073.147.108.22.01.023.022.046.033.069l.09.206z" />
                <path fill="#FFFFFF" d="M12 6.75c1.795 0 3.25 1.455 3.25 3.25s-1.455 3.25-3.25 3.25-3.25-1.455-3.25-3.25 1.455-3.25 3.25-3.25z" />
            </svg>
        )
    },
    {
        name: "Twitter/X",
        logo: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#000000">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        )
    },
    {
        name: "Apple Maps",
        logo: (
            <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#34C759" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle fill="#FFFFFF" cx="12" cy="9" r="2.5" />
            </svg>
        )
    },
];

const features = [
    { icon: CheckCircle, text: "60+ Platform Entegrasyonu" },
    { icon: Zap, text: "Yapay Zeka Destekli Otomasyon" },
    { icon: Shield, text: "7/24 Türkçe Müşteri Desteği" },
    { icon: TrendingUp, text: "Ölçülebilir Sonuçlar" },
];

export default function TrustBadges() {
    return (
        <section className="section section-light">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mx-auto" style={{ marginBottom: '2rem' }}
                >
                    <h2 style={{ marginBottom: '0' }}>
                        Entegre Olduğumuz Platformlar
                    </h2>
                </motion.div>

                {/* Platform Logos */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap justify-center items-center gap-4 md:gap-6"
                    style={{ marginBottom: '3rem' }}
                >
                    {platforms.map((platform, index) => (
                        <motion.div
                            key={platform.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 shadow-sm border border-[var(--border-gray)] hover:shadow-md hover:border-[var(--primary-blue)] transition-all cursor-default"
                        >
                            {platform.logo}
                            <span className="text-[var(--dark-slate)] font-semibold whitespace-nowrap">
                                {platform.name}
                            </span>
                        </motion.div>
                    ))}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: platforms.length * 0.05 }}
                        className="bg-gradient-to-r from-[var(--primary-blue)] to-[var(--bright-cyan)] rounded-xl px-5 py-3 shadow-sm"
                    >
                        <span className="text-white font-semibold">+55 Daha</span>
                    </motion.div>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.text}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                            className="flex flex-col items-center text-center gap-3 p-4"
                        >
                            <feature.icon className="w-8 h-8 text-[var(--primary-blue)]" />
                            <span className="text-[var(--dark-slate)] font-medium text-sm md:text-base">
                                {feature.text}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
