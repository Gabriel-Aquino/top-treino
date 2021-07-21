import IProfilesDTO from '@modules/profiles/dtos/IProfilesDTO';
import { v4 as uuid } from 'uuid';
import { Profiles } from '@modules/profiles/infra/typeorm/entities/Profiles.entities';
import IProfilesRepository from '../dtos/IProfilesRepository';

export default class FakesProfilesRepository implements IProfilesRepository {
    private profiles: Profiles[] = [];

    public async create({ name }: IProfilesDTO): Promise<Profiles> {
      const createOneProfile = new Profiles();

      Object.assign(createOneProfile, { id: uuid(), name });

      this.profiles.push(createOneProfile);

      return createOneProfile;
    }

    public async findAll(): Promise<Profiles[]> {
      return this.profiles;
    }

    public async findById(id: string): Promise<Profiles | undefined> {
      const findProfileById = this.profiles.find((profile) => profile.id === id);
      return findProfileById;
    }

    public async findByName(name: string): Promise<Profiles[] | undefined> {
      const findProfileByName = this.profiles.filter((profile) => profile.name === name);
      return findProfileByName;
    }

    public async save(profile: Profiles): Promise<Profiles> {
      const findIndex = this.profiles.findIndex((findProfile) => findProfile.id === profile.id);

      this.profiles[findIndex] = profile;

      return profile;
    }
}
