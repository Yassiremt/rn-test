import { z } from "zod";

export const postSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(90, "Title must have less than 90"),
  body: z
    .string()
    .min(1, "Body is required")
    .max(700, "Title must have less than 700"),
  thumbnail: z.string().min(1, "Thumbnail is required"),
});

export type PostSchemaType = z.infer<typeof postSchema>;
