"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
    {
        quote:
            "ajanslokal sayesinde Google'da 'yakınımdaki restoran' aramalarında ilk 3'e girdik. Online sipariş taleplerinde %40 artış yaşadık. Platformun Türkçe desteği ve kullanım kolaylığı mükemmel.",
        name: "Mehmet Yılmaz",
        title: "Sahip",
        company: "Bella Vista Restaurant, İstanbul",
        avatar: "MY",
    },
    {
        quote:
            "5 şubemizin tüm dijital varlığını tek platformdan yönetmek inanılmaz vakit kazandırıyor. AI destekli yorum yanıtları sayesinde müşteri memnuniyetimiz %25 arttı.",
        name: "Ayşe Demir",
        title: "Pazarlama Müdürü",
        company: "FitZone Spor Salonları, Ankara",
        avatar: "AD",
    },
    {
        quote:
            "Önceden 3 farklı araç kullanıyorduk, şimdi her şey tek yerde. Sosyal medya içerik üretimi için harcadığımız süre yarıya indi. ROI'miz aylık %35 arttı.",
        name: "Can Özkan",
        title: "Genel Müdür",
        company: "TeknoServis, İzmir",
        avatar: "CÖ",
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);

    useEffect(() => {
        if (!autoPlay) return;
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [autoPlay]);

    const next = () => {
        setAutoPlay(false);
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setAutoPlay(false);
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="section">
            <div className="container flex flex-col items-center">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mx-auto mb-16"
                >
                    <h2 style={{ marginBottom: '1.5rem' }}>Müşterilerimiz Ne Diyor?</h2>
                    <p className="text-lg text-[var(--medium-gray)]" style={{ marginBottom: '3rem' }}>
                        Türkiye&apos;nin farklı sektörlerinden işletmelerin başarı hikayeleri
                    </p>
                </motion.div>

                {/* Testimonial Carousel */}
                <div className="relative w-full max-w-5xl">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-[var(--dark-slate)] hover:bg-[var(--light-gray)] transition-colors z-10"
                        aria-label="Önceki yorum"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-[var(--dark-slate)] hover:bg-[var(--light-gray)] transition-colors z-10"
                        aria-label="Sonraki yorum"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Testimonial Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative overflow-hidden">
                        {/* Quote Icon */}
                        <Quote className="absolute top-6 left-1/2 -translate-x-1/2 w-12 h-12 text-[var(--primary-blue)]/10" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="relative z-10 text-center"
                            >
                                {/* Quote */}
                                <p className="text-lg md:text-xl text-[var(--dark-slate)] leading-relaxed italic" style={{ marginBottom: '2rem' }}>
                                    &ldquo;{testimonials[current].quote}&rdquo;
                                </p>

                                {/* Author */}
                                <div className="flex flex-col items-center gap-3">
                                    {/* Avatar */}
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--primary-blue)] to-[var(--bright-cyan)] flex items-center justify-center text-white font-bold text-lg">
                                        {testimonials[current].avatar}
                                    </div>
                                    <div>
                                        <p className="font-bold text-[var(--deep-navy)]">
                                            {testimonials[current].name}
                                        </p>
                                        <p className="text-sm text-[var(--medium-gray)]">
                                            {testimonials[current].title}, {testimonials[current].company}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setAutoPlay(false);
                                    setCurrent(index);
                                }}
                                className={`w-2.5 h-2.5 rounded-full transition-colors ${index === current
                                    ? "bg-[var(--primary-blue)]"
                                    : "bg-[var(--border-gray)] hover:bg-[var(--medium-gray)]"
                                    }`}
                                aria-label={`Yorum ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
