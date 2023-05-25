import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  name: z.string().max(80),
  email: z.string().max(45).email(),
  password: z.string().max(25),
  phone: z.string().max(11),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const userSchemaRequest = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const userSchemaResponse = userSchema.omit({
  password: true,
});

export const userSchemaUpdate = userSchemaRequest.deepPartial();
