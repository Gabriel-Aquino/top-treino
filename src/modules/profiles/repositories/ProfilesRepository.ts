import { getRepository, Like, Repository } from 'typeorm';
import IProfilesDTO from '@modules/profiles/dtos/IProfilesDTO';
import { Profiles } from '@modules/profiles/infra/typeorm/entities/Profiles.entities';
import IProfilesRepository from './dtos/IProfilesRepository';
import 'reflect-metadata';

export default class ProfilesRepository implements IProfilesRepository {
    private ormRepository: Repository<Profiles>;

    constructor() {
      this.ormRepository = getRepository(Profiles);
    }

    async create({ name }: IProfilesDTO): Promise<Profiles> {
      const createProfile = this.ormRepository.create({
        name,
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

    async findByName(name: string): Promise<Profiles[] | undefined> {
      const findOneProfileByName = await this.ormRepository.find({
        name: Like(`%${name}%`),
      });

      return findOneProfileByName;
    }

    async save(profile: Profiles): Promise<Profiles> {
      return this.ormRepository.save(profile);
    }
}
