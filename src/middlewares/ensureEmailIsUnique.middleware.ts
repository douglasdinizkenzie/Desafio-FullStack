import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";

export const ensureEmailIsUniqueMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const emailRequest: string = req.body.email;
  const emailUser: User | null = await userRepository.findOneBy({
    email: emailRequest,
  });

  if (emailUser) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};
