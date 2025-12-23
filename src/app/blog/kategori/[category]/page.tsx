import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostsByCategory, getCategoryBySlug, getCategories, getAllCategorySlugs, getAllPosts, formatDate, SanityPost } from "@/lib/sanity";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Metadata } from "next";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface PageProps {
    params: Promise<{ category: string }>;
}

// Revalidate every hour
export const revalidate = 3600;

export async function generateStaticParams() {
    const slugs = await getAllCategorySlugs();
    return slugs.map((category) => ({
        category,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { category } = await params;
    const categoryInfo = await getCategoryBySlug(category);

    if (!categoryInfo) {
        return {
            title: "Kategori Bulunamadı | ajanslokal Blog",
        };
    }

    return {
        title: `${categoryInfo.name} | ajanslokal Blog`,
        description: categoryInfo.description,
    };
}

// Blog Card Component
function BlogCard({ post }: { post: SanityPost }) {
    return (
        <Link
            href={`/blog/${post.slug.current}`}
            className="group bg-white rounded-xl border border-[var(--border-gray)] overflow-hidden shadow-sm hover:shadow-lg hover:border-[var(--primary-blue)] transition-all"
        >
            <div className="relative overflow-hidden bg-gradient-to-br from-[var(--primary-blue)] to-[var(--bright-cyan)] h-48">
                <div className="absolute inset-0 flex items-center justify-center text-white/20 text-6xl font-bold">
                    {post.title.charAt(0)}
                </div>
            </div>
            <div className="p-6">
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
                <h3 className="font-bold text-[var(--deep-navy)] group-hover:text-[var(--primary-blue)] transition-colors mb-2 line-clamp-2 text-lg">
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
                    <span className="flex items-center gap-1 text-[var(--primary-blue)] font-medium group-hover:gap-2 transition-all">
                        Oku <ArrowRight className="w-4 h-4" />
                    </span>
                </div>
            </div>
        </Link>
    );
}

export default async function CategoryPage({ params }: PageProps) {
    const { category } = await params;
    const [categoryInfo, posts, allCategories, allPosts] = await Promise.all([
        getCategoryBySlug(category),
        getPostsByCategory(category),
        getCategories(),
        getAllPosts(),
    ]);

    if (!categoryInfo) {
        notFound();
    }

    // Calculate counts for each category
    const categoriesWithCounts = allCategories.map(cat => {
        const catSlug = cat.slug.current;
        return {
            ...cat,
            count: allPosts.filter(p => {
                const postCatSlug = typeof p.category?.slug === 'string'
                    ? p.category.slug
                    : p.category?.slug?.current;
                return postCatSlug === catSlug;
            }).length
        };
    });

    return (
        <>
            <Navbar />
            <main className="pt-[72px]">
                {/* Hero */}
                <section
                    className="py-16"
                    style={{
                        background: `linear-gradient(135deg, ${categoryInfo.color}15 0%, ${categoryInfo.color}05 100%)`,
                    }}
                >
                    <div className="container">
                        <div className="flex items-center gap-2 text-sm text-[var(--medium-gray)] mb-4">
                            <Link href="/" className="hover:text-[var(--primary-blue)]">
                                Ana Sayfa
                            </Link>
                            <span>/</span>
                            <Link href="/blog" className="hover:text-[var(--primary-blue)]">
                                Blog
                            </Link>
                            <span>/</span>
                            <span className="text-[var(--dark-slate)]">{categoryInfo.name}</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-[var(--deep-navy)] mb-4">
                            {categoryInfo.name}
                        </h1>
                        <p className="text-[var(--medium-gray)] text-lg max-w-2xl">
                            {categoryInfo.description}
                        </p>
                    </div>
                </section>

                {/* Content */}
                <section className="section">
                    <div className="container">
                        <div className="grid lg:grid-cols-4 gap-12">
                            {/* Posts Grid */}
                            <div className="lg:col-span-3">
                                <p className="text-[var(--medium-gray)] mb-6">
                                    {posts.length} yazı bulundu
                                </p>
                                {posts.length > 0 ? (
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {posts.map((post) => (
                                            <BlogCard key={post._id} post={post} />
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-[var(--medium-gray)]">
                                        Bu kategoride henüz yazı yok.
                                    </p>
                                )}
                            </div>

                            {/* Sidebar */}
                            <aside className="lg:col-span-1">
                                <div className="bg-[var(--light-gray)] rounded-xl p-6 sticky top-24">
                                    <h3 className="font-bold text-[var(--deep-navy)] mb-4">
                                        Tüm Kategoriler
                                    </h3>
                                    <ul className="space-y-3">
                                        {categoriesWithCounts.map((cat) => (
                                            <li key={cat._id}>
                                                <Link
                                                    href={`/blog/kategori/${cat.slug.current}`}
                                                    className={`flex items-center justify-between transition-colors ${cat.slug.current === category
                                                        ? "text-[var(--primary-blue)] font-medium"
                                                        : "text-[var(--dark-slate)] hover:text-[var(--primary-blue)]"
                                                        }`}
                                                >
                                                    <span className="flex items-center gap-2">
                                                        <span
                                                            className="w-2 h-2 rounded-full"
                                                            style={{ backgroundColor: cat.color }}
                                                        />
                                                        {cat.name}
                                                    </span>
                                                    <span className="text-sm text-[var(--medium-gray)]">
                                                        ({cat.count})
                                                    </span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
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
