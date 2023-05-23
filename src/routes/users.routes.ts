import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { userSchemaRequest, userSchemaUpdate } from "../schemas/users.schemas";
import { ensureEmailIsUniqueMiddleware } from "../middlewares/ensureEmailIsUnique.middleware";
import {
  createUserController,
  updateUserController,
} from "../controllers/users.controllers";
import { ensureIsAuthMiddleware } from "../middlewares/ensureIsAuth.middleware";

export const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSchemaRequest),
  ensureEmailIsUniqueMiddleware,
  createUserController
);

usersRoutes.patch(
  "",
  ensureIsAuthMiddleware,
  ensureDataIsValidMiddleware(userSchemaUpdate),
  updateUserController
);
