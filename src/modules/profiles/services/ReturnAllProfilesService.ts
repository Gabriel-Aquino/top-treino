import { inject, injectable } from 'tsyringe';
import { Profiles } from '../infra/typeorm/entities/Profiles.entities';
import IProfilesRepository from '../repositories/dtos/IProfilesRepository';

@injectable()
export default class ReturnAllProfilesService {
  constructor(
        @inject('ProfilesRepository')
        private profilesRepository: IProfilesRepository,
  ) {}

  public async execute(): Promise<Profiles[]> {
    const profile = await this.profilesRepository.findAll();

    if (!profile) {
      throw new Error('There is no one profile registered');
    }

    return profile;
  }
}
