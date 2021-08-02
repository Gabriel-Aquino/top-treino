import IBaseDTOAndRequest from '@shared/dtos/IBaseDTOAndRequest';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { Profiles } from '../infra/typeorm/entities/Profiles.entities';
import IProfilesRepository from '../repositories/dtos/IProfilesRepository';

type IRequest = Omit<IBaseDTOAndRequest, 'name' | 'is_active'>;

@injectable()
export default class FindOneProfileByIdService {
  constructor(
    @inject('ProfilesRepository')
    private profilesRepository: IProfilesRepository,
  ) { }

  public async execute({ id }: IRequest): Promise<Profiles | undefined> {
    const findOneProfileById = await this.profilesRepository.findById(id);

    if (!findOneProfileById) {
      throw new AppError('There is no one profile registered with this id', 400);
    }

    return findOneProfileById;
  }
}
