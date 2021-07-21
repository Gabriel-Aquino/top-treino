import IBaseDTO from '@shared/dtos/IBaseDTO';
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

  public async execute({ name }: IRequest): Promise<Profiles> {
    const profile = await this.profilesRepository.create({
      name,
    });

    return profile;
  }
}
