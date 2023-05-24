import { z } from "zod";
import {
  contactsSchema,
  contactsSchemaRequest,
} from "../schemas/contacts.schema";
import { DeepPartial } from "typeorm";

export type TContacts = z.infer<typeof contactsSchema>;
export type TContactsRequest = z.infer<typeof contactsSchemaRequest>;
export type TContactsRequestUpdate = DeepPartial<TContactsRequest>;
