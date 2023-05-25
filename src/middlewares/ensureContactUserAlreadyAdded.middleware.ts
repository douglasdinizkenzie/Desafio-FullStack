import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Contacts } from "../entities/contacts.entity";
import { AppError } from "../errors";

export const ensureContactUserAlreadyAddedMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const contactsRepository: Repository<Contacts> =
    AppDataSource.getRepository(Contacts);

  const existingContact: Contacts | null = await contactsRepository
    .createQueryBuilder("contacts")
    .where("contacts.email = :email", { email: req.body.email })
    .andWhere("contacts.user = :userId", { userId: res.locals.userId })
    .getOne();

  if (existingContact) {
    throw new AppError("A contact with this email has already been added", 409);
  }

  return next();
};
