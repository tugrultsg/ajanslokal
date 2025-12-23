export default {
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 2,
        },
        {
            name: 'color',
            title: 'Color',
            type: 'string',
            description: 'Hex color code (e.g., #0066FF)',
            initialValue: '#0066FF',
        },
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'description',
        },
    },
};
