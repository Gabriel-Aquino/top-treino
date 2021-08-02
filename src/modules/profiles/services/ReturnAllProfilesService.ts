import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { Profiles } from '../infra/typeorm/entities/Profiles.entities';
import IProfilesRepository from '../repositories/dtos/IProfilesRepository';

@injectable()
export default class ReturnAllProfilesService {
  constructor(
    @inject('ProfilesRepository')
    private profilesRepository: IProfilesRepository,
  ) { }

  public async execute(): Promise<Profiles[]> {
    const profile = await this.profilesRepository.findAll();

    if (profile?.length === undefined || profile?.length === 0) {
      throw new AppError('There is no one profile registered', 400);
    }
    return profile;
  }
}
