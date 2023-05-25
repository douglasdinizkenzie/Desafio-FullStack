import { z } from "zod";
import { userSchemaResponse } from "./users.schemas";

export const contactsSchema = z.object({
  id: z.string(),
  name: z.string().max(80),
  email: z.string().max(45).email(),
  phone: z.string().max(11),
  registered: z.string(),
  user: userSchemaResponse,
});

export const contactsSchemaRequest = contactsSchema.omit({
  id: true,
  registered: true,
  user: true,
});

export const contactsSchemaRequestUpdate = contactsSchemaRequest.deepPartial();
export const AllContactsSchemaResponse = contactsSchema
  .omit({ user: true })
  .array();
