import Link from "next/link";
import { BlogPost } from "@/types/blog";
import { formatDate } from "@/lib/blog";
import { Clock, ArrowRight } from "lucide-react";

interface BlogCardProps {
    post: BlogPost;
    featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
    return (
        <article
            className={`group bg-white rounded-xl border border-[var(--border-gray)] overflow-hidden shadow-sm hover:shadow-lg hover:border-[var(--primary-blue)] transition-all ${featured ? "md:flex" : ""
                }`}
        >
            {/* Image */}
            <div
                className={`relative overflow-hidden bg-gradient-to-br from-[var(--primary-blue)] to-[var(--bright-cyan)] ${featured ? "md:w-1/2 h-64 md:h-auto" : "h-48"
                    }`}
            >
                <div className="absolute inset-0 flex items-center justify-center text-white/30 text-6xl font-bold">
                    {post.title[0]}
                </div>
            </div>

            {/* Content */}
            <div className={`p-6 ${featured ? "md:w-1/2 md:p-8" : ""}`}>
                {/* Category Badge */}
                <span
                    className="inline-block px-3 py-1 text-xs font-semibold rounded-full text-white mb-3"
                    style={{ backgroundColor: getCategoryColor(post.category) }}
                >
                    {getCategoryName(post.category)}
                </span>

                {/* Title */}
                <h3
                    className={`font-bold text-[var(--deep-navy)] group-hover:text-[var(--primary-blue)] transition-colors mb-2 line-clamp-2 ${featured ? "text-2xl" : "text-lg"
                        }`}
                >
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                {/* Description */}
                <p
                    className={`text-[var(--medium-gray)] mb-4 line-clamp-2 ${featured ? "text-base" : "text-sm"
                        }`}
                >
                    {post.description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-[var(--medium-gray)]">
                    <div className="flex items-center gap-4">
                        <span>{formatDate(post.date)}</span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.read_time} dk
                        </span>
                    </div>
                    <Link
                        href={`/blog/${post.slug}`}
                        className="flex items-center gap-1 text-[var(--primary-blue)] font-medium group-hover:gap-2 transition-all"
                    >
                        Oku
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </article>
    );
}

function getCategoryName(slug: string): string {
    const names: Record<string, string> = {
        "google-business-profile": "Google Business",
        "yerel-seo": "Yerel SEO",
        "sosyal-medya": "Sosyal Medya",
        "itibar-yonetimi": "İtibar Yönetimi",
        "dijital-pazarlama": "Dijital Pazarlama",
    };
    return names[slug] || slug;
}

function getCategoryColor(slug: string): string {
    const colors: Record<string, string> = {
        "google-business-profile": "#0066FF",
        "yerel-seo": "#10B981",
        "sosyal-medya": "#FF6B6B",
        "itibar-yonetimi": "#F59E0B",
        "dijital-pazarlama": "#8B5CF6",
    };
    return colors[slug] || "#64748B";
}
