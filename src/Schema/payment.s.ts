import { z } from "zod";

export const paymentFormSchema = z.object({
  details: z.string(),
  phone: z.string(),
  city: z.string(),
});

export type paymentFormSchemaType = z.infer<typeof paymentFormSchema>;
