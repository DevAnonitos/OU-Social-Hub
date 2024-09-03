import * as z from "zod";

export const eventFormSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().min(3, 'Description must be at least 3 characters').max(2000, 'Description must be less than 2000 characters'),
});