import CreateProfilesService from '@modules/profiles/services/CreateProfilesService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class CreateProfileController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createNewProfile = container.resolve(CreateProfilesService);
    const newProfile = await createNewProfile.execute({
      name,
    });

    return response.status(200).json(newProfile);
  }
}
