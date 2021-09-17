import { createProfileFactory } from '@shared/database/factories/profiles/createProfileFactory';
import IProfilesRepository from '@modules/profiles/repositories/dtos/IProfilesRepository';
import FakesProfilesRepository from '../../repositories/fakes/FakesProfilesRepository';
import 'reflect-metadata';
import CreateProfilesService from '../CreateProfilesService';

describe('CreateProfiles', () => {
  let fakeProfileRepository: IProfilesRepository;
  let createProfile: CreateProfilesService;
  const createProfilesFactory = createProfileFactory.build();
  beforeAll(() => {
    fakeProfileRepository = new FakesProfilesRepository();
    createProfile = new CreateProfilesService(fakeProfileRepository);
  });

  it('should be able to create a new profile', async () => {
    const profile = await createProfile.execute({
      name: createProfilesFactory.name,
    });

    expect(profile).toHaveProperty('id');
  });
});
