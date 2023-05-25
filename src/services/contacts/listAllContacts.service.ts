import { Repository } from "typeorm";
import { TAllContactsResponse } from "../../interfaces/contacts.interface";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AllContactsSchemaResponse } from "../../schemas/contacts.schema";

export const listAllContactsService = async (
  userId: string
): Promise<TAllContactsResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      contacts: true,
    },
  });

  return AllContactsSchemaResponse.parse(user?.contacts);
};
