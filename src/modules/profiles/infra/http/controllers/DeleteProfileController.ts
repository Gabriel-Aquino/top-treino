import { Request, Response } from 'express';
import deleteProfilesService from '@modules/profiles/services/DeleteProfilesService';
import { container } from 'tsyringe';
import 'reflect-metadata';

export default class DeleteProfileController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const deleteNewProfile = container.resolve(deleteProfilesService);
    const newProfile = await deleteNewProfile.execute({
      id,
    });

    return response.status(200).json(newProfile);
  }
}
