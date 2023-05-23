import { z } from "zod";
import {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  userSchemaUpdate,
} from "../schemas/users.schemas";
import { DeepPartial } from "typeorm";

export type TUser = z.infer<typeof userSchema>;
export type TUserRequest = z.infer<typeof userSchemaRequest>;
export type TUserResponse = z.infer<typeof userSchemaResponse>;
export type TUserRequestUpdate = DeepPartial<TUserRequest>;
