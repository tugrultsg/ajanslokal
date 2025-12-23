"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Clock, CheckCircle, Loader2 } from "lucide-react";

const contactSchema = z.object({
    fullName: z.string().min(2, "En az 2 karakter gerekli"),
    email: z.string().email("Geçerli bir e-posta adresi girin"),
    phone: z.string().min(10, "Geçerli bir telefon numarası girin"),
    company: z.string().optional(),
    businessType: z.string().optional(),
    message: z.string().optional(),
    consent: z.boolean().refine((val) => val === true, "KVKK metnini kabul etmelisiniz"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const businessTypes = [
    "Seçiniz...",
    "Restoran / Kafe",
    "Perakende / Mağaza",
    "Hizmet Sağlayıcı",
    "Sağlık / Güzellik",
    "Gayrimenkul",
    "Otomotiv",
    "Eğitim",
    "Diğer",
];

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);

        try {
            const apiUrl = process.env.NEXT_PUBLIC_CONTACT_API_URL || '/api/contact';
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Bir hata oluştu');
            }

            setIsSuccess(true);
            reset();
        } catch (error) {
            console.error('Form submission error:', error);
            alert('Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mx-auto mb-16"
                >
                    <h2 style={{ marginBottom: '1.5rem' }}>Hadi Başlayalım!</h2>
                    <p className="text-lg text-[var(--medium-gray)]" style={{ marginBottom: '3rem' }}>
                        İşletmenizin dijital görünürlüğünü artırmak için bugün ücretsiz demo
                        talep edin.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {isSuccess ? (
                            <div className="bg-[var(--fresh-green)]/10 rounded-2xl p-8 text-center">
                                <CheckCircle className="w-16 h-16 text-[var(--fresh-green)] mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2">Teşekkürler!</h3>
                                <p className="text-[var(--medium-gray)]">
                                    Talebiniz alındı. Ekibimiz en kısa sürede sizinle iletişime geçecek.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                {/* Full Name */}
                                <div>
                                    <label className="block text-sm font-medium text-[var(--dark-slate)] mb-2">
                                        Ad Soyad *
                                    </label>
                                    <input
                                        {...register("fullName")}
                                        type="text"
                                        placeholder="Adınız Soyadınız"
                                        className={`input ${errors.fullName ? "input-error" : ""}`}
                                    />
                                    {errors.fullName && (
                                        <p className="text-[var(--vibrant-coral)] text-sm mt-1">
                                            {errors.fullName.message}
                                        </p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium text-[var(--dark-slate)] mb-2">
                                        E-posta *
                                    </label>
                                    <input
                                        {...register("email")}
                                        type="email"
                                        placeholder="ornek@email.com"
                                        className={`input ${errors.email ? "input-error" : ""}`}
                                    />
                                    {errors.email && (
                                        <p className="text-[var(--vibrant-coral)] text-sm mt-1">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-medium text-[var(--dark-slate)] mb-2">
                                        Telefon *
                                    </label>
                                    <input
                                        {...register("phone")}
                                        type="tel"
                                        placeholder="0(5XX) XXX XX XX"
                                        className={`input ${errors.phone ? "input-error" : ""}`}
                                    />
                                    {errors.phone && (
                                        <p className="text-[var(--vibrant-coral)] text-sm mt-1">
                                            {errors.phone.message}
                                        </p>
                                    )}
                                </div>

                                {/* Company */}
                                <div>
                                    <label className="block text-sm font-medium text-[var(--dark-slate)] mb-2">
                                        Şirket Adı
                                    </label>
                                    <input
                                        {...register("company")}
                                        type="text"
                                        placeholder="Şirketinizin adı"
                                        className="input"
                                    />
                                </div>

                                {/* Business Type */}
                                <div>
                                    <label className="block text-sm font-medium text-[var(--dark-slate)] mb-2">
                                        İşletme Türü
                                    </label>
                                    <select {...register("businessType")} className="input select">
                                        {businessTypes.map((type) => (
                                            <option key={type} value={type === "Seçiniz..." ? "" : type}>
                                                {type}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-sm font-medium text-[var(--dark-slate)] mb-2">
                                        Mesajınız
                                    </label>
                                    <textarea
                                        {...register("message")}
                                        placeholder="Size nasıl yardımcı olabiliriz?"
                                        rows={4}
                                        className="input textarea"
                                    />
                                </div>

                                {/* Consent */}
                                <div>
                                    <label className="flex items-start gap-3 cursor-pointer">
                                        <input
                                            {...register("consent")}
                                            type="checkbox"
                                            className="w-5 h-5 rounded border-[var(--border-gray)] text-[var(--primary-blue)] focus:ring-[var(--primary-blue)] mt-0.5"
                                        />
                                        <span className="text-sm text-[var(--medium-gray)]">
                                            <a href="#" className="text-[var(--primary-blue)] underline">
                                                KVKK aydınlatma metnini
                                            </a>{" "}
                                            okudum, kabul ediyorum. *
                                        </span>
                                    </label>
                                    {errors.consent && (
                                        <p className="text-[var(--vibrant-coral)] text-sm mt-1">
                                            {errors.consent.message}
                                        </p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn btn-primary w-full"
                                    style={{ marginTop: '1.5rem' }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Gönderiliyor...
                                        </>
                                    ) : (
                                        "Ücretsiz Demo Talep Et"
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:pl-8"
                    >
                        <h3 className="text-xl font-bold mb-8">İletişim Bilgileri</h3>

                        <div className="space-y-6">
                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[var(--primary-blue)]/10 rounded-xl flex items-center justify-center shrink-0">
                                    <Mail className="w-6 h-6 text-[var(--primary-blue)]" />
                                </div>
                                <div>
                                    <p className="font-medium text-[var(--dark-slate)]">E-posta</p>
                                    <a
                                        href="mailto:info@ajanslokal.com"
                                        className="text-[var(--primary-blue)] hover:underline"
                                    >
                                        info@ajanslokal.com
                                    </a>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[var(--primary-blue)]/10 rounded-xl flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6 text-[var(--primary-blue)]" />
                                </div>
                                <div>
                                    <p className="font-medium text-[var(--dark-slate)]">Adres</p>
                                    <p className="text-[var(--medium-gray)]">
                                        Levent, Büyükdere Cad. No:123
                                        <br />
                                        Şişli, İstanbul, Türkiye
                                    </p>
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[var(--primary-blue)]/10 rounded-xl flex items-center justify-center shrink-0">
                                    <Clock className="w-6 h-6 text-[var(--primary-blue)]" />
                                </div>
                                <div>
                                    <p className="font-medium text-[var(--dark-slate)]">Çalışma Saatleri</p>
                                    <p className="text-[var(--medium-gray)]">
                                        Pazartesi - Cuma: 09:00 - 18:00
                                        <br />
                                        Cumartesi: 10:00 - 15:00
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-8 pt-8 border-t border-[var(--border-gray)]">
                            <p className="font-medium text-[var(--dark-slate)] mb-4">Bizi Takip Edin</p>
                            <div className="flex gap-4">
                                {["LinkedIn", "Twitter", "Instagram", "Facebook"].map((social) => (
                                    <a
                                        key={social}
                                        href="#"
                                        className="w-10 h-10 bg-[var(--light-gray)] rounded-lg flex items-center justify-center text-[var(--medium-gray)] hover:bg-[var(--primary-blue)] hover:text-white transition-colors"
                                        aria-label={social}
                                    >
                                        {social[0]}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
