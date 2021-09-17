import IProfilesRepository from '@modules/profiles/repositories/dtos/IProfilesRepository';
import FakesProfilesRepository from '@modules/profiles/repositories/fakes/FakesProfilesRepository';
import { createProfileFactory } from '@shared/database/factories/profiles/createProfileFactory';
import AppError from '@shared/errors/AppError';
import 'reflect-metadata';
import ReturnAllProfilesService from '../ReturnAllProfilesService';

describe('Return all Registered Profiles', () => {
  let fakeProfileRepository: IProfilesRepository;
  let returnAllProfiles: ReturnAllProfilesService;
  const createProfilesFactory = createProfileFactory.buildList(2);
  beforeAll(() => {
    fakeProfileRepository = new FakesProfilesRepository();
    returnAllProfiles = new ReturnAllProfilesService(fakeProfileRepository);
  });
  it('should be able to return all registered profiles', async () => {
    const profile1 = await fakeProfileRepository.create({
      name: createProfilesFactory[0].name,
    });

    const profile2 = await fakeProfileRepository.create({
      name: createProfilesFactory[1].name,
    });

    const all = await returnAllProfiles.execute();
    expect(all).toContain(profile1);
    expect(all).toContain(profile2);
  });

  it('should not be able to return all registered profiles', async () => {
    fakeProfileRepository = new FakesProfilesRepository();
    returnAllProfiles = new ReturnAllProfilesService(fakeProfileRepository);
    await expect(
      returnAllProfiles.execute(),
    ).rejects.toBeInstanceOf(AppError);
  });
});
