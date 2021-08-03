import { Request, Response } from 'express';
import { container } from 'tsyringe';
import 'reflect-metadata';
import updateProfilesService from '@modules/profiles/services/UpdateProfilesService';

export default class UpdateProfilesController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id, is_active, name } = request.body;

    const updateProfile = container.resolve(updateProfilesService);
    const profileUpdated = await updateProfile.execute({
      id,
      is_active,
      name,
    });

    return response.status(200).json(profileUpdated);
  }
}
