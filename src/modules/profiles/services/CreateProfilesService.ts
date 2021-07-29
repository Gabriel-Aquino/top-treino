import { inject, injectable } from 'tsyringe';
import IProfilesDTO from '../dtos/IProfilesDTO';
import { Profiles } from '../infra/typeorm/entities/Profiles.entities';
import IProfilesRepository from '../repositories/dtos/IProfilesRepository';

@injectable()
export default class CreateProfilesService {
  constructor(
        @inject('ProfilesRepository')
        private profilesRepository: IProfilesRepository,
  ) {}

  public async execute({ name }: IProfilesDTO): Promise<Profiles> {
    const profile = await this.profilesRepository.create({
      name,
    });

    return profile;
  }
}
