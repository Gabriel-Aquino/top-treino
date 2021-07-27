import { inject, injectable } from 'tsyringe';
import { Profiles } from '../infra/typeorm/entities/Profiles.entities';
import IProfilesRepository from '../repositories/dtos/IProfilesRepository';

@injectable()
export default class FindProfileByNameService {
  constructor(
    @inject('ProfilesRepository')
    private profilesRepository: IProfilesRepository,
  ) { }

  public async execute(name: string): Promise<Profiles[] | undefined> {
    const findOneProfileByName = await this.profilesRepository.findByName(name);

    if (findOneProfileByName?.length === undefined || findOneProfileByName?.length === 0) {
      throw new Error('There is no one profile registered with this name');
    }
    return findOneProfileByName;
  }
}
