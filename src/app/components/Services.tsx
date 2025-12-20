"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Share2, TrendingUp, Users, FileText } from "lucide-react";

const services = [
    {
        icon: MapPin,
        color: "#0066FF",
        title: "Yerel Listeleme Yönetimi",
        description:
            "İşletme bilgilerinizi Google Business Profile, Facebook, Instagram, Apple Maps ve 60+ dijital platformda otomatik olarak senkronize edin.",
        features: [
            "Google Business Profile, Facebook, Instagram ve 60+ platformda merkezi yönetim",
            "Apple Maps, Waze dahil harita uygulamalarında görünürlük",
            "Gerçek zamanlı senkronizasyon ve otomatik güncelleme",
            "Çoklu lokasyon yönetimi (franchise işletmeler için ideal)",
        ],
    },
    {
        icon: Star,
        color: "#10B981",
        title: "İtibar Yönetimi",
        description:
            "Müşteri yorumlarınızı tek panelden yönetin. Yapay zeka destekli otomatik Türkçe yanıtlarla pozitif bir marka imajı oluşturun.",
        features: [
            "Google, Facebook ve tüm platformlardan yorumları tek yerde görün",
            "Yapay zeka ile otomatik Türkçe yanıt önerileri",
            "SMS ve e-posta ile otomatik yorum toplama sistemi",
            "Negatif yorum erken uyarı sistemi",
        ],
    },
    {
        icon: Share2,
        color: "#FF6B6B",
        title: "Sosyal Medya Yönetimi",
        description:
            "Facebook, Instagram ve Google Posts'u tek platformdan planlayın ve yayınlayın. Yapay zeka ile Türkçe içerik fikirleri alın.",
        features: [
            "Çoklu platform içerik planlama (Facebook, Instagram, Google)",
            "AI destekli Türkçe içerik önerileri ve otomatik oluşturma",
            "Görsel editör ve hazır şablon kütüphanesi",
            "Performans raporları ve engagement analizi",
        ],
    },
    {
        icon: TrendingUp,
        color: "#0066FF",
        title: "Yerel SEO Hizmetleri",
        description:
            "Google aramalarında işletmenizi öne çıkarın. 'Yakınımdaki' aramalarda müşterileriniz sizi bulsun.",
        features: [
            "Google anahtar kelime sıralama takibi",
            "Yerel arama görünürlüğü raporları (90 güne kadar veri)",
            "Rakip analizi ve benchmark karşılaştırmaları",
            "Google Business Profile optimizasyonu",
        ],
    },
    {
        icon: Users,
        color: "#00D9FF",
        title: "Müşteri İlişkileri Yönetimi",
        description:
            "Potansiyel müşterilerinizi takip edin, randevuları yönetin, teklifleri gönderin. Tüm müşteri bilgilerinizi tek bir yerde saklayın.",
        features: [
            "Satış pipeline yönetimi ve fırsat takibi",
            "Randevu ve toplantı takvimi entegrasyonu",
            "Teklif ve sözleşme oluşturma araçları",
            "Müşteri iletişim geçmişi ve notlar",
        ],
    },
];

export default function Services() {
    return (
        <section id="services" className="section">
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
                        Tek Platformda Tüm <span className="text-gradient">Dijital Pazarlama</span> İhtiyaçlarınız
                    </h2>
                    <p className="text-lg text-[var(--medium-gray)]" style={{ marginBottom: '3rem' }}>
                        İşletmenizi büyütmek için ihtiyacınız olan tüm araçlar, tek bir
                        kullanıcı dostu platformda.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="card group"
                        >
                            {/* Icon */}
                            <div
                                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                                style={{ backgroundColor: `${service.color}15` }}
                            >
                                <service.icon
                                    className="w-7 h-7"
                                    style={{ color: service.color }}
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--primary-blue)] transition-colors">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[var(--medium-gray)] mb-4 text-sm leading-relaxed">
                                {service.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-2">
                                {service.features.map((feature, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-2 text-sm text-[var(--dark-slate)]"
                                    >
                                        <span
                                            className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                                            style={{ backgroundColor: service.color }}
                                        />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
