import Link from "next/link";
import { getAllPosts, getFeaturedPost, getCategories } from "@/lib/blog";
import BlogCard from "@/app/components/blog/BlogCard";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | ajanslokal - Dijital Pazarlama Rehberi",
    description:
        "Google SEO, sosyal medya, yorum yönetimi ve yerel işletmeler için dijital pazarlama stratejileri",
};

export default function BlogPage() {
    const posts = getAllPosts();
    const featuredPost = getFeaturedPost();
    const categories = getCategories();
    const regularPosts = posts.filter((post) => !post.featured);

    return (
        <>
            <Navbar />
            <main className="pt-[72px]">
                {/* Hero */}
                <section className="bg-gradient-to-br from-[var(--primary-blue)] to-[var(--bright-cyan)] py-16">
                    <div className="container text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                            Dijital Pazarlama Rehberi
                        </h1>
                        <p className="text-white/80 text-lg max-w-2xl mx-auto">
                            Google SEO, sosyal medya, yorum yönetimi ve yerel işletmeler için
                            dijital pazarlama stratejileri
                        </p>
                    </div>
                </section>

                {/* Content */}
                <section className="section">
                    <div className="container">
                        <div className="grid lg:grid-cols-4 gap-12">
                            {/* Main Content */}
                            <div className="lg:col-span-3">
                                {/* Featured Post */}
                                {featuredPost && (
                                    <div className="mb-12">
                                        <h2 className="text-sm font-semibold text-[var(--medium-gray)] uppercase tracking-wider mb-4">
                                            Öne Çıkan
                                        </h2>
                                        <BlogCard post={featuredPost} featured />
                                    </div>
                                )}

                                {/* Recent Posts */}
                                <div>
                                    <h2 className="text-sm font-semibold text-[var(--medium-gray)] uppercase tracking-wider mb-6">
                                        Son Yazılar
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {regularPosts.map((post) => (
                                            <BlogCard key={post.slug} post={post} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <aside className="lg:col-span-1">
                                {/* Categories */}
                                <div className="bg-[var(--light-gray)] rounded-xl p-6 mb-6">
                                    <h3 className="font-bold text-[var(--deep-navy)] mb-4">
                                        Kategoriler
                                    </h3>
                                    <ul className="space-y-3">
                                        {categories.map((category) => (
                                            <li key={category.slug}>
                                                <Link
                                                    href={`/blog/kategori/${category.slug}`}
                                                    className="flex items-center justify-between text-[var(--dark-slate)] hover:text-[var(--primary-blue)] transition-colors"
                                                >
                                                    <span className="flex items-center gap-2">
                                                        <span
                                                            className="w-2 h-2 rounded-full"
                                                            style={{ backgroundColor: category.color }}
                                                        />
                                                        {category.name}
                                                    </span>
                                                    <span className="text-sm text-[var(--medium-gray)]">
                                                        ({category.count})
                                                    </span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA */}
                                <div className="bg-gradient-to-br from-[var(--primary-blue)] to-[var(--bright-cyan)] rounded-xl p-6 text-white">
                                    <h3 className="font-bold text-lg mb-2">Ücretsiz Demo</h3>
                                    <p className="text-white/80 text-sm mb-4">
                                        İşletmenizi dijital dünyada büyütmeye hazır mısınız?
                                    </p>
                                    <Link
                                        href="/#contact"
                                        className="inline-block bg-white text-[var(--primary-blue)] font-semibold px-4 py-2 rounded-lg hover:bg-white/90 transition-colors"
                                    >
                                        Demo Talep Et
                                    </Link>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
