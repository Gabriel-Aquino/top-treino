import IBaseDTO from 'shared/dtos/IBaseDTO';
import { inject, injectable } from 'tsyringe';
import { Profiles } from '../infra/typeorm/entities/Profiles.entities';
import IProfilesRepository from '../repositories/dtos/IProfilesRepository';

interface IRequest extends IBaseDTO{
    name: string;
}

@injectable()
export default class UpdateProfilesService {
  constructor(
        @inject('ProfilesRepository')
        private profilesRepository: IProfilesRepository,
  ) {}

  public async execute({ id, is_active, name }: IRequest): Promise<Profiles> {
    const profile = await this.profilesRepository.findById(id);

    if (!profile) {
      throw new Error('Cannot update this profile because its not exists');
    }

    profile.id = id;
    profile.name = name;
    profile.is_active = is_active;

    await this.profilesRepository.save(profile);

    return profile;
  }
}
