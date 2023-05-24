import { z } from "zod";

export const contactsSchema = z.object({
  id: z.string(),
  name: z.string().max(80),
  email: z.string().max(45).email(),
  phone: z.string().max(11),
  createdAt: z.string(),
});

export const contactsSchemaRequest = contactsSchema.omit({
  createdAt: true,
  id: true,
});

export const contactsSchemaRequestUpdate = contactsSchemaRequest.partial();
