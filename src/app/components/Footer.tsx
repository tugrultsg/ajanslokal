import Link from "next/link";

const footerLinks = {
    services: {
        title: "Hizmetler",
        links: [
            { name: "Yerel Listeleme", href: "#services" },
            { name: "İtibar Yönetimi", href: "#services" },
            { name: "Sosyal Medya", href: "#services" },
            { name: "Yerel SEO", href: "#services" },
            { name: "CRM", href: "#services" },
        ],
    },
    company: {
        title: "Şirket",
        links: [
            { name: "Hakkımızda", href: "#why-us" },
            { name: "Blog", href: "/blog" },
            { name: "Kariyer", href: "#" },
            { name: "Basın Kiti", href: "#" },
            { name: "İletişim", href: "#contact" },
        ],
    },
    resources: {
        title: "Kaynaklar",
        links: [
            { name: "Blog Ana Sayfa", href: "/blog" },
            { name: "Google Business Rehberi", href: "/blog" },
            { name: "Yerel SEO İpuçları", href: "/blog" },
            { name: "Sosyal Medya Stratejileri", href: "/blog" },
            { name: "İşletme Kılavuzları", href: "/blog" },
        ],
    },
    legal: {
        title: "Yasal",
        links: [
            { name: "Gizlilik Politikası", href: "#" },
            { name: "Kullanım Şartları", href: "#" },
            { name: "KVKK Aydınlatma Metni", href: "#" },
            { name: "Çerez Politikası", href: "#" },
        ],
    },
};

export default function Footer() {
    return (
        <footer className="section-dark pt-16 pb-8">
            <div className="container">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-white/10">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block mb-4">
                            <span className="text-2xl font-extrabold text-white">ajanslokal</span>
                        </Link>
                        <p className="text-white/60 text-sm mb-6">
                            Türk işletmeleri için yapay zeka destekli dijital pazarlama platformu.
                        </p>
                        <div className="space-y-2 text-sm">
                            <p className="text-white/80">
                                <span className="text-white/60">E-posta:</span>{" "}
                                <a href="mailto:info@ajanslokal.com" className="hover:text-white">
                                    info@ajanslokal.com
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Links Columns */}
                    {Object.entries(footerLinks).map(([key, section]) => (
                        <div key={key}>
                            <h4 className="text-white font-semibold mb-4">{section.title}</h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-white/60 text-sm hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/60 text-sm">
                        © {new Date().getFullYear()} ajanslokal. Tüm hakları saklıdır.
                    </p>
                    <div className="flex items-center gap-6 text-sm">
                        <Link href="#" className="text-white/60 hover:text-white transition-colors">
                            Gizlilik
                        </Link>
                        <Link href="#" className="text-white/60 hover:text-white transition-colors">
                            Şartlar
                        </Link>
                        <Link href="#" className="text-white/60 hover:text-white transition-colors">
                            Çerezler
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
