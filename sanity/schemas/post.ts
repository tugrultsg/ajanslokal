export default {
    name: 'post',
    title: 'Blog Post',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
            description: 'Brief description for SEO and previews',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'text',
            description: 'Markdown content for the blog post',
        },
        {
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{ type: 'category' }],
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
        },
        {
            name: 'author',
            title: 'Author',
            type: 'string',
            initialValue: 'ajanslokal Ekibi',
        },
        {
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        },
        {
            name: 'featuredImage',
            title: 'Featured Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                },
            ],
        },
        {
            name: 'featured',
            title: 'Featured Post',
            type: 'boolean',
            initialValue: false,
        },
        {
            name: 'readTime',
            title: 'Read Time (minutes)',
            type: 'number',
            initialValue: 5,
        },
    ],
    preview: {
        select: {
            title: 'title',
            author: 'author',
            media: 'featuredImage',
        },
        prepare(selection: { title: string; author: string; media: any }) {
            const { title, author, media } = selection;
            return {
                title,
                subtitle: `by ${author}`,
                media,
            };
        },
    },
};
