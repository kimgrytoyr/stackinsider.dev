import { defineCollection, z, reference } from "astro:content";

const articles = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    // Optional 'tags' array of strings
    tags: z.array(reference("tags")).optional(),
    author: reference("authors").optional(),
  }),
});

const glossary = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    definition: z.string().optional(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    // Optional 'tags' array of strings
    tags: z.array(reference("tags")).optional(),
    author: reference("authors").optional(),
  }),
});

const authors = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
  }),
});

const tags = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { articles, authors, glossary, tags };
