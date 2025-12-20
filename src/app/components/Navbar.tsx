"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Ana Sayfa", href: "#hero" },
    { name: "Hizmetlerimiz", href: "#services" },
    { name: "Çözümler", href: "#how-it-works" },
    { name: "Fiyatlandırma", href: "#pricing" },
    { name: "Hakkımızda", href: "#why-us" },
    { name: "İletişim", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
            <div className="container">
                <div className="flex items-center justify-between h-[72px]">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-2xl font-extrabold text-[var(--primary-blue)]">
                            ajanslokal
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-[var(--dark-slate)] font-medium hover:text-[var(--primary-blue)] transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <Link href="/blog" className="text-[var(--dark-slate)] font-medium hover:text-[var(--primary-blue)] transition-colors">
                            Blog
                        </Link>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center gap-4">
                        <a href="#contact" className="btn btn-primary">
                            Demo Talep Et
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-[var(--dark-slate)]"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-[var(--border-gray)]"
                    >
                        <div className="container py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={handleLinkClick}
                                    className="text-[var(--dark-slate)] font-medium py-2 hover:text-[var(--primary-blue)] transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Link
                                href="/blog"
                                onClick={handleLinkClick}
                                className="text-[var(--dark-slate)] font-medium py-2 hover:text-[var(--primary-blue)] transition-colors"
                            >
                                Blog
                            </Link>
                            <a href="#contact" onClick={handleLinkClick} className="btn btn-primary mt-2 text-center">
                                Demo Talep Et
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
