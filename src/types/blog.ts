export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    category: string;
    tags: string[];
    author: string;
    date: string;
    featured_image: string;
    featured: boolean;
    read_time: number;
    content: string;
}

export interface BlogCategory {
    name: string;
    slug: string;
    description: string;
    count: number;
    color: string;
}
