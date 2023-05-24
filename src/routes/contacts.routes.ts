import { Router } from "express";
import { ensureIsAuthMiddleware } from "../middlewares/ensureIsAuth.middleware";

export const contactsRoutes: Router = Router();

contactsRoutes.use(ensureIsAuthMiddleware);

contactsRoutes.post("");
