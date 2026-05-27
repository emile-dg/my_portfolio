import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        content: defineCollection({
            type: 'page',
            source: '**/*.md',
            schema: z.object({
                slug: z.string(),
                title: z.string(),
                company: z.string(),
                location: z.string(),
                period: z.string(),
                summary: z.string(),
            }),
        }),
    },
})
