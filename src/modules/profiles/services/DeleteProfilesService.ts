import IBaseDTOAndRequest from '@shared/dtos/IBaseDTOAndRequest';
import { inject, injectable } from 'tsyringe';
import { Profiles } from '@modules/profiles/infra/typeorm/entities/Profiles.entities';
import AppError from '@shared/errors/AppError';
import IProfilesRepository from '../repositories/dtos/IProfilesRepository';

type IRequest = Omit<IBaseDTOAndRequest, 'name' | 'is_active'>;

@injectable()
export default class DeleteProfilesService {
  constructor(
    @inject('ProfilesRepository')
    private profilesRepository: IProfilesRepository,
  ) { }

  public async execute({ id }: IRequest): Promise<Profiles> {
    const profile = await this.profilesRepository.findById(id);

    if (!profile) {
      throw new AppError('Profile not selected or with problem', 400);
    }

    profile.id = id;
    profile.is_active = false;

    await this.profilesRepository.save(profile);

    return profile;
  }
}
