import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Contacts } from "../entities/contacts.entity";
import { validate as validateUUID } from "uuid";

export const ensureContactExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const contactRepository: Repository<Contacts> =
    AppDataSource.getRepository(Contacts);

  const contactId = req.params.id;
  if (!validateUUID(contactId)) {
    throw new AppError("Invalid contact id", 400);
  }

  const contact = await contactRepository.findOne({
    where: { id: contactId },
  });
  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  return next();
};
