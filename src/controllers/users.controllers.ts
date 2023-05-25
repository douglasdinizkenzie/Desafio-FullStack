import { Request, Response } from "express";
import {
  TUserRequest,
  TUserRequestUpdate,
  TUserResponse,
} from "../interfaces/users.interfaces";
import { createUserService } from "../services/users/CreateUsers.service";
import { updateUserService } from "../services/users/UpdateUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data: TUserRequest = req.body;
  const newUser: TUserResponse = await createUserService(data);

  return res.status(201).json(newUser);
};

export const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: string = res.locals.userId;
  const data: TUserRequestUpdate = req.body;
  const updatedUser: TUserResponse = await updateUserService(id, data);

  return res.status(200).json(updatedUser);
};

export const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: string = res.locals.userId;
  await deleteUserService(id);
  return res.status(204).json();
};
