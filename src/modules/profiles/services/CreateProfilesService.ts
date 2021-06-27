import IBaseDTO from 'shared/dtos/IBaseDTO';
import { inject, injectable } from 'tsyringe';
import { Profiles } from '../infra/typeorm/entities/Profiles.entities';
import IProfilesRepository from '../repositories/dtos/IProfilesRepository';

interface IRequest extends IBaseDTO{
    name: string;
}

@injectable()
export default class CreateProfilesService {
  constructor(
        @inject('ProfilesRepository')
        private profilesRepository: IProfilesRepository,
  ) {}

  public async execute({ id, is_active, name }: IRequest): Promise<Profiles> {
    const findProfileById = await this.profilesRepository.findById(id);

    if (findProfileById) {
      throw new Error('Profile already exists');
    }

    const profile = await this.profilesRepository.create({
      id,
      is_active,
      name,
    });

    return profile;
  }
}
