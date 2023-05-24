import { Request, Response } from "express";
import {
  TAllContactsResponse,
  TContacts,
  TContactsRequest,
  TContactsRequestUpdate,
} from "../interfaces/contacts.interface";
import { createContactsService } from "../services/contacts/createContacts.service";
import { listAllContactsService } from "../services/contacts/listAllContacts.service";
import { listContactPerIdService } from "../services/contacts/listContactPerId.service";
import { updateContactService } from "../services/contacts/updateContact.service";
import { deleteContactService } from "../services/contacts/deleteContact.service";

export const CreateContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: string = res.locals.userId;
  const data: TContactsRequest = req.body;
  const newContact: TContacts = await createContactsService(id, data);
  return res.status(201).json(newContact);
};

export const ListAllContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: string = res.locals.userId;
  const allContacts: TAllContactsResponse = await listAllContactsService(id);
  return res.status(200).json(allContacts);
};

export const listContactPerIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId: string = req.params.id;
  const contact: TContacts = await listContactPerIdService(contactId);
  return res.status(200).json(contact);
};

export const updateContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: string = res.locals.userId;
  const contactId: string = req.params.id;
  const data: TContactsRequestUpdate = req.body;
  const newContact: TContacts = await updateContactService(
    contactId,
    data,
    userId
  );
  return res.status(200).json(newContact);
};

export const deleteContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId: string = req.params.id;
  const userId: string = res.locals.userId;
  await deleteContactService(userId, contactId);
  return res.status(204).json();
};
