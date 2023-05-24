import { Repository } from "typeorm";
import {
  TContacts,
  TContactsRequestUpdate,
} from "../../interfaces/contacts.interface";
import { Contacts } from "../../entities/contacts.entity";
import { AppDataSource } from "../../data-source";
import { contactsSchema } from "../../schemas/contacts.schema";
import { AppError } from "../../errors";

export const updateContactService = async (
  contactId: string,
  data: TContactsRequestUpdate,
  userId: string
): Promise<TContacts> => {
  const contactRepository: Repository<Contacts> =
    AppDataSource.getRepository(Contacts);
  const oldContact: Contacts | null = await contactRepository
    .createQueryBuilder("contacts")
    .leftJoinAndSelect("contacts.user", "user")
    .where("contacts.id = :idContact", { idContact: contactId })
    .andWhere("user.id = :idUser", { idUser: userId })
    .getOne();

  if (data.email && oldContact?.email !== data.email) {
    const contactEmailExist: Contacts | null = await contactRepository
      .createQueryBuilder("contacts")
      .where("contacts.email = :emailContact", { emailContact: data.email })
      .andWhere("contacts.user = :idUser", { idUser: userId })
      .getOne();

    if (contactEmailExist) {
      throw new AppError("A contact with this email already registred", 409);
    }
  }

  const newContact: Contacts = contactRepository.create({
    ...oldContact,
    ...data,
  });

  await contactRepository.save(newContact);
  return contactsSchema.parse(newContact);
};
