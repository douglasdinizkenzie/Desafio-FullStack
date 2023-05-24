import { Repository } from "typeorm";
import { Contacts } from "../../entities/contacts.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";

export const deleteContactService = async (
  userId: string,
  contactId: string
): Promise<void> => {
  const contactRepository: Repository<Contacts> =
    AppDataSource.getRepository(Contacts);

  const contact = await contactRepository
    .createQueryBuilder("contacts")
    .where("contacts.id = :idContact", { idContact: contactId })
    .andWhere("contacts.user = :idUser", { idUser: userId })
    .getOne();

  if (!contact) {
    throw new AppError(
      "you do not have permission to delete this contact",
      401
    );
  }

  await contactRepository.remove(contact);

  return;
};
