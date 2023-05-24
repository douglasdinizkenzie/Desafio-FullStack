import { Repository } from "typeorm";
import {
  TContacts,
  TContactsRequest,
} from "../../interfaces/contacts.interface";
import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { contactsSchema } from "../../schemas/contacts.schema";

export const createContactsService = async (
  id: string,
  data: TContactsRequest
): Promise<TContacts> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const contactsRepository: Repository<Contacts> =
    AppDataSource.getRepository(Contacts);

  const user: User | null = await userRepository.findOneBy({ id: id });

  const newContact: Contacts = contactsRepository.create({
    ...data,
    user: user!,
  });

  await contactsRepository.save(newContact);

  return contactsSchema.parse(newContact);
};
