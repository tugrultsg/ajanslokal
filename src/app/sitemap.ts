import { MetadataRoute } from "next";
import { getAllPosts, getCategories } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getAllPosts();
    const categories = getCategories();

    const blogPosts = posts.map((post) => ({
        url: `https://ajanslokal.com/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "weekly" as const,
        priority: 0.7,
    }));

    const categoryPages = categories.map((category) => ({
        url: `https://ajanslokal.com/blog/kategori/${category.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.6,
    }));

    return [
        {
            url: "https://ajanslokal.com",
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        {
            url: "https://ajanslokal.com/blog",
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.8,
        },
        ...blogPosts,
        ...categoryPages,
    ];
}
