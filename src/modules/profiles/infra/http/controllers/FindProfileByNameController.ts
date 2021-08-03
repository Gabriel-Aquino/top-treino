import { Request, Response } from 'express';
import { container } from 'tsyringe';
import 'reflect-metadata';
import findProfileByNameService from '@modules/profiles/services/FindProfileByNameService';

export default class FindOneProfileByNameController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const findProfileByName = container.resolve(findProfileByNameService);
    const profileNameFound = await findProfileByName.execute(name);

    return response.status(200).json(profileNameFound);
  }
}
