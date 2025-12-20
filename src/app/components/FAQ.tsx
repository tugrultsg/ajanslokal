"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "ajanslokal nedir?",
        answer:
            "ajanslokal, Türk KOBİ'lerinin dijital varlıklarını tek platformdan yönetmelerini sağlayan kapsamlı bir dijital pazarlama çözümüdür. Google Business Profile, sosyal medya, yorum yönetimi, SEO ve CRM araçlarını tek çatı altında topluyoruz.",
    },
    {
        question: "Hangi platformları destekliyorsunuz?",
        answer:
            "Google Business Profile, Google Maps, Facebook, Instagram, LinkedIn, Twitter/X başta olmak üzere 60+ dijital platform ve dizini destekliyoruz. Ayrıca Apple Maps, Waze gibi harita uygulamalarında da görünürlük sağlıyoruz.",
    },
    {
        question: "Kurulum ne kadar sürer?",
        answer:
            "Temel kurulum 15-30 dakika sürer. Platformumuz mevcut dijital varlığınızı otomatik tespit eder ve eksik bilgileri tamamlamanız için size rehberlik eder. Demo sonrası aynı gün kullanmaya başlayabilirsiniz.",
    },
    {
        question: "Teknik bilgiye ihtiyaç var mı?",
        answer:
            "Hayır. Platformumuz kullanıcı dostu arayüzü ile teknik bilgi gerektirmez. Temel bilgisayar kullanımı yeterlidir. Ayrıca sürekli destek sağlıyoruz.",
    },
    {
        question: "Destek hizmeti nasıl çalışıyor?",
        answer:
            "Türkçe müşteri destek ekibimiz e-posta ve canlı chat ile haftanın 7 günü size yardımcı olur. Profesyonel ve Kurumsal planlarda öncelikli destek sağlıyoruz.",
    },
    {
        question: "İstediğim zaman iptal edebilir miyim?",
        answer:
            "Evet, tüm planlarımız taahhütsüzdür. İstediğiniz zaman iptal edebilir, aboneliğinizi yükseltebilir veya düşürebilirsiniz. İptal durumunda verilerinizi size teslim ederiz.",
    },
    {
        question: "Yapay zeka içerik üretimi nasıl çalışıyor?",
        answer:
            "Platformumuz, işletmeniz hakkında öğrendiklerini kullanarak Türkçe sosyal medya içeriği, yorum yanıtları ve Google Posts önerileri oluşturur. Siz bu önerileri onaylar veya düzenlersiniz.",
    },
    {
        question: "Verilerim güvende mi?",
        answer:
            "Evet, tüm verileriniz şifreli olarak saklanır ve KVKK uyumlu şekilde işlenir. Verilerinizi asla üçüncü şahıslarla paylaşmayız.",
    },
    {
        question: "Birden fazla lokasyonum var, nasıl yönetirim?",
        answer:
            "Profesyonel ve Kurumsal planlarımızda çoklu lokasyon yönetimi bulunur. Tüm lokasyonlarınızı tek panelden yönetebilir, toplu güncelleme yapabilir ve lokasyon bazında raporlar alabilirsiniz.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="section section-light">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mx-auto mb-16"
                >
                    <h2 style={{ marginBottom: '3rem' }}>Sıkça Sorulan Sorular</h2>
                </motion.div>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="bg-white rounded-xl shadow-sm border border-[var(--border-gray)] overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-5 text-left hover:bg-[var(--light-gray)] transition-colors"
                            >
                                <span className="font-semibold text-[var(--deep-navy)] pr-4">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-[var(--medium-gray)] shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="px-5 pb-5 text-[var(--medium-gray)] leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
