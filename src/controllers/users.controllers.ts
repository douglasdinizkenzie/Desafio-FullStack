import { NextFunction, Request, Response } from "express";
import {
  TUserRequest,
  TUserRequestUpdate,
  TUserResponse,
} from "../interfaces/users.interfaces";
import { createUserService } from "../services/users/CreateUsers.service";

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
  const id = res.locals.userId;
  const data: TUserRequestUpdate = req.body;

  return res.status(200).json({ aiai: "to funcionando" });
};
