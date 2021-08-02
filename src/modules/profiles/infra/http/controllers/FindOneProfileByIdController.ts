import findOneProfileById from '@modules/profiles/services/FindOneProfileByIdService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import 'reflect-metadata';

export default class FindOneProfileByIdController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findOneProfile = container.resolve(findOneProfileById);
    const profileFound = await findOneProfile.execute({
      id,
    });

    return response.status(200).json(profileFound);
  }
}
