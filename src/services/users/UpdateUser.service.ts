import { Repository } from "typeorm";
import {
  TUserRequestUpdate,
  TUserResponse,
} from "../../interfaces/users.interfaces";
import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { userSchemaResponse } from "../../schemas/users.schemas";

export const updateUserService = async (
  userId: string,
  data: TUserRequestUpdate
): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const user: User | null = await userRepository.findOneBy({ id: userId });

  const updatedUser: User = userRepository.create({
    ...user,
    ...data,
  });

  await userRepository.save(updatedUser);
  return userSchemaResponse.parse(updatedUser);
};
