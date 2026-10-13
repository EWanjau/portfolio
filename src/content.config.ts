import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    order: z.number(),
    tools: z.array(z.string()).default([]),
    projectUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    status: z.enum(['draft', 'final']).default('draft'),
  }),
});

export const collections = { 'case-studies': caseStudies };
