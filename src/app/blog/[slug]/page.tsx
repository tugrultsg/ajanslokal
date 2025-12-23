import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getRelatedPosts, getAllPostSlugs, formatDate, SanityPost } from "@/lib/sanity";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Metadata } from "next";
import { Clock, ChevronRight, Share2, Calendar, ArrowRight } from "lucide-react";

interface PageProps {
    params: Promise<{ slug: string }>;
}

// Revalidate every hour
export const revalidate = 3600;

export async function generateStaticParams() {
    const slugs = await getAllPostSlugs();
    return slugs.map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return {
            title: "Yazı Bulunamadı | ajanslokal Blog",
        };
    }

    return {
        title: `${post.title} | ajanslokal Blog`,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            publishedTime: post.publishedAt,
            authors: [post.author],
        },
    };
}

// Simple Blog Card for related posts
function RelatedBlogCard({ post }: { post: SanityPost }) {
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
                <h3 className="font-bold text-[var(--deep-navy)] group-hover:text-[var(--primary-blue)] transition-colors mb-2 line-clamp-2 text-lg">
                    {post.title}
                </h3>
                <p className="text-[var(--medium-gray)] text-sm mb-4 line-clamp-2">
                    {post.description}
                </p>
                <div className="flex items-center justify-between text-sm text-[var(--medium-gray)]">
                    <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.publishedAt)}
                    </span>
                    <span className="flex items-center gap-1 text-[var(--primary-blue)] font-medium group-hover:gap-2 transition-all">
                        Oku <ArrowRight className="w-4 h-4" />
                    </span>
                </div>
            </div>
        </Link>
    );
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = await getRelatedPosts(slug, 3);

    return (
        <>
            <Navbar />
            <main className="pt-[72px]">
                {/* Article Header */}
                <article>
                    <header className="bg-[var(--light-gray)] py-12">
                        <div className="container max-w-4xl">
                            {/* Breadcrumb */}
                            <nav className="flex items-center gap-2 text-sm text-[var(--medium-gray)] mb-6">
                                <Link href="/" className="hover:text-[var(--primary-blue)]">
                                    Ana Sayfa
                                </Link>
                                <ChevronRight className="w-4 h-4" />
                                <Link href="/blog" className="hover:text-[var(--primary-blue)]">
                                    Blog
                                </Link>
                                <ChevronRight className="w-4 h-4" />
                                <span className="text-[var(--dark-slate)]">{post.title}</span>
                            </nav>

                            {/* Title */}
                            <h1 className="text-3xl md:text-4xl font-extrabold text-[var(--deep-navy)] mb-4">
                                {post.title}
                            </h1>

                            {/* Meta */}
                            <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--medium-gray)]">
                                <span>{post.author}</span>
                                <span>•</span>
                                <span>{formatDate(post.publishedAt)}</span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {post.readTime} dk okuma
                                </span>
                            </div>
                        </div>
                    </header>

                    {/* Article Content */}
                    <div className="container max-w-4xl py-12">
                        <div className="prose prose-lg max-w-none">
                            {post.content?.split("\n").map((paragraph, i) => {
                                if (paragraph.startsWith("## ")) {
                                    return (
                                        <h2 key={i} className="text-2xl font-bold text-[var(--deep-navy)] mt-8 mb-4">
                                            {paragraph.replace("## ", "")}
                                        </h2>
                                    );
                                }
                                if (paragraph.startsWith("### ")) {
                                    return (
                                        <h3 key={i} className="text-xl font-bold text-[var(--deep-navy)] mt-6 mb-3">
                                            {paragraph.replace("### ", "")}
                                        </h3>
                                    );
                                }
                                if (paragraph.startsWith("- ")) {
                                    return (
                                        <li key={i} className="text-[var(--dark-slate)] ml-4">
                                            {paragraph.replace("- ", "")}
                                        </li>
                                    );
                                }
                                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                                    return (
                                        <p key={i} className="font-bold text-[var(--deep-navy)] my-4">
                                            {paragraph.replace(/\*\*/g, "")}
                                        </p>
                                    );
                                }
                                if (paragraph.trim() === "") {
                                    return null;
                                }
                                return (
                                    <p key={i} className="text-[var(--dark-slate)] leading-relaxed mb-4">
                                        {paragraph}
                                    </p>
                                );
                            })}
                        </div>

                        {/* Share */}
                        <div className="flex items-center gap-4 mt-12 pt-8 border-t border-[var(--border-gray)]">
                            <span className="text-[var(--medium-gray)] text-sm">Paylaş:</span>
                            <button className="w-10 h-10 bg-[var(--light-gray)] rounded-lg flex items-center justify-center text-[var(--medium-gray)] hover:bg-[var(--primary-blue)] hover:text-white transition-colors">
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Author Box */}
                        <div className="bg-[var(--light-gray)] rounded-xl p-6 mt-8 flex gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary-blue)] to-[var(--bright-cyan)] rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">
                                AJ
                            </div>
                            <div>
                                <p className="text-sm text-[var(--medium-gray)] mb-1">Yazar</p>
                                <p className="font-bold text-[var(--deep-navy)] mb-2">{post.author}</p>
                                <p className="text-sm text-[var(--medium-gray)]">
                                    Türk işletmeleri için dijital pazarlama stratejileri ve çözümleri hakkında içerikler üretiyoruz.
                                </p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="bg-gradient-to-r from-[var(--primary-blue)] to-[var(--bright-cyan)] rounded-xl p-8 mt-12 text-center text-white">
                            <h3 className="text-2xl font-bold mb-2">
                                İşletmenizi Büyütmeye Hazır mısınız?
                            </h3>
                            <p className="text-white/80 mb-6">
                                ajanslokal ile işletmenizi dijital dünyada öne çıkarın.
                            </p>
                            <Link
                                href="/#contact"
                                className="inline-block bg-white text-[var(--primary-blue)] font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors"
                            >
                                Demo Talep Et
                            </Link>
                        </div>
                    </div>
                </article>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <section className="bg-[var(--light-gray)] py-12">
                        <div className="container">
                            <h2 className="text-2xl font-bold text-[var(--deep-navy)] mb-8">
                                İlginizi Çekebilir
                            </h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {relatedPosts.map((relatedPost) => (
                                    <RelatedBlogCard key={relatedPost._id} post={relatedPost} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
            <Footer />
        </>
    );
}
