import { z } from "zod";
import { loginSchema } from "../schemas/login.schemas";

export type TLogin = z.infer<typeof loginSchema>;
