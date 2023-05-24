import { Repository } from "typeorm";
import { TContacts } from "../../interfaces/contacts.interface";
import { Contacts } from "../../entities/contacts.entity";
import { AppDataSource } from "../../data-source";
import { contactsSchema } from "../../schemas/contacts.schema";

export const listContactPerIdService = async (
  contactId: string
): Promise<TContacts> => {
  const contactRepository: Repository<Contacts> =
    AppDataSource.getRepository(Contacts);
  const contact: Contacts | null = await contactRepository.findOne({
    where: { id: contactId },
    relations: { user: true },
  });

  return contactsSchema.parse(contact);
};
