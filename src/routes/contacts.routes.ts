import { Router } from "express";
import { ensureIsAuthMiddleware } from "../middlewares/ensureIsAuth.middleware";
import {
  CreateContactsController,
  ListAllContactsController,
  deleteContactController,
  listContactPerIdController,
  updateContactController,
} from "../controllers/contacts.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import {
  contactsSchemaRequest,
  contactsSchemaRequestUpdate,
} from "../schemas/contacts.schema";
import { ensureContactUserAlreadyAddedMiddleware } from "../middlewares/ensureContactUserAlreadyAdded.middleware";
import { ensureContactExistsMiddleware } from "../middlewares/ensureContactExists.middleware";

export const contactsRoutes: Router = Router();

contactsRoutes.use(ensureIsAuthMiddleware);

contactsRoutes.get("", ListAllContactsController);

contactsRoutes.get(
  "/:id",
  ensureContactExistsMiddleware,
  listContactPerIdController
);

contactsRoutes.post(
  "",
  ensureDataIsValidMiddleware(contactsSchemaRequest),
  ensureContactUserAlreadyAddedMiddleware,
  CreateContactsController
);

contactsRoutes.patch(
  "/:id",
  ensureDataIsValidMiddleware(contactsSchemaRequestUpdate),
  ensureContactExistsMiddleware,
  updateContactController
);

contactsRoutes.delete(
  "/:id",
  ensureContactExistsMiddleware,
  deleteContactController
);
