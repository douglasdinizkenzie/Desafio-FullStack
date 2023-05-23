import { Repository } from "typeorm";
import "dotenv/config";
import { TLogin } from "../../interfaces/login.interface";
import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

export const loginService = async (data: TLogin): Promise<string> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const user: User | null = await userRepository.findOne({
    where: {
      email: data.email,
    },
  });

  if (!user) {
    throw new AppError("Invalid email or password", 403);
  }

  const password: boolean = await compare(data.password, user.password);
  if (!password) {
    throw new AppError("Invalid email or password", 403);
  }

  const token: string = jwt.sign(
    {
      email: user.email,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: process.env.EXPIRES_IN,
      subject: user.id,
    }
  );

  return token;
};
