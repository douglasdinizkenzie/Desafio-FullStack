import { Repository } from "typeorm";
import { TUserRequest, TUserResponse } from "../../interfaces/users.interfaces";
import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { userSchemaResponse } from "../../schemas/users.schemas";

export const createUserService = async (
  data: TUserRequest
): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const user: User = userRepository.create(data);
  await userRepository.save(user);
  return userSchemaResponse.parse(user);
};
