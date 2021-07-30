import IBaseDTO from '@shared/dtos/IBaseDTO';
import { inject, injectable } from 'tsyringe';
import { Profiles } from '../infra/typeorm/entities/Profiles.entities';
import IProfilesRepository from '../repositories/dtos/IProfilesRepository';

interface IRequest extends IBaseDTO{
  id: string;
 // name: string;
}

@injectable()
export default class FindOneProfileByIdService {
  constructor(
        @inject('ProfilesRepository')
        private profilesRepository: IProfilesRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<Profiles | undefined> {
    const findOneProfileById = await this.profilesRepository.findById(id);

    if (!findOneProfileById) {
      throw new Error('There is no one profile registered with this id');
    }

    return findOneProfileById;
  }
}
