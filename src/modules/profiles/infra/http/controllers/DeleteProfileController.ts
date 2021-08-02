import { Request, Response } from 'express';
import deleteProfilesService from '@modules/profiles/services/DeleteProfilesService';
import { container } from 'tsyringe';
import 'reflect-metadata';

export default class DeleteProfileController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const deleteProfile = container.resolve(deleteProfilesService);
    const deletedProfile = await deleteProfile.execute({
      id,
    });

    return response.status(200).json(deletedProfile);
  }
}
