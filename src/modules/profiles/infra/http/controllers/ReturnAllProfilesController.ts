import { Request, Response } from 'express';
import { container } from 'tsyringe';
import 'reflect-metadata';
import ReturnAllProfilesService from '@modules/profiles/services/ReturnAllProfilesService';

export default class returnAllProfilesController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const returnAllProfiles = container.resolve(ReturnAllProfilesService);
    const profilesFound = await returnAllProfiles.execute();

    return response.status(200).json(profilesFound);
  }
}
