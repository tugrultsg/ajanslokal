import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostsByCategory, getCategoryInfo, getCategories } from "@/lib/blog";
import BlogCard from "@/app/components/blog/BlogCard";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Metadata } from "next";

interface PageProps {
    params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
    const categories = getCategories();
    return categories.map((cat) => ({
        category: cat.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { category } = await params;
    const categoryInfo = getCategoryInfo(category);

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

export default async function CategoryPage({ params }: PageProps) {
    const { category } = await params;
    const categoryInfo = getCategoryInfo(category);
    const posts = getPostsByCategory(category);
    const allCategories = getCategories();

    if (!categoryInfo || posts.length === 0) {
        notFound();
    }

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
                                <div className="grid md:grid-cols-2 gap-6">
                                    {posts.map((post) => (
                                        <BlogCard key={post.slug} post={post} />
                                    ))}
                                </div>
                            </div>

                            {/* Sidebar */}
                            <aside className="lg:col-span-1">
                                <div className="bg-[var(--light-gray)] rounded-xl p-6 sticky top-24">
                                    <h3 className="font-bold text-[var(--deep-navy)] mb-4">
                                        Tüm Kategoriler
                                    </h3>
                                    <ul className="space-y-3">
                                        {allCategories.map((cat) => (
                                            <li key={cat.slug}>
                                                <Link
                                                    href={`/blog/kategori/${cat.slug}`}
                                                    className={`flex items-center justify-between transition-colors ${cat.slug === category
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
