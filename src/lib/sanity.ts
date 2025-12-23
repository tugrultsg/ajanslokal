import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Sanity client for fetching data (read-only, uses CDN)
export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'iiylx5q1',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-01-01',
    useCdn: true, // Use CDN for faster reads
});

// Sanity client for mutations (write operations, no CDN)
export const writeClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'iiylx5q1',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
    token: process.env.SANITY_API_TOKEN, // Required for write operations
});

// Image URL builder
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
    return builder.image(source);
}

// Types
export interface SanityPost {
    _id: string;
    title: string;
    slug: { current: string };
    description: string;
    content: string;
    category: {
        _ref: string;
        name?: string;
        slug?: { current: string };
        color?: string;
    };
    tags: string[];
    author: string;
    publishedAt: string;
    featuredImage?: {
        asset: {
            _ref: string;
        };
        alt?: string;
    };
    featured: boolean;
    readTime: number;
}

export interface SanityCategory {
    _id: string;
    name: string;
    slug: { current: string };
    description: string;
    color: string;
}

// GROQ Queries
const postFields = `
  _id,
  title,
  slug,
  description,
  content,
  "category": category->{
    _id,
    name,
    "slug": slug.current,
    color
  },
  tags,
  author,
  publishedAt,
  featuredImage,
  featured,
  readTime
`;

// Fetch all published posts
export async function getAllPosts(): Promise<SanityPost[]> {
    const query = `*[_type == "post"] | order(publishedAt desc) {
    ${postFields}
  }`;
    return client.fetch(query);
}

// Fetch a single post by slug
export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
    const query = `*[_type == "post" && slug.current == $slug][0] {
    ${postFields}
  }`;
    return client.fetch(query, { slug });
}

// Fetch posts by category
export async function getPostsByCategory(categorySlug: string): Promise<SanityPost[]> {
    const query = `*[_type == "post" && category->slug.current == $categorySlug] | order(publishedAt desc) {
    ${postFields}
  }`;
    return client.fetch(query, { categorySlug });
}

// Fetch featured post
export async function getFeaturedPost(): Promise<SanityPost | null> {
    const query = `*[_type == "post" && featured == true][0] {
    ${postFields}
  }`;
    return client.fetch(query);
}

// Fetch related posts (same category, excluding current)
export async function getRelatedPosts(slug: string, limit: number = 3): Promise<SanityPost[]> {
    const query = `*[_type == "post" && slug.current != $slug] | order(publishedAt desc) [0...$limit] {
    ${postFields}
  }`;
    return client.fetch(query, { slug, limit: limit - 1 });
}

// Fetch all categories
export async function getCategories(): Promise<SanityCategory[]> {
    const query = `*[_type == "category"] | order(name asc) {
    _id,
    name,
    slug,
    description,
    color
  }`;
    return client.fetch(query);
}

// Fetch a single category by slug
export async function getCategoryBySlug(slug: string): Promise<SanityCategory | null> {
    const query = `*[_type == "category" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    description,
    color
  }`;
    return client.fetch(query, { slug });
}

// Get all post slugs (for static generation)
export async function getAllPostSlugs(): Promise<string[]> {
    const query = `*[_type == "post"].slug.current`;
    return client.fetch(query);
}

// Get all category slugs (for static generation)
export async function getAllCategorySlugs(): Promise<string[]> {
    const query = `*[_type == "category"].slug.current`;
    return client.fetch(query);
}

// Format date helper
export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}
