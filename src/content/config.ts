import { defineCollection, z } from 'astro:content';

const reviewsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Antigravity Lab'),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    rating: z.number().min(1).max(5).default(5),
    heroEmoji: z.string().default('📌'),
    affiliateSlug: z.string().optional(),
    pros: z.array(z.string()).default([]),
    cons: z.array(z.string()).default([]),
  }),
});

export const collections = {
  reviews: reviewsCollection,
};
