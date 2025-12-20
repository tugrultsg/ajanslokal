import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug, getRelatedPosts, formatDate } from "@/lib/blog";
import BlogCard from "@/app/components/blog/BlogCard";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Metadata } from "next";
import { Clock, ChevronRight, Share2 } from "lucide-react";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

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
            publishedTime: post.date,
            authors: [post.author],
        },
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = getRelatedPosts(slug, 3);

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
                                <span>{formatDate(post.date)}</span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {post.read_time} dk okuma
                                </span>
                            </div>
                        </div>
                    </header>

                    {/* Article Content */}
                    <div className="container max-w-4xl py-12">
                        <div className="prose prose-lg max-w-none">
                            {post.content.split("\n").map((paragraph, i) => {
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
                                    <BlogCard key={relatedPost.slug} post={relatedPost} />
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
