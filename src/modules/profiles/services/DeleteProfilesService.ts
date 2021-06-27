import IBaseDTO from 'shared/dtos/IBaseDTO';
import { inject, injectable } from 'tsyringe';
import { Profiles } from '../infra/typeorm/entities/Profiles.entities';
import IProfilesRepository from '../repositories/dtos/IProfilesRepository';

interface IRequest extends IBaseDTO{
    name: string;
}

@injectable()
export default class DeleteProfilesService {
  constructor(
        @inject('ProfilesRepository')
        private profilesRepository: IProfilesRepository,
  ) {}

  public async execute({ id, name }: IRequest): Promise<Profiles> {
    const profile = await this.profilesRepository.findById(id);

    if (!profile) {
      throw new Error('Profile not selected or with ir problem');
    }

    profile.id = id;
    profile.name = name;
    profile.is_active = false;

    await this.profilesRepository.save(profile);

    return profile;
  }
}
