import Link from "next/link";
import { getAllPosts, getFeaturedPost, getCategories, formatDate, SanityPost, SanityCategory } from "@/lib/sanity";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Metadata } from "next";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: "Blog | ajanslokal - Dijital Pazarlama Rehberi",
    description:
        "Google SEO, sosyal medya, yorum yönetimi ve yerel işletmeler için dijital pazarlama stratejileri",
};

// Revalidate every hour
export const revalidate = 3600;

// Blog Card Component (inline to avoid import issues)
function BlogCard({ post, featured = false }: { post: SanityPost; featured?: boolean }) {
    return (
        <Link
            href={`/blog/${post.slug.current}`}
            className={`group bg-white rounded-xl border border-[var(--border-gray)] overflow-hidden shadow-sm hover:shadow-lg hover:border-[var(--primary-blue)] transition-all ${featured ? "md:flex" : ""
                }`}
        >
            <div
                className={`relative overflow-hidden bg-gradient-to-br from-[var(--primary-blue)] to-[var(--bright-cyan)] ${featured ? "md:w-1/2 h-64 md:h-auto" : "h-48"
                    }`}
            >
                <div className="absolute inset-0 flex items-center justify-center text-white/20 text-6xl font-bold">
                    {post.title.charAt(0)}
                </div>
            </div>
            <div className={`p-6 ${featured ? "md:w-1/2 md:flex md:flex-col md:justify-center" : ""}`}>
                {post.category && (
                    <span
                        className="inline-block text-xs font-semibold px-2 py-1 rounded-full mb-3"
                        style={{
                            backgroundColor: `${post.category.color || '#0066FF'}20`,
                            color: post.category.color || '#0066FF',
                        }}
                    >
                        {post.category.name}
                    </span>
                )}
                <h3
                    className={`font-bold text-[var(--deep-navy)] group-hover:text-[var(--primary-blue)] transition-colors mb-2 line-clamp-2 ${featured ? "text-2xl" : "text-lg"
                        }`}
                >
                    {post.title}
                </h3>
                <p className="text-[var(--medium-gray)] text-sm mb-4 line-clamp-2">
                    {post.description}
                </p>
                <div className="flex items-center justify-between text-sm text-[var(--medium-gray)]">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(post.publishedAt)}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime} dk
                        </span>
                    </div>
                    <span
                        className="flex items-center gap-1 text-[var(--primary-blue)] font-medium group-hover:gap-2 transition-all"
                    >
                        Oku <ArrowRight className="w-4 h-4" />
                    </span>
                </div>
            </div>
        </Link>
    );
}

export default async function BlogPage() {
    const [posts, featuredPost, categories] = await Promise.all([
        getAllPosts(),
        getFeaturedPost(),
        getCategories(),
    ]);

    const regularPosts = posts.filter((post) => !post.featured);

    // Count posts per category
    const categoryWithCounts = categories.map(cat => ({
        ...cat,
        count: posts.filter(p => p.category?.slug === cat.slug.current).length
    }));

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
                                    {regularPosts.length > 0 ? (
                                        <div className="grid md:grid-cols-2 gap-6">
                                            {regularPosts.map((post) => (
                                                <BlogCard key={post._id} post={post} />
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-[var(--medium-gray)]">
                                            Henüz blog yazısı yok. Yakında yeni içerikler eklenecek!
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Sidebar */}
                            <aside className="lg:col-span-1">
                                {/* Categories */}
                                <div className="bg-[var(--light-gray)] rounded-xl p-6 mb-6">
                                    <h3 className="font-bold text-[var(--deep-navy)] mb-4">
                                        Kategoriler
                                    </h3>
                                    {categoryWithCounts.length > 0 ? (
                                        <ul className="space-y-3">
                                            {categoryWithCounts.map((category) => (
                                                <li key={category._id}>
                                                    <Link
                                                        href={`/blog/kategori/${category.slug.current}`}
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
                                    ) : (
                                        <p className="text-[var(--medium-gray)] text-sm">
                                            Kategoriler yükleniyor...
                                        </p>
                                    )}
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
