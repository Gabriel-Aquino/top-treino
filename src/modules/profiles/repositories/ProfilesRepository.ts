import { getRepository, Repository } from 'typeorm';
import IProfilesDTO from '../dtos/IProfilesDTO';
import { Profiles } from '../infra/typeorm/entities/Profiles.entities';
import IProfilesRepository from './dtos/IProfilesRepository';

export default class ProfilesRepository implements IProfilesRepository {
    private ormRepository: Repository<Profiles>;

    constructor() {
      this.ormRepository = getRepository(Profiles);
    }

    async create({ id, is_active, name }: IProfilesDTO): Promise<Profiles> {
      const createProfile = this.ormRepository.create({
        id,
        name,
        is_active,
      });

      await this.ormRepository.save(createProfile);

      return createProfile;
    }

    async findAll(): Promise<Profiles[]> {
      const allProfiles = await this.ormRepository.find();

      return allProfiles;
    }

    async findById(id: string): Promise<Profiles | undefined> {
      const findOneProfileById = await this.ormRepository.findOne({
        where: {
          id,
        },
      });

      return findOneProfileById;
    }

    async findByName(name: string): Promise<Profiles | undefined> {
      const findOneProfileByName = await this.ormRepository.findOne({
        where: {
          name,
        },
      });

      return findOneProfileByName;
    }

    async remove(id: string): Promise<void> {
      await this.ormRepository.delete(id);
    }

    async save(profile: Profiles): Promise<Profiles> {
      return this.ormRepository.save(profile);
    }
}
